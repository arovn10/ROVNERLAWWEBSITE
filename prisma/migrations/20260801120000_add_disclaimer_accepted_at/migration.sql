-- Records that a contact-form submitter ticked the "no attorney-client
-- relationship" disclaimer, and when. The checkbox already gated submission but
-- carried no name attribute, so the acknowledgement was never transmitted or
-- stored — the firm was requiring consent it kept no record of.
--
-- Additive and nullable: existing rows predate the field and are left NULL,
-- which correctly represents "not recorded" rather than "did not consent".
ALTER TABLE "ContactSubmission" ADD COLUMN "disclaimerAcceptedAt" TIMESTAMP(3);
