"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

type Status = "idle" | "submitting" | "done";

export default function ContactForm() {
  const { t } = useLang();
  const f = t.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: demo only — wire this up to an email service / API route.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("done");
  }

  return (
    <div className="relative rounded-3xl border border-brand-100 bg-white/85 p-6 shadow-lift sm:p-8">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white shadow-glow"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </motion.span>
            <h3 className="mt-5 text-xl font-bold text-ink">{f.successTitle}</h3>
            <p className="mt-2 max-w-sm text-sm text-ink-muted">{f.successText}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
            >
              {f.sendAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={f.name} htmlFor="name">
                <input id="name" name="name" type="text" required placeholder={f.namePh} className={inputCls} />
              </Field>
              <Field label={f.phone} htmlFor="phone">
                <input id="phone" name="phone" type="tel" required placeholder={f.phonePh} className={inputCls} />
              </Field>
            </div>

            <Field label={f.email} htmlFor="email">
              <input id="email" name="email" type="email" required placeholder={f.emailPh} className={inputCls} />
            </Field>

            <Field label={f.service} htmlFor="service">
              <select id="service" name="service" className={inputCls} defaultValue="">
                <option value="" disabled>{f.servicePh}</option>
                {t.services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="not-sure">{f.notSure}</option>
              </select>
            </Field>

            <Field label={f.message} htmlFor="message">
              <textarea id="message" name="message" rows={4} placeholder={f.messagePh} className={`${inputCls} resize-none`} />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-700 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                    <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  {f.sending}
                </>
              ) : (
                f.submit
              )}
            </button>
            <p className="text-center text-xs text-ink-muted">{f.consent}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-brand-100 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
