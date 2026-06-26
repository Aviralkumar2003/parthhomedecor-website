import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { services, companyInfo } from "../data/siteData";
import { ServiceImageCarousel } from "../components/ServiceImageCarousel";

const processSteps = [
  { num: "01", label: "Consultation", desc: "Understand your vision" },
  { num: "02", label: "Design", desc: "Curate materials & plan" },
  { num: "03", label: "Execution", desc: "Precision installation" },
  { num: "04", label: "Delivery", desc: "Flawless handover" },
];

export default function ServicesPage() {
  useDocumentMetadata(
    "Our Services — Parth Home Decor",
    "Interior, modular, exterior and lighting solutions — end-to-end delivery from consultation to installation.",
  );

  return (
    <PageShell>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-luxe text-ivory">
        {/* decorative grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* radial glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-navy-soft/30 blur-[100px]" />

        <div className="container-luxury relative z-10 py-28 md:py-40 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              What we do
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-7 max-w-4xl font-display text-4xl leading-[1.08] text-balance md:text-5xl lg:text-7xl"
          >
            Services crafted for projects that{" "}
            <em className="not-italic text-accent">demand more</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg"
          >
            From concept to commissioning — we deliver end-to-end interior,
            modular, exterior and lighting solutions with precision and premium
            craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-accent hover:text-charcoal"
            >
              Start a project
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-ivory/90 transition-all hover:border-ivory/60 hover:bg-ivory/10"
            >
              <Phone size={14} />
              Call us
            </a>
          </motion.div>
        </div>

        {/* Removed the bottom gradient fade as it creates a muddy color mix between dark blue and light cream */}
      </section>

      {/* ═══════════ PROCESS STEPS (Overlapping Card) ═══════════ */}
      <section className="container-luxury relative z-20 -mt-16 md:-mt-24 pb-20 md:pb-28">
        <div className="rounded-sm bg-card px-6 py-12 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] md:px-12 md:py-16 luxury-shadow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Our Process
            </span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              Four steps to your perfect space
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative text-center"
              >
                {/* connector line (hidden on last) */}
                {i < processSteps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-accent/40 to-accent/0 md:block" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/5 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-accent/20">
                  <span className="font-display text-lg text-accent">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg">{step.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE SECTIONS ═══════════ */}
      <div className="pb-12 md:pb-20">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={s.eyebrow}
              className={`relative overflow-hidden ${
                isEven ? "" : "bg-secondary/40"
              }`}
            >
              {/* subtle decorative blobs per section */}
              {isEven ? (
                <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[80px]" />
              ) : (
                <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-navy/[0.04] blur-[80px]" />
              )}

              <div className="container-luxury relative z-10 py-20 md:py-28 lg:py-36">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* ── Image Carousel with decorative frame ── */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* gold accent frame — offset behind the image */}
                    <div
                      className={`pointer-events-none absolute ${
                        i % 2 ? "-left-3 -top-3" : "-right-3 -top-3"
                      } z-0 h-full w-full rounded-sm border-2 border-accent/20`}
                    />
                    <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                      <ServiceImageCarousel
                        images={s.images}
                        alt={s.eyebrow}
                        interval={4500 + i * 500}
                      />
                    </div>
                    {/* number badge */}
                    <span
                      className={`absolute ${
                        i % 2 ? "left-4" : "right-4"
                      } -bottom-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-lg text-charcoal shadow-lg`}
                    >
                      0{i + 1}
                    </span>
                  </motion.div>

                  {/* ── Content ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="lg:py-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-px w-6 bg-accent" />
                      <span className="text-xs uppercase tracking-[0.3em] text-accent">
                        {s.eyebrow}
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-3xl leading-[1.12] text-balance md:text-4xl lg:text-5xl">
                      {s.title}
                    </h2>

                    <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    {/* service items — card-style */}
                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      {s.items.map((it, idx) => (
                        <motion.div
                          key={it}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.25 + idx * 0.07,
                          }}
                          className="group/item flex items-start gap-3 rounded-sm border border-border/60 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card hover:shadow-md"
                        >
                          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent transition-colors group-hover/item:bg-accent/20">
                            {idx + 1}
                          </span>
                          <span className="text-sm leading-snug">{it}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-accent/40 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-charcoal"
                    >
                      Enquire now
                      <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* section divider */}
              {i < services.length - 1 && (
                <div className="container-luxury">
                  <div className="hairline-gold" />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="container-luxury pb-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-sm bg-gradient-luxe p-10 text-ivory md:p-14 lg:p-20 luxury-shadow"
        >
          {/* subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-accent/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-[200px] w-[200px] rounded-full bg-navy-soft/30 blur-[60px]" />

          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent">
                  Let&apos;s begin
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl text-balance md:text-4xl lg:text-5xl">
                Ready to transform your space?
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-ivory/70">
                Visit our showroom or schedule a consultation. We'll guide you
                through every material, finish and possibility.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-accent"
              >
                Book a Consultation
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory/90 transition-all hover:border-ivory/60 hover:bg-ivory/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
