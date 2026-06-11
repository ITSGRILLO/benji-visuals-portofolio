import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Canva", level: 85 },
  { name: "Adobe Illustrator", level: 40 },
  { name: "Figma", level: 40 },
  { name: "Adobe InDesign", level: 10 },
  { name: "After Effects", level: 10 },
];

const experience = [
  {
    period: "2024 — Present",
    role: "Freelance Graphic Designer",
    company: "Benji Visuals",
    desc: "Built a freelance practice serving local businesses, churches, and startups across Kenya.",
  },
];

const About = () => (
  <section className="pt-24 pb-16 px-6 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          {/* Profile photo — drop your photo in public/ and update the src */}
          <img
            src="/profile.jpeg"
            alt="Benjamin"
           className="w-36 h-36 rounded-full object-cover object-top shrink-0 border-4 border-primary"
          />
          <div>
            <h1 className="heading-display text-4xl md:text-5xl mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              I'm Benjamin — a graphic designer with over 1 year of experience crafting visual
              identities that resonate. I believe great design is invisible: it communicates
              clearly, evokes emotion, and drives results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Based in Wote, Makueni, Kenya. When I'm not pushing pixels, you'll find me
              exploring typography, following football, or working on my next creative brief.
            </p>
            <Button asChild size="lg" className="font-heading font-semibold">
              <a href="/Benjamin_CV.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection>
        <h2 className="heading-display text-2xl mb-8">Skills</h2>
        <div className="grid gap-5 mb-16">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection>
        <h2 className="heading-display text-2xl mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.period} className="border-l-2 border-primary pl-6 relative">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
                {exp.period}
              </p>
              <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
              <p className="text-muted-foreground text-sm">{exp.company}</p>
              <p className="text-muted-foreground text-sm mt-1">{exp.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection className="mt-16">
        <h2 className="heading-display text-2xl mb-8">Education</h2>
        <div className="border-l-2 border-accent pl-6 relative">
          <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
          <p className="text-xs uppercase tracking-wider text-accent font-medium mb-1">
            2023 — Present
          </p>
          <h3 className="font-heading font-semibold text-lg">
            Diploma in Information Communication and Technology
          </h3>
          <p className="text-muted-foreground text-sm">Wote Technical Training Institute, Makueni, Kenya</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default About;