import type { Lang } from '@/lib/i18n';

/**
 * Design reminder for this file:
 * Pro data must reinforce the separation between the public guide and the execution workspace.
 * Every field should support a decision-first, action-first experience instead of article-like repetition.
 */

/** Localizable fields for a single pro tool. Keyed by slug for lookup. */
export type ProToolL10n = {
  slug: string;
  title: string;
  summary: string;
  guideTitle: string;
  ctaLabel: string;
  bridgeTitle: string;
  bridgeDescription: string;
  highlight: string;
  executionSummary: string;
  readinessLabel: string;
  readinessDescription: string;
  notePlaceholder: string;
  nextToolTitle?: string;
  features: { title: string; description: string }[];
  steps: { title: string; body: string }[];
  tasks: {
    id: string;
    title: string;
    description: string;
    stepHint?: string;
  }[];
};

export type ProToolFeature = {
  title: string;
  description: string;
};

export type ProToolStep = {
  title: string;
  body: string;
};

export type ProToolTask = {
  id: string;
  title: string;
  description: string;
  stepHint?: string;
  optional?: boolean;
};

export type ProTool = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  guideSlug: string;
  guideTitle: string;
  guideHref: string;
  ctaLabel: string;
  bridgeTitle: string;
  bridgeDescription: string;
  highlight: string;
  executionSummary: string;
  readinessLabel: string;
  readinessDescription: string;
  notePlaceholder: string;
  nextToolSlug?: string;
  nextToolTitle?: string;
  features: ProToolFeature[];
  steps: ProToolStep[];
  tasks: ProToolTask[];
};

export const proTools: ProTool[] = [
  {
    slug: 'arrival-checklist',
    eyebrow: 'K-Survival Kit Pro',
    title: 'First Week Checklist',
    summary:
      'Turn the general getting-started guide into a step-by-step plan you can actually track during your first week in Korea.',
    guideSlug: 'getting-started',
    guideTitle: 'Getting Started',
    guideHref: '/getting-started',
    ctaLabel: 'Open Pro checklist',
    bridgeTitle: 'Ready to stop reading and start organizing your first week?',
    bridgeDescription:
      'The public guide explains the landscape. Pro switches you into a dedicated first-week workspace with persistent progress, practical tasks, and room for your own notes.',
    highlight:
      'Best for students who want a single place to manage their first 7 days in Korea.',
    executionSummary:
      'Use this workspace as your day-by-day operational board. Mark what is finished, keep a short reminder for yourself, and return later without losing your place.',
    readinessLabel: 'Arrival week planning',
    readinessDescription:
      'This workspace is strongest when you have just landed or are about to arrive and need order, not more background reading.',
    notePlaceholder:
      'Example: dorm address confirmed, airport pickup contact saved, bank visit possible after Friday, ask school office about orientation documents.',
    nextToolSlug: 'arc-prep-checklist',
    nextToolTitle: 'ARC Prep Checklist',
    features: [
      {
        title: 'Priority order',
        description:
          'See what to do first, what can wait a few days, and what will block later tasks if you ignore it.',
      },
      {
        title: 'Persistent progress',
        description:
          'Keep your check state and notes in this browser so you can continue later without rebuilding the plan.',
      },
      {
        title: 'Guide linkage',
        description:
          'Jump back to the original K-Survival Kit guide whenever you need explanation, nuance, or source context.',
      },
    ],
    steps: [
      {
        title: 'Stabilize your basics',
        body: 'Confirm housing, connectivity, and school contact points so the rest of the week becomes easier to manage.',
      },
      {
        title: 'Prepare identity and paperwork',
        body: 'Organize the documents you will repeatedly need for banking, immigration, and campus administration.',
      },
      {
        title: 'Finish daily-life setup',
        body: 'Move into the practical routines that make Korea feel usable, such as payments, delivery, and transport.',
      },
    ],
    tasks: [
      {
        id: 'arrival-home-base',
        title: 'Confirm where you will sleep tonight',
        description:
          'Make sure you have the exact address, access method, and a contact person for your first housing arrangement.',
        stepHint: 'Stabilize your basics',
      },
      {
        id: 'arrival-connectivity',
        title: 'Secure immediate mobile or internet access',
        description:
          'Choose the simplest working option for your first day so you can use maps, messages, and delivery apps right away.',
        stepHint: 'Stabilize your basics',
      },
      {
        id: 'arrival-campus-contact',
        title: 'Save your school and emergency contact points',
        description:
          'Keep your international office, buddy, dorm office, or department contact somewhere easy to find.',
        stepHint: 'Stabilize your basics',
      },
      {
        id: 'arrival-documents',
        title: 'Gather your most-used identity documents',
        description:
          'Keep your passport, admission records, address details, and student documents together for repeated use.',
        stepHint: 'Prepare identity and paperwork',
      },
      {
        id: 'arrival-banking-plan',
        title: 'Make a short plan for banking and payments',
        description:
          'Decide whether you need cash withdrawal, card access, or an early bank visit during the next few days.',
        stepHint: 'Finish daily-life setup',
      },
      {
        id: 'arrival-later-tasks',
        title: 'List the tasks that depend on your ARC or local number',
        description:
          'Separate what you can do now from what becomes easier after identity verification in Korea.',
        stepHint: 'Finish daily-life setup',
        optional: true,
      },
    ],
  },
  {
    slug: 'arc-prep-checklist',
    eyebrow: 'K-Survival Kit Pro',
    title: 'ARC Prep Checklist',
    summary:
      'A structured pre-visit checklist for preparing ARC application documents, booking plans, and follow-up tasks.',
    guideSlug: 'arc-card-korea-guide',
    guideTitle: 'ARC Card Guide',
    guideHref: '/arc-card-korea-guide',
    ctaLabel: 'Open ARC prep',
    bridgeTitle:
      'Ready to prepare your immigration visit with fewer surprises?',
    bridgeDescription:
      'The guide explains the ARC process. Pro turns it into a preparation desk where you can track document readiness, appointment planning, and the tasks that depend on ARC issuance.',
    highlight:
      'Best for students booking their first immigration visit or organizing paperwork after arrival.',
    executionSummary:
      'Use this page to reduce last-minute confusion before immigration day. The goal is not to memorize the policy but to arrive with a cleaner preparation state.',
    readinessLabel: 'Immigration preparation',
    readinessDescription:
      'This workspace fits best when you already know ARC matters, but you want a calmer way to prepare the appointment and paperwork.',
    notePlaceholder:
      'Example: appointment date pending, university certificate requested, photo booth near station, confirm branch-specific requirements before travel.',
    nextToolSlug: 'bank-setup-starter',
    nextToolTitle: 'Bank Setup Starter',
    features: [
      {
        title: 'Document readiness',
        description:
          'Review the most common items students want ready before the immigration appointment.',
      },
      {
        title: 'Timing reminders',
        description:
          'Keep the application window and dependent tasks visible in one place instead of spreading them across messages and tabs.',
      },
      {
        title: 'After-issuance flow',
        description:
          'See which everyday tasks become easier once your ARC is ready, so you can prepare the next move in advance.',
      },
    ],
    steps: [
      {
        title: 'Check your appointment plan',
        body: 'Confirm your visit timing, school guidance, and whether you need extra supporting paperwork.',
      },
      {
        title: 'Prepare every document once',
        body: 'Collect the recurring documents early so you do not scramble right before the immigration visit.',
      },
      {
        title: 'Link ARC to the next setup tasks',
        body: 'Use the ARC milestone to unlock the next steps like banking, mobile plans, and other identity checks.',
      },
    ],
    tasks: [
      {
        id: 'arc-appointment-check',
        title: 'Confirm when and where you can apply',
        description:
          'Check the timing window, office location, and whether your school has additional instructions for students.',
        stepHint: 'Check your appointment plan',
      },
      {
        id: 'arc-document-pack',
        title: 'Prepare your document pack in one folder',
        description:
          'Collect the recurring identity and school-related items you expect to show at the appointment.',
        stepHint: 'Prepare every document once',
      },
      {
        id: 'arc-photo-check',
        title: 'Handle photo and payment details early',
        description:
          'Do not leave small requirements such as photos or payment method for the final morning.',
        stepHint: 'Prepare every document once',
      },
      {
        id: 'arc-proof-address',
        title: 'Verify your address or residence proof plan',
        description:
          'Some follow-up questions become easier when you already know how you will explain or document your living arrangement.',
        stepHint: 'Prepare every document once',
      },
      {
        id: 'arc-next-unlocks',
        title: 'List the services that get easier after ARC issuance',
        description:
          'Make a short note of the bank, phone, or app tasks you want to revisit after this milestone.',
        stepHint: 'Link ARC to the next setup tasks',
      },
      {
        id: 'arc-university-support',
        title: 'Ask whether your university offers help for the process',
        description:
          'Some schools provide documents, guidance, or appointment advice that can save time.',
        stepHint: 'Check your appointment plan',
        optional: true,
      },
    ],
  },
  {
    slug: 'sim-plan-starter',
    eyebrow: 'K-Survival Kit Pro',
    title: 'SIM Plan Starter',
    summary:
      'A decision page for new arrivals who need to choose between airport SIM, eSIM, or later monthly plans.',
    guideSlug: 'how-to-get-sim-card-in-korea',
    guideTitle: 'SIM Card Guide',
    guideHref: '/how-to-get-sim-card-in-korea',
    ctaLabel: 'Compare first-week options',
    bridgeTitle:
      'Ready to make a first-day phone decision without reading every plan type?',
    bridgeDescription:
      'The public guide explains the full SIM landscape. Pro narrows that down into a simpler decision board for arrival day, short-term use, and your later upgrade path.',
    highlight:
      'Best for students who want a simple first-day mobile choice without reading every plan type.',
    executionSummary:
      'Treat this as a decision board rather than a telecom article. Its purpose is to help you pick something workable now and plan what to improve later.',
    readinessLabel: 'Connectivity setup',
    readinessDescription:
      'This workspace is most useful before landing or during the first two days, when fast connectivity matters more than perfect optimization.',
    notePlaceholder:
      'Example: need data immediately after landing, eSIM works on my phone, monthly contract can wait until ARC arrives, keep Korean number for bank verification later.',
    nextToolSlug: 'bank-setup-starter',
    nextToolTitle: 'Bank Setup Starter',
    features: [
      {
        title: 'Short-stay vs long-stay framing',
        description:
          'Separate temporary arrival options from the plans you may move to later.',
      },
      {
        title: 'Day-one decision help',
        description:
          'Reduce friction by focusing on the fastest workable option first.',
      },
      {
        title: 'Next-step links',
        description:
          'Move from the mobile decision into banking and ARC tasks that may depend on your number.',
      },
    ],
    steps: [
      {
        title: 'Decide for arrival day',
        body: 'Choose the simplest option that keeps you connected the moment you land.',
      },
      {
        title: 'Check what documents you have',
        body: 'Your phone setup can change depending on passport-only access or later ARC-based verification.',
      },
      {
        title: 'Plan the later upgrade',
        body: 'Once you are settled, compare whether it makes sense to keep prepaid service or move to a monthly plan.',
      },
    ],
    tasks: [
      {
        id: 'sim-immediate-choice',
        title: 'Choose your immediate arrival option',
        description:
          'Decide whether you need airport pickup, eSIM activation, or a simple prepaid option for the first days.',
        stepHint: 'Decide for arrival day',
      },
      {
        id: 'sim-device-check',
        title: 'Confirm that your phone can use the option you picked',
        description:
          'Check device compatibility, unlock status, and whether installation steps are realistic before travel.',
        stepHint: 'Decide for arrival day',
      },
      {
        id: 'sim-identity-limits',
        title: 'Note any identity limits you might face without ARC',
        description:
          'Some verification-heavy services may be easier after you receive additional Korean ID credentials.',
        stepHint: 'Check what documents you have',
      },
      {
        id: 'sim-later-plan',
        title: 'Write down when you want to reconsider a monthly plan',
        description:
          'A temporary arrival solution is often fine as long as you know when to revisit the decision.',
        stepHint: 'Plan the later upgrade',
      },
      {
        id: 'sim-number-dependency',
        title: 'Keep track of tasks that depend on your Korean number',
        description:
          'Think about bank apps, account verification, school messaging, and delivery platforms that may rely on a local number.',
        stepHint: 'Plan the later upgrade',
      },
      {
        id: 'sim-budget-note',
        title: 'Compare cost only after coverage and timing make sense',
        description:
          'Price matters, but the fastest working setup is usually the better first-week choice.',
        stepHint: 'Decide for arrival day',
        optional: true,
      },
    ],
  },
  {
    slug: 'bank-setup-starter',
    eyebrow: 'K-Survival Kit Pro',
    title: 'Bank Setup Starter',
    summary:
      'A branch-visit preparation page that turns the banking guide into a practical document and readiness checklist.',
    guideSlug: 'best-bank-account-for-foreigners-korea',
    guideTitle: 'Bank Account Guide',
    guideHref: '/best-bank-account-for-foreigners-korea',
    ctaLabel: 'Prepare for bank visit',
    bridgeTitle: 'Ready to make your first bank visit more predictable?',
    bridgeDescription:
      'The guide helps students understand Korean banking. Pro focuses on branch readiness so you can gather documents, choose a workable branch context, and remember what to check afterward.',
    highlight:
      'Best for students planning to visit a bank branch within the next few days.',
    executionSummary:
      'This workspace helps you avoid a vague bank visit. The goal is to arrive knowing what you can show, what might block you, and what to test before leaving the branch.',
    readinessLabel: 'Branch visit preparation',
    readinessDescription:
      'This page fits the moment when you are close to visiting a branch and want a calmer checklist than a long comparison article.',
    notePlaceholder:
      'Example: branch near campus may be more foreigner-friendly, bring passport and student papers, ask whether app registration is possible on the same day.',
    nextToolSlug: 'housing-safety-notes',
    nextToolTitle: 'Housing Safety Notes',
    features: [
      {
        title: 'Readiness summary',
        description:
          'See the common items students usually want ready before visiting a branch.',
      },
      {
        title: 'Dependency awareness',
        description:
          'Keep ARC, phone number, and address-related dependencies visible instead of discovering them at the counter.',
      },
      {
        title: 'Decision support',
        description:
          'Focus on practical branch fit instead of abstract bank reputation.',
      },
    ],
    steps: [
      {
        title: 'Gather the probable documents',
        body: 'Prepare the common identity, student, and contact details that branches often ask about.',
      },
      {
        title: 'Choose the right branch context',
        body: 'Start with branches near campus or in areas that more often handle international students.',
      },
      {
        title: 'Confirm your next app-based tasks',
        body: 'Think about transfers, phone verification, and daily banking immediately after account opening.',
      },
    ],
    tasks: [
      {
        id: 'bank-document-pack',
        title: 'Assemble your likely bank visit documents',
        description:
          'Keep your identity, school, contact, and address details together before you leave.',
        stepHint: 'Gather the probable documents',
      },
      {
        id: 'bank-branch-choice',
        title: 'Choose a realistic first branch to try',
        description:
          'Prefer a branch near campus or an area where staff may be more familiar with student cases.',
        stepHint: 'Choose the right branch context',
      },
      {
        id: 'bank-identity-dependencies',
        title: 'Check what depends on ARC or phone verification',
        description:
          'Understand which account or app features may be easier once your Korean identity setup is stronger.',
        stepHint: 'Gather the probable documents',
      },
      {
        id: 'bank-post-visit',
        title: 'Plan what to test before leaving the branch',
        description:
          'Think about card activation, app login, transfer setup, and anything you do not want to discover later.',
        stepHint: 'Confirm your next app-based tasks',
      },
      {
        id: 'bank-transfer-needs',
        title: 'Write down your immediate money movement needs',
        description:
          'Knowing whether you need tuition payment, rent transfer, or daily spending access helps you ask better questions.',
        stepHint: 'Confirm your next app-based tasks',
      },
      {
        id: 'bank-backup-plan',
        title: 'Prepare a backup plan if the first branch says no',
        description:
          'A second branch, later timing, or extra paperwork may solve the problem faster than arguing on the spot.',
        stepHint: 'Choose the right branch context',
        optional: true,
      },
    ],
  },
  {
    slug: 'housing-safety-notes',
    eyebrow: 'K-Survival Kit Pro',
    title: 'Housing Safety Notes',
    summary:
      'A pre-contract review page that turns the housing deposit guide into concrete questions and contract check points.',
    guideSlug: 'korea-rent-deposit-system',
    guideTitle: 'Rent Deposit Guide',
    guideHref: '/korea-rent-deposit-system',
    ctaLabel: 'Review housing safety points',
    bridgeTitle: 'Ready to review a room with clearer safety checkpoints?',
    bridgeDescription:
      'The public guide explains deposits and rental structures. Pro turns that information into a practical review workspace for questions, red flags, and evidence you should keep before paying.',
    highlight:
      'Best for students comparing rooms, contracts, and deposit conditions before they commit.',
    executionSummary:
      'Use this page before money changes hands. The goal is to slow the decision down just enough to protect yourself while keeping all key questions in one place.',
    readinessLabel: 'Pre-contract review',
    readinessDescription:
      'This workspace matters most when you are speaking with an agent or landlord and need a safer structure for what to confirm before paying.',
    notePlaceholder:
      'Example: ask who receives deposit, confirm exact move-in date, photograph room condition, save listing screenshots and contract drafts before transfer.',
    nextToolSlug: 'arrival-checklist',
    nextToolTitle: 'First Week Checklist',
    features: [
      {
        title: 'Question prompts',
        description:
          'Keep the important contract and refund questions in one place while you compare options.',
      },
      {
        title: 'Risk reminders',
        description:
          'Surface the details students often forget when stressed by housing deadlines.',
      },
      {
        title: 'Evidence mindset',
        description:
          'Stay aware that photos, receipts, and written records matter as much as verbal assurances.',
      },
    ],
    steps: [
      {
        title: 'Check who is receiving the money',
        body: 'Confirm the landlord or agency details and how the deposit is documented before sending anything.',
      },
      {
        title: 'Review the refund logic',
        body: 'Make sure the contract clearly states deposit conditions, move-out timing, and deductions.',
      },
      {
        title: 'Keep evidence from day one',
        body: 'Save receipts, take photos, and keep a written trail for the property and your agreement.',
      },
    ],
    tasks: [
      {
        id: 'housing-recipient-check',
        title: 'Confirm exactly who should receive the money',
        description:
          'Make sure the payee identity and the room relationship are clear before sending a deposit or fee.',
        stepHint: 'Check who is receiving the money',
      },
      {
        id: 'housing-contract-logic',
        title: 'Read the deposit and refund logic slowly',
        description:
          'Look for move-in timing, refund conditions, possible deductions, and any unclear penalty language.',
        stepHint: 'Review the refund logic',
      },
      {
        id: 'housing-room-condition',
        title: 'Record the room condition before move-in',
        description:
          'Take photos and keep written notes so you are not relying on memory later.',
        stepHint: 'Keep evidence from day one',
      },
      {
        id: 'housing-paper-trail',
        title: 'Keep the paper trail for every payment and promise',
        description:
          'Save screenshots, receipts, contracts, and listing details in one place.',
        stepHint: 'Keep evidence from day one',
      },
      {
        id: 'housing-question-list',
        title: 'Prepare the questions you still need answered',
        description:
          'Write them before the call or visit so you do not forget under pressure.',
        stepHint: 'Review the refund logic',
      },
      {
        id: 'housing-second-opinion',
        title: 'Ask for a second opinion if the deal feels rushed',
        description:
          'A short pause or another review is often safer than paying quickly because of urgency.',
        stepHint: 'Check who is receiving the money',
        optional: true,
      },
    ],
  },
];

export const proToolMap = Object.fromEntries(
  proTools.map((tool) => [tool.slug, tool]),
) as Record<string, ProTool>;

export function getProTool(slug: string) {
  return proToolMap[slug];
}

/** Merges structural base data with a localized content record. */
function applyL10n(base: ProTool, l10n: ProToolL10n): ProTool {
  return {
    ...base,
    title: l10n.title,
    summary: l10n.summary,
    guideTitle: l10n.guideTitle,
    ctaLabel: l10n.ctaLabel,
    bridgeTitle: l10n.bridgeTitle,
    bridgeDescription: l10n.bridgeDescription,
    highlight: l10n.highlight,
    executionSummary: l10n.executionSummary,
    readinessLabel: l10n.readinessLabel,
    readinessDescription: l10n.readinessDescription,
    notePlaceholder: l10n.notePlaceholder,
    nextToolTitle: l10n.nextToolTitle ?? base.nextToolTitle,
    features: l10n.features,
    steps: l10n.steps,
    tasks: base.tasks.map((task, i) => ({
      ...task,
      title: l10n.tasks[i]?.title ?? task.title,
      description: l10n.tasks[i]?.description ?? task.description,
      stepHint: l10n.tasks[i]?.stepHint ?? task.stepHint,
    })),
  };
}

/** Returns the pro tool for a given slug, localized to the requested language. */
export function getLocalizedProTool(
  slug: string,
  lang: Lang,
): ProTool | undefined {
  const base = proToolMap[slug];
  if (!base) return undefined;
  if (lang === 'en') return base;

  // Lazy-load per-language content to avoid top-level circular imports.
  let l10nList: ProToolL10n[];
  if (lang === 'zh') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    l10nList = require('./zh/pro-tools').proToolsL10n as ProToolL10n[];
  } else if (lang === 'ja') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    l10nList = require('./ja/pro-tools').proToolsL10n as ProToolL10n[];
  } else if (lang === 'ru') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    l10nList = require('./ru/pro-tools').proToolsL10n as ProToolL10n[];
  } else {
    return base;
  }

  const l10n = l10nList.find((entry) => entry.slug === slug);
  return l10n ? applyL10n(base, l10n) : base;
}

export function getGuideToProMap(lang: Lang) {
  return {
    'getting-started': {
      ...proToolMap['arrival-checklist'],
      href: `/${lang}/pro/arrival-checklist`,
    },
    'arc-card-korea-guide': {
      ...proToolMap['arc-prep-checklist'],
      href: `/${lang}/pro/arc-prep-checklist`,
    },
    'how-to-get-sim-card-in-korea': {
      ...proToolMap['sim-plan-starter'],
      href: `/${lang}/pro/sim-plan-starter`,
    },
    'best-bank-account-for-foreigners-korea': {
      ...proToolMap['bank-setup-starter'],
      href: `/${lang}/pro/bank-setup-starter`,
    },
    'korea-rent-deposit-system': {
      ...proToolMap['housing-safety-notes'],
      href: `/${lang}/pro/housing-safety-notes`,
    },
  };
}
