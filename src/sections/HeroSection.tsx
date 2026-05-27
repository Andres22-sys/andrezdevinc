"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/web-banner.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-5">
          Web Design &amp; Development
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          We Build Websites That{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Drive Results
          </span>
        </h1>
        <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Your success is our goal. Let&apos;s build something amazing together.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary-dark text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
        >
          Get Started
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] font-semibold tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
