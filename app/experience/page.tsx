import { Metadata } from "next"
import ExperienceClient from "./experience-client"

export const metadata: Metadata = {
  title: "Experience & Education",
  description: "Discover my professional experience, internships, education, and projects as a Computer Science student.",
  keywords: ["experience", "education", "internships", "projects", "computer science"],
  openGraph: {
    title: "Experience & Education",
    description: "Discover my professional experience, internships, education, and projects as a Computer Science student.",
    type: "website",
  },
}

export default function ExperiencePage() {
  return <ExperienceClient />
}