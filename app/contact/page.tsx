import { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me for collaboration opportunities, project discussions, or just to say hello. I'd love to hear from you!",
  keywords: ["contact", "collaboration", "hire", "projects", "developer"],
  openGraph: {
    title: "Contact Me",
    description: "Get in touch with me for collaboration opportunities, project discussions, or just to say hello. I'd love to hear from you!",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactClient />
}