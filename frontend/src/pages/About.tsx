import { motion } from "motion/react";
import { Gem, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { aboutValues, aboutStats } from "../data/siteData";

const iconMap = { Gem, Sparkles, ShieldCheck, HeartHandshake };

export default function AboutPage() {
  useDocumentMetadata(
    "About — Parth Home Decor",
    "Parth Home Decor is a trusted provider of premium interior and exterior solutions — built on quality, innovation and customer commitment.",
  );

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative -mt-20 md:-mt-24 lg:-mt-28 h-[80vh] min-h-[440px] md:min-h-[560px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="container-luxury relative z-10 flex h-full flex-col justify-end pb-24 text-ivory">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-accent"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-5 max-w-4xl font-display text-4xl text-balance md:text-5xl lg:text-7xl"
          >
            A house of materials, built on trust and taste.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="container-luxury py-28 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Company</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl">Parth Home Decor</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Parth Home Decor is a trusted provider of premium interior and exterior solutions — a
              single destination for materials, modular systems, decorative finishes and designer
              lighting.
            </p>
            <p>
              For over a decade, architects, interior designers, builders and homeowners have turned
              to us for considered curation and uncompromising delivery. We believe a building is
              the sum of its surfaces, and every surface deserves intention.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-secondary/50 py-24">
        <div className="container-luxury grid gap-10 md:grid-cols-2">
          {[
            {
              title: "Our Vision",
              body: "Deliver modern, elegant, and durable solutions that elevate residential and commercial spaces.",
            },
            {
              title: "Our Mission",
              body: "Provide high-quality products, expert guidance, and exceptional customer satisfaction at every step.",
            },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-sm border border-border bg-card p-10"
            >
              <div className="font-display text-5xl md:text-6xl text-accent">0{i + 1}</div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{b.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-luxury py-28">
        <SectionHeading
          eyebrow="Our Values"
          title="Four principles that shape every project."
          align="center"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v, i) => {
            const IconComponent = iconMap[v.iconName as keyof typeof iconMap];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 text-center transition-all hover:border-accent hover:luxury-shadow"
              >
                {IconComponent && (
                  <IconComponent
                    className="mx-auto text-accent transition-transform group-hover:scale-110"
                    size={32}
                    strokeWidth={1.5}
                  />
                )}
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-28 text-ivory">
        <div className="container-luxury grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display text-5xl text-accent md:text-6xl lg:text-7xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-ivory/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
