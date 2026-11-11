import type { FaqEntry } from './schema-org';

/**
 * FAQ content for practice areas rendered by the database-only catch-all
 * (src/app/practice/[slug]/page.tsx). Keyed by slug rather than stored in the
 * PracticeArea table: only three rows need this today, the format (question +
 * multi-sentence answer) doesn't fit the table's existing description/
 * content/features columns without a schema change, and hardcoding here keeps
 * the FAQPage JSON-LD trivially in sync with the visible text — the page
 * renders exactly these entries and nothing else, which is what Google's
 * structured-data guidelines require.
 *
 * General information, not legal advice — matches the disclaimer already
 * printed on every practice page. Keep answers hedged and jurisdiction-aware
 * (PA and NJ rules differ) rather than stating outcomes as guaranteed.
 */
export const PRACTICE_AREA_FAQS: Record<string, FaqEntry[]> = {
  'limited-tort-lawyer': [
    {
      question: 'What does "limited tort" mean on my Pennsylvania auto insurance?',
      answer:
        'Pennsylvania requires every auto policy to elect either "full tort" or "limited tort." Limited tort costs less but restricts your right to sue for pain and suffering and other non-economic damages after a crash unless your injury meets a legal exception. It does not limit your claim for medical bills or lost wages — those remain fully recoverable either way.',
    },
    {
      question: 'Can I still recover pain and suffering if I only have limited tort coverage?',
      answer:
        'Often, yes. Pennsylvania law carves out exceptions — for example, a "serious injury" (a serious impairment of a body function, or permanent disfigurement), a crash caused by a drunk driver, an at-fault driver from out of state, or an intentional act. Insurers routinely dispute whether an injury qualifies as "serious," which is where documentation and legal representation make the difference.',
    },
    {
      question: 'Does my limited tort election still apply if I was a pedestrian or bicyclist?',
      answer:
        "It depends on the facts of the crash and your own policy, and this is one of the areas insurers most often get wrong or dispute. Bring your policy declarations page and the police report to a free consultation and we'll tell you where you stand.",
    },
    {
      question: 'How do I find out whether my policy is full tort or limited tort?',
      answer:
        'Check the declarations page of your auto policy, or call your agent or insurer and ask directly. If you are not sure, bring the policy — or just your insurer\'s name and policy number — to a free consultation and we will review it for you.',
    },
  ],
  'social-security-disability': [
    {
      question: "What's the difference between SSDI and SSI?",
      answer:
        "Social Security Disability Insurance (SSDI) is based on your work history and the Social Security taxes you've paid; Supplemental Security Income (SSI) is a needs-based program available to people with limited income and resources regardless of work history. Some applicants qualify for both, and the medical disability standard is the same for each.",
    },
    {
      question: 'How long does a Social Security disability claim take?',
      answer:
        'Initial applications commonly take several months to decide, and most are denied on the first try. If yours is denied, the next steps are reconsideration and then a hearing before an Administrative Law Judge — the hearing stage alone can take a year or more depending on the local office\'s backlog. Getting the medical evidence right from the start is the biggest lever you have over the timeline.',
    },
    {
      question: 'What happens if my disability claim is denied?',
      answer:
        'You generally have 60 days to request reconsideration, and if that is also denied, another 60 days to request a hearing before an Administrative Law Judge. Missing either deadline can mean starting the whole process over, so act promptly on any denial notice.',
    },
    {
      question: 'How much does a Social Security disability lawyer cost?',
      answer:
        "Attorney's fees in Social Security disability cases are regulated and capped by federal law. In the typical arrangement, the fee comes only out of past-due benefits if you win — not future benefits — and there is no upfront cost to hire us.",
    },
    {
      question: 'Should I get a lawyer before I even apply, or only after a denial?',
      answer:
        "Either point is a reasonable time to talk to us, but earlier is better. Most denials trace back to gaps in the medical record or a claim that wasn't framed around the specific SSA disability criteria — problems that are far easier to prevent at the application stage than to fix on appeal.",
    },
  ],
  'general-legal-matters': [
    {
      question: 'What kinds of "general legal matters" does the firm handle?',
      answer:
        'Beyond personal injury and criminal defense, we assist with real estate transactions and disputes, landlord-tenant matters — including lease disputes and evictions — and wills, estates and probate administration in Pennsylvania and New Jersey.',
    },
    {
      question: 'Do I need a will even if my estate is small?',
      answer:
        "Yes. Without a valid will, Pennsylvania or New Jersey intestacy law decides who inherits your property, and that default distribution may not match your wishes. An estate without a will can also take longer to settle and is more prone to disputes among heirs.",
    },
    {
      question: 'What does probating an estate involve?',
      answer:
        "In general: opening the estate with the Register of Wills (Pennsylvania) or Surrogate's Court (New Jersey), inventorying the assets, paying valid debts and taxes, and distributing what remains to the heirs or beneficiaries. Timelines vary widely depending on the estate's size, whether there is a will, and whether any creditor or family disputes arise.",
    },
    {
      question: "What if I'm in a dispute with my landlord or tenant?",
      answer:
        'We represent both landlords and tenants in lease disputes, evictions, and related matters, mindful of the specific procedural rules and deadlines of the county or municipal court where the property sits.',
    },
  ],
  'auto-accidents': [
    {
      question: 'Where do you handle car accident cases?',
      answer:
        'From the office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, in Bucks County. Clients come from Philadelphia, Bucks, Montgomery, Delaware and Chester counties, and from Camden, Burlington, Mercer, Atlantic and Gloucester counties in New Jersey. There is no separate Philadelphia or New Jersey office.',
    },
    {
      question: 'What does a car accident lawyer cost?',
      answer:
        'The first meeting is free. Car accident cases are handled with no fee unless the firm recovers.',
    },
    {
      question: 'What kinds of crashes do you take?',
      answer:
        'Car crashes, tractor-trailer and work-vehicle accidents, motorcycle, bicycle and pedestrian accidents, SEPTA and other transit accidents, drunk-driving injuries, insurance disputes and roadway design claims.',
    },
  ],
  'truck-accidents': [
    {
      question: 'Do you handle tractor-trailer accidents in Bucks County and Philadelphia?',
      answer:
        'Yes. Truck and tractor-trailer cases for clients in Philadelphia, Bucks County, Montgomery County and the New Jersey counties listed on the locations page are handled from the Feasterville-Trevose office.',
    },
    {
      question: 'What does it cost to have a truck accident reviewed?',
      answer: 'The consultation is free. There is no fee unless the firm recovers.',
    },
  ],
  'motorcycle-accidents': [
    {
      question: 'Where is the motorcycle accident practice based?',
      answer:
        'At 175 Bustleton Pike, Feasterville-Trevose, PA 19053. Riders from Philadelphia, Bucks County, Montgomery County and South Jersey are represented from that office.',
    },
    {
      question: 'Is the consultation free?',
      answer: 'Yes. And there is no fee unless the firm recovers.',
    },
  ],
  'premises-liability': [
    {
      question: 'What is a premises liability case?',
      answer:
        'A claim against a property owner or occupier after someone is hurt by an unsafe condition, such as a fall in a store, on a walkway, or at work. The firm handles these cases for clients in Pennsylvania and New Jersey from its Bucks County office.',
    },
    {
      question: 'How much does a slip-and-fall consultation cost?',
      answer: 'Nothing. The consultation is free, and there is no fee unless the firm recovers.',
    },
  ],
  'workers-compensation': [
    {
      question: 'Who do you represent in workers’ compensation cases?',
      answer:
        'People hurt at work in Pennsylvania and New Jersey. The office is at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, and the consultation is free.',
    },
    {
      question: 'Do I pay a fee if the claim does not succeed?',
      answer: 'No. Workers’ compensation matters are handled with no fee unless the firm recovers.',
    },
  ],
  'personal-injury': [
    {
      question: 'Where do your personal injury clients come from?',
      answer:
        'Philadelphia, Bucks County, Montgomery County, South Jersey, and elsewhere in Pennsylvania and New Jersey. The office is in Feasterville-Trevose, Bucks County. The firm has represented injured people since 1980.',
    },
    {
      question: 'Is the first meeting free?',
      answer:
        'Yes. Injury cases are handled with no fee unless the firm recovers. A consultation does not by itself create an attorney-client relationship.',
    },
  ],
  'medical-malpractice': [
    {
      question: 'Where do you handle medical malpractice cases?',
      answer:
        'For clients in Philadelphia, Bucks County, Montgomery County and South Jersey, from the office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053. Records are reviewed with an independent medical expert before a claim is pursued.',
    },
    {
      question: 'What kinds of medical mistakes do you look at?',
      answer:
        'The page covers malpractice and wrongful death from medical mistakes, including cases in which a physician or hospital is alleged to have missed the standard of care. The consultation is free.',
    },
  ],
  'defective-products': [
    {
      question: 'What is a product liability claim?',
      answer:
        'A claim that a product was designed, made or sold in a way that hurt someone. The firm handles these cases for clients in Pennsylvania and New Jersey from its Feasterville-Trevose office.',
    },
    {
      question: 'Do I pay upfront?',
      answer: 'No. The consultation is free, and there is no fee unless the firm recovers.',
    },
  ],
  'family-law': [
    {
      question: 'Where do you handle family law matters?',
      answer:
        'From the office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, for clients in the Pennsylvania and New Jersey counties listed on the locations page.',
    },
    {
      question: 'Is a family law consultation free?',
      answer:
        'The first meeting is free. Family law is not the firm’s “no fee unless we recover” injury work, so fees are discussed at that meeting.',
    },
  ],
  'criminal-defense': [
    {
      question: 'Where do you handle criminal cases?',
      answer:
        'From the office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, for clients in the Pennsylvania and New Jersey counties the firm already serves.',
    },
    {
      question: 'Is a criminal consultation free?',
      answer:
        'The first meeting is free. Criminal defense is not a contingency practice, so any fee is explained at the consultation rather than taken as a share of a recovery.',
    },
  ],
};
