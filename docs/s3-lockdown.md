# S3 Bucket Lockdown — Checklist

The `rovnerlawbucket` S3 bucket needs its access locked down. This is an AWS-console / IAM task — there are **no code changes in this PR**, only this document.

Currently:

- `src/app/api/upload/route.ts` sets `ACL: 'public-read'` on every upload (removed in PR 06).
- The bucket likely has Public Access Block disabled and broad permissions, or it wouldn't serve the marketing site's images.
- The IAM user whose credentials sit in `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` (in Vercel envs) almost certainly has more permissions than it needs.

Goal: keep `uploads/*` objects publicly readable (the marketing site needs that), block public listing of the bucket, and scope the IAM principal to just what the app needs.

## Order of operations

Do **not** skip ahead. Apply the bucket policy first; otherwise the moment PR 06 lands and stops setting `ACL: public-read` on uploads, new uploads will be unreadable.

1. Apply the **bucket policy** (allows public GET on `uploads/*`).
2. Apply the **IAM policy** to a *new* IAM user (do not edit the existing one in place).
3. Generate access keys for the new user.
4. Update Vercel env vars (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`) to the new keys.
5. Trigger a Vercel redeploy (or wait for the next push).
6. Test an upload end-to-end from `/admin`.
7. Delete the old IAM user's access keys (only after the new ones are confirmed working).
8. Merge PR 06.

## Bucket policy

Bucket: `rovnerlawbucket` (region `us-east-1`).

Step-by-step:

1. AWS Console → S3 → `rovnerlawbucket` → **Permissions** tab.
2. Under **Block public access (bucket settings)** click **Edit** and ensure:
   - "Block all public access" → **Off**
   - "Block public access to buckets and objects granted through new access control lists (ACLs)" → **On**
   - "Block public access to buckets and objects granted through any access control lists (ACLs)" → **On**
   - "Block public access to buckets and objects granted through new public bucket or access point policies" → **Off** (we are about to set one)
   - "Block public and cross-account access to buckets and objects through any public bucket or access point policies" → **Off**
   - Confirm by typing `confirm`.
3. Under **Bucket policy** click **Edit** and paste:

```json
{
  "Version": "2012-10-17",
  "Id": "RovnerLawBucketPolicy",
  "Statement": [
    {
      "Sid": "AllowPublicReadOnUploads",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rovnerlawbucket/uploads/*"
    },
    {
      "Sid": "DenyPublicListing",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::rovnerlawbucket",
      "Condition": {
        "StringNotLike": {
          "aws:PrincipalArn": "arn:aws:iam::<ACCOUNT_ID>:user/rovner-law-website-uploader"
        }
      }
    }
  ]
}
```

Replace `<ACCOUNT_ID>` with your 12-digit AWS account ID before pasting.

**What this allows / blocks:**

- Anonymous GET on any object under `uploads/*` (so marketing-site images keep loading) — yes.
- Anonymous LIST of the bucket (i.e. visiting `https://rovnerlawbucket.s3.amazonaws.com/` and seeing every key) — **no**.
- Anonymous read of anything outside `uploads/*` (e.g. backups someone dropped at the root) — **no**.

If you currently store anything outside `uploads/*` that needs public read, add another `Allow s3:GetObject` statement for that prefix.

## IAM policy

Create a **new** IAM user — do not modify the existing one in place; rotate to it once the new keys are confirmed working.

Step-by-step:

1. AWS Console → IAM → Users → **Create user**.
2. Name: `rovner-law-website-uploader`.
3. **Without console access** (this is a programmatic user only).
4. On the permissions step, choose **Attach policies directly** → **Create policy**.
5. JSON tab, paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "UploadAndReadObjects",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::rovnerlawbucket/uploads/*"
    },
    {
      "Sid": "GetBucketLocation",
      "Effect": "Allow",
      "Action": "s3:GetBucketLocation",
      "Resource": "arn:aws:s3:::rovnerlawbucket"
    }
  ]
}
```

6. Name the policy `RovnerLawBucketUploaderPolicy`. Save.
7. Attach this policy to the `rovner-law-website-uploader` user.
8. Open the user → **Security credentials** → **Create access key** → **Application running outside AWS**.
9. Copy the Access Key ID and Secret Access Key. **You will not see the secret again.**

**What this allows / blocks:**

- PUT, GET, DELETE on objects under `uploads/*` — yes.
- PUT or DELETE on any other prefix — **no**.
- LIST the bucket, read tags, change ACLs, change bucket policy, etc. — **no**.
- Touch any other bucket in the account — **no**.

Notably this policy does **not** grant `s3:PutObjectAcl`. That is intentional: PR 06 removes the inline `ACL: 'public-read'` from the upload code, and the bucket policy above handles public read for the whole `uploads/*` prefix.

## Vercel env update

1. Vercel → Project → Settings → **Environment Variables**.
2. Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for **Production**, **Preview**, and **Development** to the new key pair.
3. Confirm `AWS_BUCKET_NAME` is `rovnerlawbucket` and `AWS_REGION` is `us-east-1`.
4. Trigger a redeploy (e.g. via "Redeploy" button on the most recent production deployment).

## Verification

After redeploy:

- [ ] Visit any existing image URL (e.g. one of the practice-area card images on the home page). Loads → bucket policy is right.
- [ ] Log into `/admin` and upload a new image via a CRUD form. Upload succeeds → IAM policy and keys are right.
- [ ] The newly uploaded image displays on the public site → public-read on `uploads/*` is right.
- [ ] Try `curl -s https://rovnerlawbucket.s3.amazonaws.com/ | head` from a terminal. Should return `<Error>...AccessDenied` (or similar). If it returns a listing, the `DenyPublicListing` statement isn't applied.
- [ ] In AWS Console → S3 → `rovnerlawbucket` → **Access** column should now show **Objects can be public** but **Bucket and objects not public** (or similar).

## Rollback

If the new IAM keys break uploads after switching, set Vercel env vars back to the old key pair and redeploy. You can also temporarily re-add `ACL: 'public-read'` to `src/app/api/upload/route.ts` if PR 06 has already merged and uploads aren't readable — but the proper fix is to verify the bucket policy.

## What this PR does not do

- No code changes. The upload code's `ACL: 'public-read'` is removed in **PR 06**, which depends on this checklist having been applied first.
- Does not enable bucket versioning, lifecycle rules, server-side encryption, or access logging. Out of scope.
- Does not configure CloudFront in front of the bucket. The marketing site loads images directly from `rovnerlawbucket.s3.us-east-1.amazonaws.com` (per `next.config.ts` remote patterns). Adding a CDN is a future improvement, not part of this cleanup.

## Owner action needed

Apply the bucket policy and create the IAM user as documented above, then confirm in this PR's comments. PR 06 will follow once this is in place.
