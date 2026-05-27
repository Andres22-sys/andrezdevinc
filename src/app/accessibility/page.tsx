import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — AndrezDevInc",
};

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-white dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold text-primary mb-2">Accessibility Statement</h1>
        <p className="text-text-muted dark:text-text-dark/50 text-sm mb-10">
          Effective Date: January 1, 2024 &nbsp;·&nbsp; Compliant with California Unruh Civil Rights Act & ADA Title III.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Our Commitment</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            AndrezDevInc is committed to ensuring digital accessibility for people with
            disabilities. We continually improve the user experience for everyone and apply
            relevant accessibility standards, including the Web Content Accessibility Guidelines
            (WCAG) 2.1, Level AA, as required under California's Unruh Civil Rights Act and
            the Americans with Disabilities Act (ADA) Title III.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Measures We Take</h2>
          <ul className="list-disc list-inside text-sm text-text-muted dark:text-text-dark/70 space-y-1">
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Sufficient color contrast ratios for text and interactive elements</li>
            <li>Keyboard navigation support throughout the website</li>
            <li>Descriptive alt text for all images</li>
            <li>Responsive design that adapts to different screen sizes and zoom levels</li>
            <li>ARIA labels on interactive controls such as the dark mode toggle</li>
            <li>Videos include muted autoplay and do not cause seizure risks</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Known Limitations</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            While we strive for full accessibility, some third-party embedded content or
            services (such as EmailJS) may not meet the same accessibility standards. We
            are actively working to address any gaps.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Feedback & Contact</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            We welcome feedback on the accessibility of our website. If you experience
            barriers or have difficulty accessing any content, please contact us and we
            will make every effort to provide the information in an alternative format
            or resolve the issue promptly.
          </p>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70 mt-3">
            <strong className="text-text-light dark:text-text-dark">Email:</strong>{" "}
            <a href="mailto:adominguezl800@gmail.com" className="text-primary hover:underline">
              adominguezl800@gmail.com
            </a>
            <br />
            We aim to respond to accessibility requests within 2 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Formal Complaints</h2>
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dark/70">
            If you are not satisfied with our response, you may contact the California
            Department of Rehabilitation or the U.S. Department of Justice Civil Rights
            Division regarding ADA complaints.
          </p>
        </section>

        <a href="/" className="inline-block text-sm text-primary hover:underline mt-4">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
