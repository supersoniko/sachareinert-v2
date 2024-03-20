import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";
import { SectionLayout } from "@/app/(landing)/components/section-layout/section-layout";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  return (
    <SectionLayout
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-black/40 py-4"
    >
      <SectionTitle id="contact-heading">Contact</SectionTitle>
      <ContactForm />
    </SectionLayout>
  );
};
