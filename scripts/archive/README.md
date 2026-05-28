# scripts/archive

One-off scripts that were run once against a specific dataset and aren't expected to be run again. Kept in the repo for historical context — feel free to delete if a year passes without anyone referencing them.

| File | Purpose |
|---|---|
| `create-lawyers.ts` | Bulk-created the initial Lawyer rows when the firm switched to the DB-backed attorneys page. |
| `fix-eslint.js` / `fix-eslint-comprehensive.js` | Codemod scripts from earlier ESLint cleanups. PR 15 superseded these. |
| `fix-lawyer-orders.ts` | Repaired `Lawyer.order` after a manual data load. |
| `reseed-archives.ts` | Re-ran the Bob Rovner archive seed against S3 + the DB. |
| `seed-local.ts` | Local seeding helper from early development. Doesn't match the current schema; do not run blindly. |

The active script is `scripts/create-admin.ts`, run via `npm run create-admin`.
