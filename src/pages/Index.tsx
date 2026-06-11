import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { designs } from "@/data/portfolio";

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Benji Visuals — Graphic Designer</title>

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Graphic Designer & Visual Storyteller
            </p>
            <h1 className="heading-display text-5xl md:text-7xl leading-[1.1] mb-6">
              Designs that{" "}
              <span className="text-primary">speak louder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              I'm Benji — a graphic designer crafting bold posters, brand identities,
              and digital visuals that leave a lasting impression.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-heading font-semibold">
                <Link to="/portfolio">
                  View My Work <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-heading font-semibold">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {designs.slice(0, 4).map((d, i) => (
                <div
                  key={d.id}
                  className={`rounded-lg overflow-hidden ${
                    i % 3 === 0 ? "row-span-2" : ""
                  }`}
                >
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "auto"}
                    width={600}
                    height={600}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured work preview */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-display text-3xl md:text-4xl mb-12 text-center">
              Selected Work
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.slice(0, 6).map((d, i) => (
              <AnimatedSection key={d.id} delay={i * 0.08}>
                <Link to="/portfolio" className="group block">
                  <div className="rounded-lg overflow-hidden mb-3 aspect-square bg-muted">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={600}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
                    {d.category}
                  </p>
                  <h3 className="font-heading font-semibold">{d.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="font-heading">
              <Link to="/portfolio">
                View All Work <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;