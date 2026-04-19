type PageDisclaimerProps = {
  type: 'visa' | 'health' | 'housing' | 'general';
};

const messages: Record<PageDisclaimerProps['type'], { icon: string; text: string }> = {
  visa: {
    icon: '⚖️',
    text: 'Immigration rules change frequently. This page provides general information only — not legal advice. Always verify current requirements directly with the Korean Immigration Service (immigration.go.kr) or your university\'s international office before taking action.',
  },
  health: {
    icon: '🩺',
    text: 'This page provides general health information only — not medical advice. Insurance policies, coverage, and costs vary. Consult a qualified healthcare provider and verify insurance details with your provider directly.',
  },
  housing: {
    icon: '📋',
    text: 'Rental laws, deposit amounts, and contract terms in Korea vary and can change. This page is for general reference only — not legal advice. Review all contracts carefully and consider consulting a licensed real estate agent (공인중개사) before signing.',
  },
  general: {
    icon: '📌',
    text: 'Information on this site is for general reference only. Prices, policies, and procedures may change. Always verify important details with official sources before acting.',
  },
};

export default function PageDisclaimer({ type }: PageDisclaimerProps) {
  const { icon, text } = messages[type];

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-6 py-3">
      <div className="mx-auto flex max-w-6xl items-start gap-3">
        <span className="mt-0.5 shrink-0 text-lg">{icon}</span>
        <p className="text-sm leading-6 text-amber-800">
          <strong>Note: </strong>{text}
        </p>
      </div>
    </div>
  );
}
