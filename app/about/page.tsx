import { Metadata } from "next"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, education, skills, and interests as a Computer Science student and web developer.",
  keywords: ["about", "computer science", "web developer", "skills", "education"],
  openGraph: {
    title: "About Me",
    description: "Learn more about my background, education, skills, and interests as a Computer Science student and web developer.",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutClient />
}