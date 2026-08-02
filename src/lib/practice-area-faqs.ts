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
};
