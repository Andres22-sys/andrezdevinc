import { Palette, Search, Monitor, Settings, Layers, BarChart2, type LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Custom Design",
    Icon: Palette,
    description:
      "We create visually unique, user-centered designs tailored to reflect your brand identity and engage your audience.",
  },
  {
    title: "SEO Optimization",
    Icon: Search,
    description:
      "Boost your website's visibility on search engines with targeted keyword research, on-page optimization, and technical SEO improvements.",
  },
  {
    title: "Responsive Design",
    Icon: Monitor,
    description:
      "Your website will seamlessly adapt to any screen size, providing an optimized and consistent experience across all devices.",
  },
  {
    title: "Website Maintenance",
    Icon: Settings,
    description:
      "Ensure websites stay up-to-date, secure, and running smoothly with regular updates, backups, and bug fixes.",
  },
  {
    title: "Branding & Graphic Design",
    Icon: Layers,
    description:
      "Create or enhance brand identity through logo design, custom graphics, and cohesive visual design for websites and social media.",
  },
  {
    title: "Analytics & Performance",
    Icon: BarChart2,
    description:
      "Set up tools like Google Analytics, provide monthly reports, and track conversions to help clients grow their audience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-white dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group bg-white dark:bg-bg-section-dark border border-gray-100 dark:border-white/5 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 dark:hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                <Icon className="text-primary" size={22} />
              </div>
              <h3 className="text-base font-bold text-text-light dark:text-text-dark mb-3">
                {title}
              </h3>
              <p className="text-sm text-text-muted dark:text-text-dark/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
