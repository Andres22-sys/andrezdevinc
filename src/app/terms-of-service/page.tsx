import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AndrezDevInc",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold text-primary mb-2">Terms of Service</h1>
        <p className="text-text-muted dark:text-text-dark/50 text-sm mb-10">
          Effective Date: January 1, 2024 &nbsp;·&nbsp; Governing law: State of California, USA.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            By accessing or using the AndrezDevInc website (andrezdevinc.com) or engaging our
            web design and development services, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Services</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            AndrezDevInc provides web design, web development, branding, SEO optimization, and
            related digital services. Specific deliverables, timelines, and pricing are outlined
            in individual project agreements or proposals provided to each client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Client Responsibilities</h2>
          <ul className="list-disc list-inside text-sm text-text-muted dark:text-text-dark/70 space-y-1">
            <li>Provide accurate information and materials required for the project</li>
            <li>Review and provide feedback within agreed timelines</li>
            <li>Make payments according to the agreed payment schedule</li>
            <li>Ensure all content provided does not infringe third-party intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Upon receipt of full payment, the client receives ownership of the final deliverables
            created specifically for their project. AndrezDevInc retains the right to display
            the completed work in its portfolio. Any third-party assets, frameworks, or
            open-source software used remain subject to their respective licenses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Payment Terms</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Payment terms are specified per project agreement. Failure to pay may result in
            suspension of services and withholding of deliverables until payment is received.
            All prices are in US Dollars.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Limitation of Liability</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            To the fullest extent permitted by California law, AndrezDevInc shall not be liable
            for any indirect, incidental, special, or consequential damages arising from the use
            of our services or website. Our total liability shall not exceed the amount paid by
            the client for the specific service giving rise to the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">7. Warranty Disclaimer</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Our website and services are provided "as is" without warranties of any kind, either
            express or implied, including but not limited to implied warranties of merchantability
            or fitness for a particular purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            These Terms are governed by and construed in accordance with the laws of the State
            of California, without regard to its conflict of law provisions. Any disputes shall
            be resolved in the courts located in California.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">9. Changes to Terms</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            We reserve the right to modify these Terms at any time. Continued use of the website
            or services after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">10. Contact</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:adominguezl800@gmail.com" className="text-primary hover:underline">
              adominguezl800@gmail.com
            </a>.
          </p>
        </section>

        <a href="/" className="inline-block text-sm text-primary hover:underline mt-4">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
