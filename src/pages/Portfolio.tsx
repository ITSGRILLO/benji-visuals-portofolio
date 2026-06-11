import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { designs, categories, type DesignWork, type Category } from "@/data/portfolio";

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<DesignWork | null>(null);

  const filtered = active === "All" ? designs : designs.filter((d) => d.category === active);

  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  const renderCard = (d: DesignWork, colIndex: number) => (
    <motion.div
      key={d.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelected(d)}
      className="cursor-pointer group mb-4"
    >
      <div className="rounded-lg overflow-hidden bg-muted">
        <img
          src={d.image}
          alt={d.title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          width={800}
          height={800}
        />
      </div>
      <div className="mt-2">
        <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
          {d.category}
        </p>
        <h3 className="font-heading font-semibold">{d.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{d.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="heading-display text-4xl md:text-5xl mb-4">Portfolio</h1>
          <p className="text-muted-foreground max-w-lg mb-10">
            A curated selection of my recent design work across branding, print, and digital.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="flex gap-4">
          <div className="flex-1">{col1.map((d, i) => renderCard(d, i))}</div>
          <div className="flex-1">{col2.map((d, i) => renderCard(d, i))}</div>
          <div className="flex-1 hidden lg:block">{col3.map((d, i) => renderCard(d, i))}</div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background rounded-xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain bg-black"
                  loading="eager"
                  decoding="async"
                  width={1200}
                  height={1200}
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur rounded-full p-2 hover:bg-background transition"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
                  {selected.category}
                </p>
                <h2 className="font-heading text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="text-muted-foreground">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;