import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceImageCarouselProps {
  images: string[];
  alt: string;
  /** Auto-advance interval in ms (default 4000) */
  interval?: number;
}

export function ServiceImageCarousel({
  images,
  alt,
  interval = 4000,
}: ServiceImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = images.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setCurrent(((next % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      next();
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, interval]);

  // Slide variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="group relative w-full overflow-hidden rounded-sm aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} — photo ${current + 1}`}
          loading="lazy"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.35 },
          }}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      {/* Nav arrows — visible on hover */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-3 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/50 text-ivory/90 backdrop-blur-sm transition-all hover:bg-charcoal/75 hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/50 text-ivory/90 backdrop-blur-sm transition-all hover:bg-charcoal/75 hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0.5 }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx, idx > current ? 1 : -1)}
            aria-label={`Go to image ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-6 bg-ivory"
                : "w-1.5 bg-ivory/50 hover:bg-ivory/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
