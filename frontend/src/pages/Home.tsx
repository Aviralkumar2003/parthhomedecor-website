import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Award, Lightbulb, Layers, Wrench, Home, Grid3X3, Building2, Lamp } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { homeFeatures, homeCategories, homeGallery, homeTestimonials } from "../data/siteData";

const heroBg =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80";

const iconMap = { Award, Sparkles, Lightbulb, Layers, Wrench };

const heroServices = [
  { icon: Home, label: "Premium\nMaterials" },
  { icon: Grid3X3, label: "Modular\nSolutions" },
  { icon: Building2, label: "Exterior\nElevations" },
  { icon: Lamp, label: "Designer\nLighting" },
];

export default function HomePage() {
  useDocumentMetadata(
    "Parth Home Decor — Transforming Spaces Into Timeless Experiences",
    "Premium interior materials, modular solutions, exterior elevation systems and designer lighting from Parth Home Decor.",
  );

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-20 md:-mt-24 lg:-mt-28 min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background image */}
        <img
          src={heroBg}
          alt="Luxury interior"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Dark overlay — stronger at top & bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/80" />
        {/* Left-side fade for text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* ── Main hero content ── */}
        <div className="relative z-10 flex flex-1 flex-col items-start justify-center px-6 md:px-12 lg:px-20 pt-28 pb-8 md:pt-36 md:pb-12 max-w-3xl">

          {/* Gold rule top accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="mb-4 h-[2px] w-10 bg-gold"
          />

          {/* ── PARTH HOME DECOR — all same size, left-aligned ── */}
          <div className="flex flex-col items-start leading-[1.0]">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-ivory"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 3.75rem)", lineHeight: 1.0, fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic"
              }}
            >
              PARTH
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(3.5rem, 10vw, 3.75rem)",
                lineHeight: 1.0,
                color: "#C9972B",
                textShadow: "0 2px 30px rgba(201,151,43,0.3)",
              }}
            >
              HOME
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-ivory"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 3.75rem)", lineHeight: 1.0, fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
              }}
            >
              DECOR
            </motion.div>
          </div>

          {/* Subtitle — uniform size, smaller than title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 text-left"
          >
            <p className="font-sans font-light text-ivory/90" style={{
              color: "#ffffff",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(1rem, 3vw, 1.35rem)",
            }}>
              Transforming Spaces Into{" "}
              <span
                style={{
                  color: "#C9972B",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 3vw, 1.35rem)",
                }}
              >
                <p>Timeless Experiences</p>
              </span>
            </p>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.58, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="mt-5 mb-5 h-px w-14 bg-gold/70"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="max-w-xs text-sm leading-relaxed text-ivory/65 md:max-w-sm md:text-base"
          >
            Premium Interior Materials, Modular Solutions, Exterior Elevation Systems &amp; Designer Lighting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-charcoal transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,151,43,0.5)]"
              style={{ background: "linear-gradient(135deg, #e4b84a 0%, #C9972B 60%, #a8771e 100%)" }}
            >
              Explore Our Services <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur-sm transition-all duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* ── Service icons strip at bottom of hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative z-10 mx-4 mb-6 md:mx-8 lg:mx-16 rounded-xl overflow-hidden"
          style={{ background: "rgba(18,18,20,0.45)", border: "1px solid rgba(201,151,43,0.12)" }}
        >
          <div className="grid grid-cols-4">
            {heroServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.label}
                  className={`flex flex-col items-center gap-3 py-5 px-2 transition-colors hover:bg-white/5 ${i < heroServices.length - 1 ? "border-r border-gold/20" : ""}`}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.2}
                    style={{ color: "#C9972B" }}
                  />
                  <span className="text-center text-[10px] font-medium uppercase tracking-[0.12em] text-ivory/70 leading-tight whitespace-pre-line">
                    {svc.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* DESIGNED FOR LIFE — Features */}
      <section className="container-luxury py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.35em]"
            style={{ color: "#C9972B" }}
          >
            Designed For Life
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl">
            Crafting Beautiful Spaces<br />That Inspire
          </h2>
          <div className="mt-4 h-[2px] w-10" style={{ background: "linear-gradient(90deg, #C9972B, transparent)" }} />
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((f, i) => {
            const IconComponent = iconMap[f.iconName as keyof typeof iconMap];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-accent hover:luxury-shadow"
              >
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-700 group-hover:scale-150" />
                {IconComponent && (
                  <IconComponent className="relative text-accent" size={28} strokeWidth={1.5} />
                )}
                <h3 className="relative mt-6 font-display text-2xl">{f.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES — image strip */}
      <section className="py-10 md:py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {homeCategories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/services" className="group relative block overflow-hidden rounded-lg">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span
                        className="block text-[9px] font-bold uppercase tracking-[0.3em] text-ivory"
                      >
                        {c.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {/* <section className="container-luxury py-28 md:py-36">
        <SectionHeading
          eyebrow="Showcase"
          title="Projects that speak in light, line and material."
        />
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {homeGallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group mb-4 overflow-hidden break-inside-avoid rounded-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5" }}
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      {/* <section className="bg-charcoal py-28 text-ivory md:py-36">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted by those who notice the details."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-sm border border-ivory/10 bg-ivory/[0.03] p-8 backdrop-blur-sm"
              >
                <div className="font-display text-5xl leading-none text-accent">"</div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ivory/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ivory/10 pt-5">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/50">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="container-luxury py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-sm bg-gradient-luxe p-8 text-ivory md:p-12 lg:p-20 luxury-shadow"
        >
          <div className="absolute inset-0 opacity-25">
            <img
              src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="relative max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Let's begin</span>
            <h2 className="mt-4 font-display text-3xl text-balance md:text-4xl lg:text-6xl">
              Ready to bring your space to life?
            </h2>
            <p className="mt-5 text-ivory/75">
              Visit our showroom or schedule a consultation. We'll guide you through every material,
              finish and possibility.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 md:px-8 md:py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-accent"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
