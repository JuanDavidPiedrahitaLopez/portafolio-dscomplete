import ContactForm from "@/components/contact/contact";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${siteConfig.name}.`,
};

export default function ContactPage() {
  return <ContactForm />;
}
