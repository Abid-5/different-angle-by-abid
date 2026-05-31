import { Facebook, Github, Mail, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { ScrollReveal } from "../components/ScrollReveal";
import { SmoothPageTransition } from "../components/SmoothPageTransition";

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function Contact() {
  useDocumentTitle("Contact");
  return (
    <SmoothPageTransition>
      <section className="section-shell grid gap-12 pb-24 pt-32 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <ScrollReveal>
          <p className="eyeline">Contact</p>
          <h1 className="section-title mt-5">Want to collaborate, buy a print, use a photo, or just talk about photography?</h1>
          <p className="muted-copy mt-6">
            Send a note through the form or use one of the links below. The form
            shows a local success state for now and can be connected to a backend
            later.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="mailto:abidshahriar1294@gmail.com" className="gold-button">
              <Mail size={17} aria-hidden="true" /> Email Me
            </a>
            <a
              href="https://www.facebook.com/share/14d6NZifkbB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
            >
              <Facebook size={17} aria-hidden="true" /> View Facebook Page
            </a>
            <a
              href="https://wa.me/8801761216142"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
            >
              <Phone size={17} aria-hidden="true" /> WhatsApp
            </a>
            <a href="https://github.com/" className="ghost-button">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <ContactForm />
        </ScrollReveal>
      </section>
    </SmoothPageTransition>
  );
}
