-- Replaces the auto-generated placeholder copy on the three PracticeArea rows
-- that have no hand-written page directory (limited-tort-lawyer,
-- social-security-disability, general-legal-matters) and are rendered by the
-- database-only catch-all at src/app/practice/[slug]/page.tsx. Every row had
-- identical templated text ("Our attorneys have handled X matters since
-- 1980." / the same four generic features) that carried no real information
-- and did nothing to distinguish these pages from one another for search
-- engines. `product-liability` had the same placeholder but is excluded here:
-- SLUG_ALIASES redirects it to /practice/defective-products before this row
-- is ever read, so real visitors and crawlers never see it.
--
-- A data UPDATE rather than a schema change, but shipped as a migration (the
-- mechanism this repo already uses to reach the production database, per
-- CLAUDE.md landmine 6) because there is no other path from a checked-out
-- branch to the live Postgres instance. Written with UPDATE ... WHERE slug,
-- so re-running it is a no-op rather than a duplicate-row risk.

UPDATE "PracticeArea" SET
  description = $desc$Pennsylvania's limited tort election limits pain-and-suffering claims after a car accident unless your injury meets a legal exception. We prove those exceptions and fight for full compensation.$desc$,
  content = $content$Pennsylvania is a "choice no-fault" state: when you buy or renew a car insurance policy, you must elect either full tort or limited tort coverage. Limited tort costs less, but it comes with a real tradeoff — after a crash, you generally cannot sue for pain and suffering or other non-economic damages unless your injury meets one of the law's exceptions. Insurance companies know this, and they use a limited tort election to deny or lowball claims that would otherwise be worth far more.
The exceptions matter more than most drivers realize. Pennsylvania law allows a limited tort claimant to still recover full damages if the injury is "serious" — meaning a serious impairment of a body function, permanent disfigurement, or death — or if certain facts apply to the other driver, such as driving under the influence, being uninsured, or driving a vehicle registered out of state. Passengers, pedestrians and bicyclists are sometimes treated differently than the insured driver, and the analysis is fact-specific to your policy and your crash.
We have spent decades building the medical and factual record needed to prove a "serious injury" exception holds up against an insurance company that has every incentive to argue otherwise. If you were told you "can't sue" because you have limited tort, that is often an insurer's opening position, not the final word — bring us your policy and your medical records and let us tell you where you actually stand.$content$,
  features = $features$Free review of your policy's tort election
Proving the "serious injury" exception
Identifying statutory exceptions that restore full tort rights
Handling the insurance company directly so you don't have to
No fee unless we recover compensation for you$features$
WHERE slug = 'limited-tort-lawyer';

UPDATE "PracticeArea" SET
  description = $desc$Most Social Security disability applications are denied the first time. We build the medical record and handle the appeals process — from application through an ALJ hearing — on contingency.$desc$,
  content = $content$Social Security disability claims are decided on a strict, technical standard: not just that you cannot do your old job, but that your medical condition prevents you from doing any substantial gainful work, and is expected to last at least a year or result in death. Most initial applications are denied, often because the medical record on file doesn't clearly address that standard rather than because the underlying disability isn't real.
A denial is not the end of the process. You can request reconsideration, and if that is also denied, a hearing before an Administrative Law Judge, where you and your medical evidence are actually heard rather than reviewed on paper alone. Each stage has a strict filing deadline, and missing one can mean starting over from scratch months or years later.
We handle Social Security disability claims from the initial application through the hearing stage: gathering the medical records and physician statements that speak directly to the SSA's disability criteria, preparing you for what to expect at a hearing, and handling communication with the SSA so you can focus on your health. Fees in these cases are set and capped by federal law and come only from past-due benefits if you win — there is no upfront cost to have us review your claim.$content$,
  features = $features$Initial applications
Reconsideration appeals
Administrative Law Judge hearings
Medical evidence and physician statement gathering
No fee unless your claim is approved$features$
WHERE slug = 'social-security-disability';

UPDATE "PracticeArea" SET
  description = $desc$Real estate, landlord-tenant disputes, wills, and estate and probate administration across Pennsylvania and New Jersey — the legal matters that come up outside a courtroom.$desc$,
  content = $content$Not every legal problem is a lawsuit. We regularly help clients with real estate purchases, sales and disputes; landlord-tenant matters on both sides of the relationship, including lease disputes and evictions; and the paperwork that protects a family later — wills, and the administration of an estate through probate.
A will is the simplest way to make sure your property goes where you intend rather than where Pennsylvania or New Jersey's default intestacy rules send it, and having one in place tends to make an estate faster and less contentious to settle. When a loved one passes without one, or even with one, we can guide the executor or administrator through opening the estate, inventorying assets, paying valid debts, and distributing what remains.
Landlord-tenant disputes move on strict, court-specific deadlines, whether you're a landlord pursuing an eviction or a tenant contesting one. We represent both sides and can tell you early on where a dispute is likely headed and what it will take to resolve it.$content$,
  features = $features$Real estate transactions and disputes
Landlord-tenant matters and evictions
Wills
Estate and probate administration$features$
WHERE slug = 'general-legal-matters';
