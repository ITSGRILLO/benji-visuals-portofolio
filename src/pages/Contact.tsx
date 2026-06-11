import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h1 className="heading-display text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-lg mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="font-heading font-semibold w-full">
                {sending ? "Sending..." : <>Send Message <Send size={16} /></>}
              </Button>
            </form>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-primary shrink-0" />
                    Wote, Makueni, Kenya
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary shrink-0" />
                    jouavee@gmail.com
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary shrink-0" />
                    +254 715186185
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;