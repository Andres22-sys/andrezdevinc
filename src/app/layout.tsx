import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "AndrezDev Inc - Web Design & Development",
  description:
    "AndrezDev Inc offers custom web design, SEO optimization, responsive design, and branding services. Your success is our goal.",
  openGraph: {
    title: "AndrezDev Inc - Web Design & Development",
    description: "Custom websites built for your success.",
    url: "https://www.andrezdev.com",
    siteName: "AndrezDev Inc",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
