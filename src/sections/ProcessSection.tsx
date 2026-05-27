const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "Discuss your goals, target audience, and desired features to align on a project roadmap that meets your vision.",
  },
  {
    number: 2,
    title: "Design Phase",
    description:
      "Create custom, brand-aligned design, incorporating your feedback to ensure every detail reflects your vision.",
  },
  {
    number: 3,
    title: "Development",
    description:
      "Build a responsive, fast, and SEO-optimized site that incorporates all requested features for an optimal user experience.",
  },
  {
    number: 4,
    title: "Review & Launch",
    description:
      "Thorough testing and final adjustments, launch your site and provide support to ensure a smooth handoff.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 px-6 bg-bg-section-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Process
          </h2>
          <p className="text-text-dark/50 mt-3 text-sm max-w-md mx-auto">
            We follow a streamlined process to deliver high-quality websites
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-bg-dark/60 backdrop-blur-sm border border-white/5 rounded-2xl p-7 text-center hover:border-primary/30 hover:bg-bg-dark/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary-dark text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
                {step.number}
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-text-dark/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
