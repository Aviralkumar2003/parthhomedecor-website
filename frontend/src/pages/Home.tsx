import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Award, Lightbulb, Layers, Wrench } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

const heroVideo = "https://cdn.pixabay.com/video/2020/05/25/40130-424888193_large.mp4";
const heroPoster =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80";

const features = [
  {
    icon: Award,
    title: "Premium Quality Materials",
    desc: "Sourced from leading mills and global brands, every product meets a luxury standard.",
  },
  {
    icon: Sparkles,
    title: "Expert Consultation",
    desc: "Our designers translate your vision into a curated, cohesive specification.",
  },
  {
    icon: Lightbulb,
    title: "Latest Design Trends",
    desc: "From fluted oak to architectural lighting — we move with the global aesthetic.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    desc: "Materials, modular, exterior elevation and lighting under one roof.",
  },
  {
    icon: Wrench,
    title: "Reliable Installation",
    desc: "Skilled craftsmen and project managers ensure a flawless finish.",
  },
];

const categories = [
  {
    title: "Interior Materials",
    count: "13 Collections",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modular Kitchens",
    count: "Custom Built",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exterior Elevation",
    count: "ACP · HPL",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designer Lighting",
    count: "Architectural",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    quote:
      "Parth Home Decor elevated our villa with materials we couldn't find anywhere else. The detailing is impeccable.",
    name: "Ananya Mehta",
    role: "Homeowner, Pune",
  },
  {
    quote:
      "From the fluted panels to the chandelier selection, the entire process felt effortless and refined.",
    name: "Rohan Kapoor",
    role: "Architect",
  },
  {
    quote:
      "Our hotel lobby received endless compliments. Quality, craft, and consultancy of the highest order.",
    name: "Vikram Shah",
    role: "Hospitality Developer",
  },
];

export default function HomePage() {
  useDocumentMetadata(
    "Parth Home Decor — Transforming Spaces Into Timeless Experiences",
    "Premium interior materials, modular solutions, exterior elevation systems and designer lighting from Parth Home Decor.",
  );

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-24 md:-mt-28 h-screen min-h-[680px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/85" />

        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-24 text-ivory md:justify-center md:pb-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-accent"
          >
            Parth Home Decor · Est. Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-5xl font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-[5.5rem]"
          >
            Transforming Spaces Into <em className="not-italic text-accent">Timeless</em>{" "}
            Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg"
          >
            Premium Interior Materials, Modular Solutions, Exterior Elevation Systems & Designer
            Lighting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-accent"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/60 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory transition-all hover:bg-ivory hover:text-charcoal"
            >
              Contact Us
            </Link> */}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/60"
        >
          Scroll
        </motion.div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-luxury py-28 md:py-36">
        <SectionHeading
          eyebrow="Why Parth Home Decor"
          title="A house of materials, craft and consultancy."
          description="Five reasons discerning architects, designers and homeowners choose us for projects that demand more."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-accent hover:luxury-shadow"
            >
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-700 group-hover:scale-150" />
              <f.icon className="relative text-accent" size={28} strokeWidth={1.5} />
              <h3 className="relative mt-6 font-display text-2xl">{f.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      {/* <section className="bg-secondary/60 py-28 md:py-36">
        <div className="container-luxury">
          <SectionHeading eyebrow="Featured Categories" title="A curated catalogue, end to end." />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/products" className="group block overflow-hidden rounded-sm bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                        {c.count}
                      </span>
                      <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                      <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-0 transition-opacity group-hover:opacity-100">
                        Discover <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* GALLERY */}
      {/* <section className="container-luxury py-28 md:py-36">
        <SectionHeading
          eyebrow="Showcase"
          title="Projects that speak in light, line and material."
        />
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {gallery.map((src, i) => (
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
            {testimonials.map((t, i) => (
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
          className="relative overflow-hidden rounded-sm bg-gradient-luxe p-12 text-ivory md:p-20 luxury-shadow"
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
            <h2 className="mt-4 font-display text-4xl text-balance md:text-6xl">
              Ready to bring your space to life?
            </h2>
            <p className="mt-5 text-ivory/75">
              Visit our showroom or schedule a consultation. We'll guide you through every material,
              finish and possibility.
            </p>
            {/* <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-accent"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link> */}
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
