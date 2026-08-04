"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { socialLinks, siteConfig } from "@/config/site";
import { useScrollReveal } from "@/lib/useScrollReveal";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const IS_CONFIGURED = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const containerRef = useScrollReveal("reveal-item", { direction: "left", distance: 40 });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!IS_CONFIGURED) {
      setStatus("not_configured");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#06080d] min-h-screen relative overflow-hidden">
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="w-full relative z-10 flex flex-col"
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "2.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Botón volver */}

        <div className="flex justify-end mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
          >
            <span>←</span> {t.contact.back}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-5">
            {/* Encabezado */}
            <div className="reveal-item mb-2">
              <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {t.contact.eyebrow}
              </p>
              <h1
                className="text-white font-bold leading-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                {t.contact.title}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-[520px]">
                {t.contact.description}
              </p>
            </div>
            {t.contact.info.map((item) => (
              <div
                key={item.label}
                className="reveal-item flex items-center gap-5 px-6 py-6 min-h-[88px] rounded-xl border border-[#1a2235] bg-[#080c14] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0f1a2e] border border-blue-900/40 flex items-center justify-center shrink-0 text-xl transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white text-sm font-medium break-words transition-colors duration-200 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium break-words">{item.value}</p>
                  )}
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Disponibilidad */}
            <div className="flex items-center gap-3 mt-4 px-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-gray-400 text-sm">
                {t.contact.available}
              </p>
            </div>
          </div>

          {/* DERECHA — formulario */}
          <div className="reveal-item rounded-2xl border border-[#1a2235] bg-[#080c14] overflow-hidden">
            {/* Línea azul superior */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" />

            {!IS_CONFIGURED && (
              <div className="flex items-start gap-3 text-amber-300 text-sm bg-amber-900/15 border-b border-amber-900/30 px-6 py-4">
                <span aria-hidden="true">ⓘ</span>
                <span>
                  {t.contact.form.notConfigured}{" "}
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-200">
                    LinkedIn
                  </a>
                  {" · "}
                  <a href={socialLinks.email} className="underline hover:text-amber-200">
                    {siteConfig.email}
                  </a>
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              style={{ padding: "10%" }}
            >
              {/* Nombre + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-6 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-6 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                  />
                </div>
              </div>

              {/* Asunto — ancho completo */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  {t.contact.form.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  autoComplete="off"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-6 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                />
              </div>

              {/* Mensaje — más alto */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-6 py-4 outline-none transition-all duration-200 placeholder:text-gray-700 resize-none"
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div className="flex items-center gap-3 text-green-400 text-sm bg-green-900/20 border border-green-900/40 rounded-lg px-4 py-3" role="status">
                  <span aria-hidden="true">✓</span>
                  <span>{t.contact.form.success}</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 text-red-400 text-sm bg-red-900/20 border border-red-900/40 rounded-lg px-4 py-3" role="alert">
                  <span aria-hidden="true">✕</span>
                  <span>{t.contact.form.error}</span>
                </div>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success" || !IS_CONFIGURED}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed text-white h-[48px] rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c14]"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : status === "success" ? (
                  t.contact.form.sent
                ) : !IS_CONFIGURED ? (
                  t.contact.form.unavailable
                ) : (
                  t.contact.form.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
