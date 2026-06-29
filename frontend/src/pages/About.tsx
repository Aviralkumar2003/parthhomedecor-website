import { motion } from "motion/react";
import { Gem, Sparkles, ShieldCheck, HeartHandshake, MapPin, Clock, Phone, Store } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { aboutValues, companyInfo } from "../data/siteData";

// Import real showroom images
import shopExteriorImg from "../assets/about/shop-exterior.png";
import counterImg from "../assets/about/counter.png";

const iconMap = { Gem, Sparkles, ShieldCheck, HeartHandshake };

const journeyMilestones = [
  {
    year: "The Beginning",
    title: "A Vision Takes Shape",
    desc: "Parth Home Decor was founded with a simple belief — every home deserves premium quality materials at honest prices. Starting as a modest interior materials supplier in Etawah, we set out to bridge the gap between metropolitan-quality products and small-city accessibility.",
  },
  {
    year: "Growth",
    title: "Expanding the Catalogue",
    desc: "As our reputation grew, so did our range. We added modular kitchen solutions, exterior elevation materials, and designer lighting — becoming a true one-stop destination for interior and exterior needs.",
  },
  {
    year: "Today",
    title: "A Trusted Name",
    desc: "Today, Parth Home Decor serves hundreds of architects, builders, interior designers, and homeowners across the region. Our multi-storey showroom on NH-19 stands as a testament to our commitment to quality and customer trust.",
  },
];

const brandPromises = [
  {
    icon: Store,
    title: "Curated Selection",
    desc: "Every product in our showroom is hand-picked from leading national and international brands. We stock only what we'd recommend for our own homes.",
  },
  {
    icon: MapPin,
    title: "Local Expertise, Global Standards",
    desc: "Based in Etawah, we bring metropolitan-grade products and installation expertise to Tier-2 and Tier-3 cities of Uttar Pradesh.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We understand that construction and renovation projects run on tight schedules. Our logistics ensure materials reach your site when you need them.",
  },
  {
    icon: Phone,
    title: "After-Sales Support",
    desc: "Our relationship doesn't end at the sale. We stand behind every product with guidance on maintenance, warranty support, and installation assistance.",
  },
];

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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-ivory/75 leading-relaxed"
          >
            From a single showroom on NH-19 in Etawah, we've grown into the region's most trusted name
            for premium interior and exterior solutions.
          </motion.p>
        </div>
      </section>

      {/* Story + Image Grid */}
      <section className="container-luxury py-28 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Company</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl">Parth Home Decor</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
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
              <p>
                Our multi-storey showroom on NH-19 Service Road near Bharthana Chauraha houses an
                extensive range of products — from PVC and WPC panels to modular kitchen hardware,
                from ACP cladding to designer chandeliers. Every product is displayed in context so
                you can envision it in your space before committing.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={shopExteriorImg}
                  alt="Parth Home Decor showroom building"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-xs uppercase tracking-[0.3em] text-accent">Showroom</span>
                  <p className="mt-1 font-display text-xl">Our Multi-Storey Showroom</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative overflow-hidden rounded-sm bg-navy grain-overlay flex flex-col justify-center items-center text-center p-10"
              >
                <div className="relative z-10">
                  <div className="font-display text-5xl text-accent">NH-19</div>
                  <p className="mt-3 text-sm text-ivory/80 leading-relaxed">
                    Service Road, Near Sai Cold Store<br />
                    Bharthana Chauraha, Etawah
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-accent/70">
                    Open 7 Days · 8 AM – 10 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-charcoal py-28 text-ivory">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Journey"
            title="From humble beginnings to regional trust."
            align="center"
          />
          <div className="mt-20 relative max-w-4xl mx-auto">
            {/* Central vertical line — desktop only */}
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

            <div className="space-y-12 lg:space-y-0">
              {journeyMilestones.map((m, i) => {
                const isRight = i % 2 === 1;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    className="relative grid lg:grid-cols-[1fr_auto_1fr] items-start lg:gap-0 pl-16 lg:pl-0"
                  >
                    {/* Content — left on even, right on odd */}
                    <div
                      className={`rounded-sm border border-ivory/8 bg-ivory/[0.03] p-8 backdrop-blur-sm ${
                        isRight ? "lg:order-3 lg:text-left" : "lg:order-1 lg:text-right"
                      }`}
                    >
                      <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                        {m.year}
                      </span>
                      <h3 className="mt-4 font-display text-2xl md:text-3xl">{m.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ivory/60 max-w-md inline-block">
                        {m.desc}
                      </p>
                    </div>

                    {/* Center number node */}
                    <div className="absolute left-0 lg:relative lg:order-2 flex flex-col items-center z-10 lg:px-6 pt-8">
                      <div className="w-12 h-12 rounded-full bg-charcoal border-2 border-accent flex items-center justify-center shadow-[0_0_20px_rgba(180,140,60,0.25)]">
                        <span className="font-display text-lg text-accent">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      {i < journeyMilestones.length - 1 && (
                        <div className="w-px h-12 bg-accent/20 lg:hidden mt-1" />
                      )}
                    </div>

                    {/* Empty spacer for the opposite side */}
                    <div className={`hidden lg:block ${isRight ? "lg:order-1" : "lg:order-3"}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Vision / Mission */}
      <section className="bg-secondary/50 py-24">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Vision & Mission"
            align="center"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Our Vision",
                body: "To be the most trusted name for home and commercial interiors in the region — delivering modern, elegant, and durable solutions that elevate every space we touch. We envision a future where premium design is accessible to every homeowner, regardless of city or budget.",
              },
              {
                title: "Our Mission",
                body: "To provide high-quality products, expert guidance, and exceptional customer satisfaction at every step. We are committed to curating the finest materials from leading brands, offering transparent pricing, ensuring timely delivery, and building long-lasting relationships with our clients.",
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
        </div>
      </section>

      {/* Showroom Experience */}
      <section className="container-luxury py-28">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={counterImg}
                alt="Parth Home Decor showroom interior and consultation counter"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 border border-accent/10 rounded-sm pointer-events-none" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The Showroom</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">
              Walk in. Get inspired. Walk out with a vision.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Our showroom isn't just a product display — it's a design experience. Every panel,
                tile, and lighting fixture is showcased in real-world settings, so you can see exactly
                how it will transform your space.
              </p>
              <p>
                Our dedicated consultation counter is where ideas take shape. Our experienced team sits
                with you, understands your requirements, suggests the best materials within your budget,
                and helps you visualise the final result — all before you place a single order.
              </p>
              <p>
                Whether you're an architect specifying materials for a new project, or a homeowner
                renovating a single room, you'll receive the same personalised attention and expert guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Promises */}
      <section className="bg-navy py-28 text-ivory">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Promise"
            title="What you can always expect from us."
            align="center"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {brandPromises.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group rounded-sm border border-ivory/10 bg-ivory/5 p-8 text-center transition-all hover:border-accent/40 hover:bg-ivory/8"
                >
                  <Icon
                    className="mx-auto text-accent transition-transform group-hover:scale-110"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
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

      {/* Why Choose Us / CTA */}
      <section className="bg-secondary/50 py-24">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">
                One destination. Complete solutions.
              </h2>
              <ul className="space-y-4">
                {[
                  "500+ premium products across interior, exterior, modular & lighting categories",
                  "Trusted by architects, builders, and homeowners across the region",
                  "Expert guidance from consultation to installation",
                  "Special discounts for defence personnel",
                  "Open 7 days a week — 8 AM to 10 PM",
                  "Conveniently located on NH-19 Service Road, Etawah",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-sm border border-border bg-card p-10 space-y-8"
            >
              <h3 className="font-display text-2xl md:text-3xl">Visit Our Showroom</h3>
              <div className="space-y-5 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-accent flex-shrink-0" size={20} strokeWidth={1.5} />
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="mt-1 text-sm leading-relaxed">{companyInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-accent flex-shrink-0" size={20} strokeWidth={1.5} />
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="mt-1 text-sm">Monday – Sunday: 8:00 AM – 10:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-accent flex-shrink-0" size={20} strokeWidth={1.5} />
                  <div>
                    <div className="font-medium text-foreground">Contact</div>
                    <div className="mt-1 text-sm">{companyInfo.phone}</div>
                  </div>
                </div>
              </div>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-sm font-medium text-sm uppercase tracking-[0.15em] transition-all hover:opacity-90 hover:luxury-shadow"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
