import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logoAsset from "../assets/parth-logo.png";
import { companyInfo } from "../data/siteData";

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-32 overflow-hidden bg-gradient-luxe text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] grain-overlay" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-deep/10 blur-3xl" />

      <div className="container-luxury relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Parth Home Decor"
              className="h-16 w-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
            />
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
            Premium interior &amp; exterior materials, modular solutions and designer lighting —
            crafted for timeless spaces.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: companyInfo.instagramUrl },
              { Icon: Facebook, href: companyInfo.facebookUrl },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ivory/20 p-2.5 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-ivory/50">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              // { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-ivory/50">Categories</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li>Interior Designing to Execution</li>
            <li>Modular Furniture and Kitchen</li>
            <li>Exterior Elevation</li>
            <li>Designer Lighting</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-ivory/50">Visit</h4>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{companyInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <a href={`tel:${companyInfo.phone}`} className="hover:text-accent transition-colors">
                {companyInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-accent transition-colors break-all"
              >
                {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-luxury flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.2em] text-ivory/40 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Parth Home Decor. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
