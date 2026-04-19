import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import ArticleHero from '@/components/ArticleHero';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Use | K-Survival Kit',
    description:
      'Read the Terms of Use for K-Survival Kit. This site provides general information only and is not a substitute for professional legal, medical, or financial advice.',
    robots: { index: false },
  };
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const lastUpdated = '13 April 2026';

  return (
    <>
      <ArticleHero
        eyebrow="Legal"
        title="Terms of Use"
        lead="Please read these terms carefully before using K-Survival Kit. By accessing this site, you agree to the conditions described below."
      />

      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-3xl space-y-10 text-slate-700">
          <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>

          {/* 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. General Information Only
            </h2>
            <p className="leading-7">
              K-Survival Kit (&ldquo;this site&rdquo;) provides general guidance
              for international students and foreigners living in Korea. All
              content — including articles, checklists, and category pages — is
              intended for informational purposes only.
            </p>
            <p className="leading-7">
              Nothing on this site constitutes legal advice, immigration advice,
              medical advice, financial advice, or any other form of
              professional advice. You should not rely solely on information
              from this site when making decisions about your visa status,
              health, finances, or housing. Always verify information with the
              relevant official authority or a qualified professional.
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Accuracy and Currency of Information
            </h2>
            <p className="leading-7">
              We make reasonable efforts to keep content accurate and up to
              date, but we cannot guarantee that all information is current,
              complete, or free from error. Laws, regulations, fees, and
              procedures in Korea — including immigration rules, healthcare
              policies, and housing law — change frequently and without notice.
            </p>
            <p className="leading-7">
              You are responsible for verifying any information before acting on
              it. Official sources include, but are not limited to:
            </p>
            <ul className="space-y-1 pl-4 text-sm leading-7">
              <li>
                <strong>Immigration:</strong>{' '}
                <a
                  href="https://www.immigration.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 underline underline-offset-2"
                >
                  immigration.go.kr
                </a>{' '}
                /{' '}
                <a
                  href="https://www.hikorea.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 underline underline-offset-2"
                >
                  hikorea.go.kr
                </a>
              </li>
              <li>
                <strong>Health Insurance:</strong>{' '}
                <a
                  href="https://www.nhis.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 underline underline-offset-2"
                >
                  nhis.or.kr
                </a>
              </li>
              <li>
                <strong>Financial Services:</strong> Official websites of
                individual banks and the Financial Supervisory Service
                (fss.or.kr)
              </li>
              <li>
                <strong>Housing / Real Estate:</strong> Your local district
                office (구청) or a licensed real estate agent (공인중개사)
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. No Warranties
            </h2>
            <p className="leading-7">
              This site is provided &ldquo;as is&rdquo; without any warranties,
              express or implied. We do not warrant that the site will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. We expressly disclaim all warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          {/* 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Limitation of Liability
            </h2>
            <p className="leading-7">
              To the fullest extent permitted by applicable law, K-Survival Kit
              and its operators shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use of, or inability to use, this site or its content — including
              but not limited to losses arising from reliance on information
              that is inaccurate, outdated, or incomplete.
            </p>
            <p className="leading-7">
              Your use of this site and reliance on any information it contains
              is entirely at your own risk.
            </p>
          </section>

          {/* 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. External Links
            </h2>
            <p className="leading-7">
              This site may contain links to third-party websites including
              government portals, bank websites, and app stores. These links are
              provided for convenience only. We do not endorse, control, or take
              responsibility for the content, accuracy, or availability of any
              external sites. Accessing external links is at your own risk.
            </p>
          </section>

          {/* 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Intellectual Property
            </h2>
            <p className="leading-7">
              All original content on this site — including text, structure, and
              design — is the property of K-Survival Kit. You may share or
              reference content for personal, non-commercial purposes with
              appropriate attribution. Reproducing or republishing content in
              full without permission is not permitted.
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Changes to These Terms
            </h2>
            <p className="leading-7">
              We may update these Terms of Use at any time. Changes will be
              reflected by updating the &ldquo;Last updated&rdquo; date at the
              top of this page. Continued use of this site after any changes
              constitutes your acceptance of the revised terms.
            </p>
          </section>

          {/* 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              8. Governing Language
            </h2>
            <p className="leading-7">
              These Terms of Use are written in English. In the event of any
              inconsistency between the English version and any translated
              version, the English version shall prevail.
            </p>
          </section>

          {/* 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              9. Affiliate Disclosure
            </h2>
            <p className="leading-7">
              Some links on this site are affiliate links. This means that if
              you click on a link and make a purchase or sign up for a service,
              K-Survival Kit may earn a commission at no additional cost to you.
            </p>
            <p className="leading-7">
              We only recommend products and services we believe are genuinely
              useful to international students and foreigners living in Korea.
              Affiliate relationships do not influence editorial decisions — our
              goal is always to provide accurate, helpful, and unbiased
              information.
            </p>
            <p className="leading-7">
              Affiliate partnerships currently include, but may not be limited
              to, eSIM providers, financial services, and travel-related
              products. Where affiliate links are present, we aim to make this
              clear in context.
            </p>
            <p className="leading-7">
              This disclosure is made in accordance with the U.S. Federal Trade
              Commission (FTC) guidelines on endorsements and testimonials, and
              equivalent regulations in other jurisdictions.
            </p>
          </section>

          {/* 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              10. Privacy & Data Collection
            </h2>
            <p className="leading-7">
              K-Survival Kit uses Google Analytics 4 (GA4) to collect anonymised
              data about how visitors use this site. This includes information
              such as pages visited, time spent on site, general geographic
              region, device type, and referral source. This data is used solely
              to understand how the site is used and to improve its content.
            </p>
            <p className="leading-7">
              Google Analytics may set cookies on your device to enable this
              tracking. No personally identifiable information (PII) — such as
              your name, email address, or IP address — is collected or stored
              by K-Survival Kit directly. For details on how Google handles
              data, refer to Google&rsquo;s Privacy Policy at{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
            <p className="leading-7">
              We do not sell, rent, or share any visitor data with third parties
              for marketing purposes. We do not collect email addresses or any
              personal information from visitors unless voluntarily submitted
              through a contact form (if applicable).
            </p>
            <p className="leading-7">
              If you wish to opt out of Google Analytics tracking, you may use
              the Google Analytics Opt-out Browser Add-on available at{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 underline underline-offset-2"
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-slate-200 pt-6">
            <p className="text-sm leading-7 text-slate-500">
              If you have questions about these terms, you can reach us at the
              contact information provided on this site. This document does not
              create a lawyer-client relationship.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
