import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { ProductCard } from "../components/ProductCard";
import { products, categoryGroups, type CategoryGroup } from "../data/products";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function ProductsPage() {
  useDocumentMetadata(
    "Our Products — Parth Home Decor",
    "Explore our complete catalogue: interior panels, modular solutions, exterior elevation and designer lighting.",
  );

  const [filter, setFilter] = useState<CategoryGroup>("All");
  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.group === filter)),
    [filter],
  );

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/50">
        <div className="container-luxury py-24 md:py-36">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.3em] text-accent"
          >
            Our Catalogue
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-4xl font-display text-5xl text-balance md:text-7xl"
          >
            Materials and pieces chosen with intention.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-muted-foreground"
          >
            From fluted oak panels to architectural chandeliers — every product in our catalogue is
            selected for craft, longevity and aesthetic precision.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="container-luxury py-16">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
          {categoryGroups.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                  active
                    ? "bg-charcoal text-ivory"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
          <span className="ml-auto text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {filtered.length} products
          </span>
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </motion.div>
      </section>

      {/* Section breakdown */}
      <section className="bg-secondary/50 py-28">
        <div className="container-luxury">
          <SectionHeading eyebrow="At a glance" title="Everything you need, under one roof." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Interior Products",
                items: [
                  "PVC · WPC · Fluted Panels",
                  "Charcoal · Soffit · 3D Panels",
                  "UV Sheets & Rolls",
                  "Mosaic · Wallpaper · PU Stone",
                  "Vertical Gardens",
                  "Wooden Flooring",
                ],
              },
              {
                title: "Modular Solutions",
                items: [
                  "Ply Board",
                  "HDMR",
                  "Laminates",
                  "Acrylic",
                  "Glass Work",
                  "Aluminium Solutions",
                ],
              },
              { title: "Exterior Products", items: ["ACP Cladding", "HPL Front Elevation Work"] },
              {
                title: "Lighting Collection",
                items: [
                  "Fancy Lights",
                  "Chandeliers",
                  "LED Panels",
                  "Profile Lights",
                  "COB Lights",
                ],
              },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-sm border border-border bg-card p-8"
              >
                <h3 className="font-display text-xl">{g.title}</h3>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 before:mt-2 before:block before:h-px before:w-3 before:shrink-0 before:bg-accent"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
