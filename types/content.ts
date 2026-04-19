export type InfoCardItem = {
  emoji: string;
  title: string;
  description: string;
  bullets: string[];
  tip: string;
};

export type PageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;

  steps?: StepSection[];

  stepsHeading?: {
    eyebrow: string;
    title: string;
  };

  cards: InfoCardItem[];
};

export type ProDict = {
  // Hero Pro banner
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroCta: string;
  tryPro: string;
  // LatestGuides section
  practicalGuides: string;
  latestGuides: string;
  latestGuidesSubtitle: string;
  openProDirectly: string;
  openProDesc: string;
  startWithPro: string;
  // GuideToProBridge
  endOfGuide: string;
  endOfGuideTitle: string;
  endOfGuideDesc: string;
  separateWorkspace: string;
  stayInGuide: string;
  whatChanges: string;
  changeCard1Title: string;
  changeCard1Desc: string;
  changeCard2Title: string;
  changeCard2Desc: string;
  changeCard3Title: string;
  changeCard3Desc: string;
  whyExists: string;
  recommendedSwitch: string;
  recommendedSwitchDesc: string;
  // ProExecutionWorkspace
  workspaceBadge: string;
  savingLoading: string;
  savingProfile: string;
  savingGuest: string;
  workspaceMainTitle: string;
  workspaceMainDesc: string;
  essentialProgress: string;
  activeMode: string;
  lastSaved: string;
  notSavedYet: string;
  checklistBadge: string;
  checklistTitle: string;
  checklistDesc: string;
  resetWorkspace: string;
  optionalTag: string;
  coreTaskTag: string;
  supportsStep: string;
  notesBadge: string;
  notesTitle: string;
  notesDesc: string;
  localProfileBadge: string;
  guestLabel: string;
  guestModeTitle: string;
  guestModeDesc: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  createProfile: string;
  profileTitle: string;
  profileBrowserNote: string;
  toolsStarted: string;
  tasksCompleted: string;
  switchToGuest: string;
  executionSequence: string;
  completionSnapshot: string;
  completedCount: string;
  whyPublicMatters: string;
  whyPublicMattersDesc: string;
  returnToGuide: string;
  relatedProPages: string;
  // Pro page (page.tsx)
  proPageBadge: string;
  proPageTitle: string;
  proPageDesc: string;
  returnToGuideBtn: string;
  exploreOthers: string;
  whatProChangesLabel: string;
  whatProChangesTitle: string;
  whatProChangesDesc: string;
  bestFit: string;
  continuePath: string;
  continuePathNextLabel: string;
  continuePathDesc: string;
  stayInWorkspace: string;
};

export type CommonContent = {
  nav: {
    home: string;
    gettingStarted: string;
    dailyLife: string;
    health: string;
    housing: string;
    culture: string;
    visa: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  category: {
    title: string;
    subtitle: string;
  };
  footer: {
    title: string;
    description: string;
    disclaimer: string;
  };
  pro: ProDict;
};

export type CategoryLinkItem = {
  href: string;
  title: string;
  description: string;
};

export type HomeContent = {
  introTitle: string;
  introDesc: string;
  categories: CategoryLinkItem[];
};

export type StepItem = {
  title: string;
  bullets: string[];
};

export type StepSection = {
  emoji: string;
  label: string;
  title: string;
  items: StepItem[];
};
