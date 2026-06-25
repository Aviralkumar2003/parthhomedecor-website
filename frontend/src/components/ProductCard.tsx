import { motion } from "motion/react";

export interface Product {
  name: string;
  category: string;
  image: string;
  description: string;
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-sm bg-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal">
          {product.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
          <h3 className="font-display text-xl md:text-2xl">{product.name}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {product.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
