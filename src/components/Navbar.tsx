"use client";

import Image from "next/image";
import { Home, Briefcase, Folder, Workflow, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "#hero", Icon: Home },
  { label: "Services", href: "#services", Icon: Briefcase },
  { label: "Portfolio", href: "#portfolio", Icon: Folder },
  { label: "Process", href: "#process", Icon: Workflow },
  { label: "Contact", href: "#contact", Icon: Mail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop navbar — frosted glass */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-lg border-b border-gray-200/60 dark:border-white/10 transition-colors duration-300">
        <a href="#hero" className="flex items-center">
          <Image
            src={theme === "dark" ? "/images/logo-white.png" : "/images/logo-black.png"}
            alt="AndrezDev Logo"
            width={90}
            height={38}
            priority
          />
        </a>

        <ul className="flex gap-8 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-text-light dark:text-text-dark font-medium text-sm transition-colors duration-200 hover:text-primary dark:hover:text-secondary after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 hover:bg-primary/10 dark:hover:bg-primary/20 text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary transition-all duration-300"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>

      {/* Mobile bottom nav — frosted glass */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-lg border-t border-gray-200/60 dark:border-white/10 transition-colors duration-300">
        {navLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="flex flex-1 flex-col items-center justify-center py-3 gap-1 text-text-muted dark:text-text-dark/60 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
          >
            <Icon size={20} />
            <span className="text-[10px] font-semibold">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
