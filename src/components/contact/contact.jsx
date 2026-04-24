"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Link from "next/link";
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const router = useRouter();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
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
        className="w-full relative z-10 flex flex-col"
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4%",
          paddingBottom: "6rem",
        }}
      >
        {/* Botón volver */}

        <div className="flex justify-end mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-all hover:gap-3"
            style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
          >
            <span>←</span> Volver
          </Link>
        </div>

        {/* Encabezado */}
        <div className="mb-16">
          <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Contacto
          </p>
          <h1
            className="text-white font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Hablemos
          </h1>
          <p className="text-gray-400 text-base  leading-relaxed">
            ¿Tienes un proyecto, propuesta o simplemente quieres conectar?
            Escríbeme y te responderé pronto.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          style={{ paddingTop: "2vh" }}
        >
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-5 ">
            {[
              {
                icon: "✉",
                label: "Email",
                value: "tu@email.com",
                sub: "Respondo en menos de 24h",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "/in/tu-perfil",
                sub: "Conectemos profesionalmente",
              },
              {
                icon: "📍",
                label: "Ubicación",
                value: "Colombia",
                sub: "Disponible para trabajo remoto",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 pl-20 pr-6 py-6 min-h-[88px] rounded-xl border border-[#1a2235] bg-[#080c14]"
              >
                <div className="w-12 h-12 translate-x-3 rounded-lg bg-[#0f1a2e] border border-blue-900/40 flex items-center justify-center shrink-0 text-xl">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Disponibilidad */}
            <div className="flex items-center gap-3 mt-4 px-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-gray-400 text-sm">
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>

          {/* DERECHA — formulario */}
          <div className="rounded-2xl border border-[#1a2235] bg-[#080c14] overflow-hidden relative lg:-top-12">
            {/* Línea azul superior */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" />

            <form
              onSubmit={handleSubmit}
              className="p-80 flex flex-col gap-6"
              style={{ padding: "10%" }}
            >
              {/* Nombre + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                    Nombre
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-4 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-4 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                  />
                </div>
              </div>

              {/* Asunto — ancho completo */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  Asunto
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-4 h-[46px] outline-none transition-all duration-200 placeholder:text-gray-700"
                />
              </div>

              {/* Mensaje — más alto */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="bg-[#0a0f1a] border border-[#1a2235] focus:border-blue-500 text-white text-sm rounded-lg px-4 py-4 outline-none transition-all duration-200 placeholder:text-gray-700 resize-none"
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div className="flex items-center gap-3 text-green-400 text-sm bg-green-900/20 border border-green-900/40 rounded-lg px-4 py-3">
                  <span>✓</span>
                  <span>
                    Mensaje enviado correctamente. ¡Te responderé pronto!
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 text-red-400 text-sm bg-red-900/20 border border-red-900/40 rounded-lg px-4 py-3">
                  <span>✕</span>
                  <span>Hubo un error al enviar. Intenta de nuevo.</span>
                </div>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed text-white h-[48px] rounded-lg text-sm font-semibold transition-all duration-200"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : status === "success" ? (
                  "✓ Mensaje enviado"
                ) : (
                  "Enviar mensaje →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
