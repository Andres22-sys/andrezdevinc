"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_h0io3m9";
const TEMPLATE_ID = "template_ttxugjl";
const USER_ID = "Q6uKZ6hijGSO1n0im";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-bg-dark relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            Contact Us
          </h2>
          <p className="text-text-muted dark:text-text-dark/50 text-sm">
            Feel free to reach out with any questions or project inquiries!
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            autoComplete="name"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-bg-section-dark text-text-light dark:text-text-dark placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            autoComplete="email"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-bg-section-dark text-text-light dark:text-text-dark placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-bg-section-dark text-text-light dark:text-text-dark placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all duration-200"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-primary to-secondary-dark hover:from-primary-dark hover:to-secondary-dark disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 mt-1"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-green-600 dark:text-green-400 font-semibold text-sm bg-green-50 dark:bg-green-900/20 py-3 rounded-xl">
              Message sent! We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-500 font-semibold text-sm bg-red-50 dark:bg-red-900/20 py-3 rounded-xl">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
