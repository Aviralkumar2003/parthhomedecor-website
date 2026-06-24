import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

const services = [
  {
    eyebrow: "Interior Solutions",
    title: "Residential & commercial interiors that endure.",
    desc: "From private residences to flagship retail, our team delivers complete interior work — wall, ceiling, decorative finishes — coordinated to a single design language.",
    items: [
      "Residential Interior Work",
      "Commercial Interior Work",
      "Wall & Ceiling Solutions",
      "Decorative Finishes",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "Modular Solutions",
    title: "Modular kitchens, storage and bespoke joinery.",
    desc: "Engineered for daily life and built to last. Premium core materials, German hardware and a precision-fit installation process.",
    items: ["Modular Kitchens", "Storage Solutions", "Custom Interior Fabrication"],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "Exterior Solutions",
    title: "Facades that compose the first impression.",
    desc: "ACP elevations, HPL facades and decorative installations — engineered for weather, designed for character.",
    items: ["ACP Elevation Work", "HPL Facades", "Exterior Decorative Installations"],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "Lighting Solutions",
    title: "Light as architecture.",
    desc: "From consultation to commissioning — we plan lighting layers that sculpt your space across day and evening modes.",
    items: [
      "Lighting Design Consultation",
      "Decorative Lighting Installation",
      "Architectural Lighting",
    ],
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ServicesPage() {
  useDocumentMetadata(
    "Our Services — Parth Home Decor",
    "Interior, modular, exterior and lighting solutions — end-to-end delivery from consultation to installation.",
  );

  return (
    <PageShell>
      <section className="container-luxury py-24 md:py-36">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-accent"
        >
          What we do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-5 max-w-4xl font-display text-5xl text-balance md:text-7xl"
        >
          Services crafted for projects that demand more.
        </motion.h1>
      </section>

      <div className="space-y-28 pb-32 md:space-y-40">
        {services.map((s, i) => (
          <section key={s.eyebrow} className="container-luxury">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden rounded-sm"
              >
                <img
                  src={s.image}
                  alt={s.eyebrow}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
                <span className="absolute left-6 top-6 rounded-full bg-ivory/95 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal">
                  0{i + 1}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-accent">{s.eyebrow}</span>
                <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">{s.title}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-4 border-t border-border pt-3 text-sm"
                    >
                      <span className="font-display text-accent">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] gold-underline"
                >
                  Enquire about this service <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
