export default function Footer() {
  return (
    <footer className="bg-white dark:bg-bg-dark border-t border-gray-100 dark:border-white/5 py-8 pb-20 md:pb-8 text-center transition-colors duration-300">
      <div className="flex justify-center items-center gap-4 mb-4">
        <a
          href="https://www.instagram.com/andrezdevinc/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary dark:text-text-dark/40 dark:hover:text-secondary font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4"
        >
          Instagram
        </a>
        <span className="text-gray-300 dark:text-white/20 select-none">·</span>
        <a
          href="https://www.pinterest.com/andrezdevinc/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary dark:text-text-dark/40 dark:hover:text-secondary font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4"
        >
          Pinterest
        </a>
      </div>

      {/* Legal links — required under California law */}
      <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-1 mb-4">
        <a
          href="/privacy-policy"
          className="text-text-muted hover:text-primary dark:text-text-dark/40 dark:hover:text-secondary text-xs transition-colors duration-200 hover:underline underline-offset-4"
        >
          Privacy Policy
        </a>
        <span className="text-gray-300 dark:text-white/20 select-none">·</span>
        <a
          href="/terms-of-service"
          className="text-text-muted hover:text-primary dark:text-text-dark/40 dark:hover:text-secondary text-xs transition-colors duration-200 hover:underline underline-offset-4"
        >
          Terms of Service
        </a>
        <span className="text-gray-300 dark:text-white/20 select-none">·</span>
        <a
          href="/accessibility"
          className="text-text-muted hover:text-primary dark:text-text-dark/40 dark:hover:text-secondary text-xs transition-colors duration-200 hover:underline underline-offset-4"
        >
          Accessibility
        </a>
      </div>

      <p className="text-xs text-gray-400 dark:text-white/25">
        &copy; {new Date().getFullYear()} AndrezDevInc. All Rights Reserved.
      </p>
    </footer>
  );
}
