import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoAsset from "../assets/parth-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-ivory/85 backdrop-blur-xl border-b border-gold/25 shadow-[0_12px_40px_-18px_rgba(13,25,55,0.25)]"
            : "bg-gradient-to-b from-ivory/40 via-ivory/15 to-transparent backdrop-blur-md"
        }`}
      >
        <nav className="container-luxury flex h-16 items-center justify-between md:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              src={logoAsset}
              alt="Parth Home Decor"
              className="h-10 w-auto md:h-12 lg:h-14 drop-shadow-[0_4px_12px_rgba(13,25,55,0.18)]"
            />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[1.35rem] font-medium text-navy-deep">Parth</span>
              <span className="mt-0.5 text-[9px] uppercase tracking-[0.42em] text-gold-deep">
                Home Decor
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `group relative block px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                      isActive ? "text-navy-deep" : "text-navy-deep/70"
                    }`
                  }
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-gold/40 bg-ivory/80 p-2.5 text-navy-deep backdrop-blur md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/20 bg-ivory/97 backdrop-blur-xl md:hidden"
          >
            <ul className="container-luxury flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-gold/15 py-4 text-navy-deep"
                  >
                    <span className="font-display text-2xl">{l.label}</span>
                    <span className="font-script text-sm text-gold-deep">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
