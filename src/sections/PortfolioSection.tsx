import Image from "next/image";

const projects = [
  {
    title: "K&S Ironworks",
    description: "A website for a welding company.",
    image: "/images/ksinc-web.png",
    url: "https://ksiwinc.com/",
  },
  {
    title: "CC Processing For Less",
    description: "A website for a Clover POS service.",
    image: "/images/proccesingForLess.png",
    url: "https://ccprocessingforless.com/",
  },
  {
    title: "Huckleberry Pastry",
    description: "A landing page for a pastry company.",
    image: "/images/pastry-web.jpg",
    url: "https://pastry-web.vercel.app/",
  },
  {
    title: "Tea Cozy",
    description: "A landing page for a coffee shop.",
    image: "/images/tea-web.jpg",
    url: "https://teashop-web.vercel.app/",
  },
  {
    title: "Gericht",
    description: "A landing page for a restaurant.",
    image: "/images/restaurant-web.png",
    url: "https://modern-ux-ui-restaurant.vercel.app/",
  },
  {
    title: "Nexoria",
    description: "A landing page for a financial dashboard.",
    image: "/images/nexoria-web.png",
    url: "https://nexoria-gamma.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-gray-50 dark:bg-bg-section-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-text-muted dark:text-text-dark/50 mt-3 text-sm max-w-md mx-auto">
            Check out some of the websites we&apos;ve built for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-bg-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="overflow-hidden h-52 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm flex items-center gap-2">
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted dark:text-text-dark/60">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
