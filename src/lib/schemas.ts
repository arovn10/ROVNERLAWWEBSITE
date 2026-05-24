import { z } from "zod";
import { NextResponse } from "next/server";

// Helper: returns a 400 response with the issue list, or null if the body parses.
// Use as: const parsed = parseOrError(schema, await req.json()); if (parsed instanceof NextResponse) return parsed;
export function parseOrError<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown,
): z.infer<T> | NextResponse {
  const result = schema.safeParse(data);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid request body", issues: result.error.issues },
      { status: 400 },
    );
  }
  return result.data;
}

const optionalNullableString = z.string().nullish().transform((v) => v ?? null);
const isoDateString = z
  .string()
  .min(1)
  .refine((s) => !Number.isNaN(Date.parse(s)), { message: "Invalid ISO date" });

// --- Lawyer ---
export const lawyerCreateSchema = z.object({
  name: z.string().min(1),
  title: optionalNullableString,
  bio: optionalNullableString,
  education: optionalNullableString,
  experience: optionalNullableString,
  specialties: optionalNullableString,
  image: optionalNullableString,
  email: z.string().email().nullish().transform((v) => v ?? null),
  phone: optionalNullableString,
  order: z.number().int().optional(),
  active: z.boolean().optional(),
});
export const lawyerUpdateSchema = lawyerCreateSchema.partial();

// --- Settlement ---
export const settlementCreateSchema = z.object({
  title: z.string().min(1),
  description: optionalNullableString,
  amount: z.coerce.number().nonnegative(),
  caseType: z.string().min(1),
  date: isoDateString,
});
export const settlementUpdateSchema = settlementCreateSchema.partial();

// --- News ---
export const newsCreateSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  date: isoDateString,
  source: z.string().min(1),
  url: optionalNullableString,
  imageUrl: optionalNullableString,
});
export const newsUpdateSchema = newsCreateSchema.partial();

// --- Archive ---
export const archiveCreateSchema = z.object({
  title: z.string().min(1),
  content: optionalNullableString,
  date: isoDateString,
  category: z.string().min(1),
  imageUrl: optionalNullableString,
});
export const archiveUpdateSchema = archiveCreateSchema.partial().extend({
  // Admin edit form sends `description`, mapped to Archive.content.
  description: optionalNullableString,
});

// --- PracticeArea ---
export const practiceAreaCreateSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
  features: optionalNullableString,
  image: optionalNullableString,
  banner: optionalNullableString,
  color: optionalNullableString,
  imageUrl: optionalNullableString,
  order: z.number().int().optional(),
  active: z.boolean().optional(),
});
export const practiceAreaUpdateSchema = practiceAreaCreateSchema.partial();

// --- AboutUs (singleton PUT) ---
export const aboutUsUpdateSchema = z.object({
  heroTitle: z.string().optional(),
  heroSubtitle: z.string().optional(),
  mainTitle: z.string().optional(),
  paragraph1: z.string().optional(),
  paragraph2: z.string().optional(),
  paragraph3: z.string().optional(),
  paragraph4: z.string().optional(),
  blueHighlightTitle: z.string().optional(),
  blueHighlightContent: z.string().optional(),
  paragraph5: z.string().optional(),
  paragraph6: z.string().optional(),
  paragraph7: z.string().optional(),
  goldHighlightTitle: z.string().optional(),
  goldHighlightContent: z.string().optional(),
});

// --- Locations (singleton PUT) ---
export const locationsUpdateSchema = z
  .object({
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    mainTitle: z.string().optional(),
    paragraph1: z.string().optional(),
    paragraph2: z.string().optional(),
    areasWeServeTitle: z.string().optional(),
    paCountiesTitle: z.string().optional(),
    paCounties: z.string().optional(),
    njCountiesTitle: z.string().optional(),
    njCounties: z.string().optional(),
    paragraph3: z.string().optional(),
    mainOfficeTitle: z.string().optional(),
    officeName: z.string().optional(),
    officeAddress: z.string().optional(),
    officePhone: z.string().optional(),
    officeEmail: z.string().optional(),
    officeHours: z.string().optional(),
    directionsTitle: z.string().optional(),
    directionsFromPhilly: z.string().optional(),
    directionsFromNJ: z.string().optional(),
    parkingInfo: z.string().optional(),
    communitiesTitle: z.string().optional(),
    communitiesSubtitle: z.string().optional(),
    philadelphiaArea: z.string().optional(),
    bucksCounty: z.string().optional(),
    montgomeryCounty: z.string().optional(),
    delawareCounty: z.string().optional(),
    southernNJ: z.string().optional(),
    centralNJ: z.string().optional(),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaButtonText: z.string().optional(),
    ctaPhoneText: z.string().optional(),
  })
  .passthrough();

// --- ContactUs (singleton PUT) ---
export const contactUsUpdateSchema = z.object({
  heroTitle: z.string().optional(),
  heroSubtitle: z.string().optional(),
  mainTitle: z.string().optional(),
  paragraph1: z.string().optional(),
  paragraph2: z.string().optional(),
  whyChooseTitle: z.string().optional(),
  whyChooseList: z.string().optional(),
  officeAddress: z.string().optional(),
  officePhone: z.string().optional(),
  officeEmail: z.string().optional(),
  officeHours: z.string().optional(),
});

// --- Settings ---
export const firmNameSchema = z.object({
  firmName: z.string().min(1).max(120),
});

// --- Contact form submission ---
export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: optionalNullableString,
  address: optionalNullableString,
  dateOfIncident: z.string().nullish(),
  caseType: optionalNullableString,
  represented: optionalNullableString,
  facts: optionalNullableString,
  captchaToken: z.string().optional(),
  website: z.string().optional(), // honeypot
});
