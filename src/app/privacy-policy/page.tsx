import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AndrezDevInc",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
        <p className="text-text-muted dark:text-text-dark/50 text-sm mb-10">
          Effective Date: January 1, 2024 &nbsp;·&nbsp; Applies to California residents and all visitors.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            AndrezDevInc ("we," "us," or "our"), located in California, operates the website
            andrezdevinc.com. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or contact us through our
            contact form. It complies with the California Online Privacy Protection Act (CalOPPA)
            and the California Consumer Privacy Act (CCPA/CPRA).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mb-3">
            We collect information you voluntarily provide when you submit our contact form:
          </p>
          <ul className="list-disc list-inside text-sm text-text-muted dark:text-text-dark/70 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mt-3">
            We do not collect sensitive personal information as defined by CPRA, nor do we collect
            information from minors under 16.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-sm text-text-muted dark:text-text-dark/70 space-y-1">
            <li>To respond to your inquiries and project requests</li>
            <li>To communicate about services we offer</li>
            <li>To improve our website and user experience</li>
          </ul>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mt-3">
            We do not sell, trade, or rent your personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Third-Party Services</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            We use EmailJS to process contact form submissions. EmailJS may store message data
            on its servers in accordance with its own privacy policy. We use Google Fonts for
            typography, which may log your IP address per Google's privacy policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. California Privacy Rights (CCPA/CPRA)</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mb-3">
            California residents have the right to:
          </p>
          <ul className="list-disc list-inside text-sm text-text-muted dark:text-text-dark/70 space-y-1">
            <li>Know what personal information we collect and why</li>
            <li>Request deletion of their personal information</li>
            <li>Opt out of the sale of personal information (we do not sell data)</li>
            <li>Non-discrimination for exercising privacy rights</li>
          </ul>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mt-3">
            To exercise these rights, contact us at{" "}
            <a href="mailto:adominguezl800@gmail.com" className="text-primary hover:underline">
              adominguezl800@gmail.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Cookies & Tracking</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Our website uses localStorage solely to remember your dark/light mode preference.
            We do not use advertising or tracking cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">7. Data Retention</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Contact form submissions are retained only as long as necessary to respond to your
            inquiry, after which they are deleted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">8. Changes to This Policy</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            We may update this Privacy Policy periodically. The effective date at the top of
            this page reflects the most recent revision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">9. Contact Us</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            AndrezDevInc — California, USA
            <br />
            Email:{" "}
            <a href="mailto:adominguezl800@gmail.com" className="text-primary hover:underline">
              adominguezl800@gmail.com
            </a>
          </p>
        </section>

        <a href="/" className="inline-block text-sm text-primary hover:underline mt-4">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
