import { useState, useRef, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Check } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { companyInfo, businessHours, contactServices } from "../data/siteData";
import emailjs from "@emailjs/browser";
import {
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_CONTACT_TEMPLATE_ID,
} from "../config/config";

const info = [
  { icon: Phone, label: "Call", value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: companyInfo.whatsapp,
    href: companyInfo.whatsappLink,
  },
  { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
  {
    icon: MapPin,
    label: "Address",
    value: companyInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
  },
];

export default function ContactPage() {
  useDocumentMetadata(
    "Contact — Parth Home Decor",
    "Visit our showroom or book a consultation. Reach Parth Home Decor by phone, WhatsApp or email.",
  );

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    emailjs
      .sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSent(true);
          formRef.current?.reset();
          setIsSending(false);
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
          setIsSending(false);
        },
      );
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="container-luxury py-24 md:py-36">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-accent"
        >
          Get in touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-5 max-w-4xl font-display text-4xl text-balance md:text-5xl lg:text-7xl"
        >
          Let's begin a conversation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-muted-foreground"
        >
          Tell us about your project. Our team will respond within one business day with curated
          suggestions and next steps.
        </motion.p>
      </section>

      {/* Info cards */}
      <section className="container-luxury">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {info.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-sm border border-border bg-card p-7 transition-all hover:border-accent hover:luxury-shadow"
            >
              <it.icon className="text-accent" size={22} strokeWidth={1.5} />
              <div className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {it.label}
              </div>
              <div
                className={`mt-2 font-display text-lg ${it.label === "Email" ? "break-all" : "break-words"}`}
              >
                <a
                  href={it.href}
                  target={it.label === "Address" || it.label === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {it.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + hours */}
      <section className="container-luxury mt-24 grid gap-12 lg:grid-cols-12">
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-sm border border-border bg-card p-8 md:p-12 lg:col-span-7"
        >
          <h2 className="font-display text-3xl md:text-4xl">Send us an enquiry</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            All fields are required. We respect your privacy.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Field label="Name" name="from_name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email" name="from_email" type="email" className="md:col-span-2" />
            <div className="md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Service Required
              </label>
              <select
                name="service"
                required
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
              >
                <option value="">Select a service…</option>
                {contactServices.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending || sent}
            className="mt-10 inline-flex w-full justify-center items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 md:w-auto md:px-8 md:py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory transition-all hover:bg-accent hover:text-charcoal disabled:opacity-70"
          >
            {isSending ? (
              "Sending..."
            ) : sent ? (
              <>
                <Check size={16} /> Sent — we'll be in touch
              </>
            ) : (
              <>
                Send Message <Send size={14} />
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 lg:col-span-5"
        >
          <div className="rounded-sm border border-border bg-card p-8">
            <Clock className="text-accent" size={22} strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-2xl">Business Hours</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {businessHours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                >
                  <span className="text-muted-foreground">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-sm border border-border bg-secondary">
            <iframe
              title="Map"
              src={companyInfo.mapEmbedUrl}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <section className="container-luxury mt-28 mb-12">
        <SectionHeading
          eyebrow="Visit"
          title="Walk through our showroom."
          description="Experience finishes, sample modular kitchens and lighting layouts in person. Appointments recommended."
          align="center"
        />
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
