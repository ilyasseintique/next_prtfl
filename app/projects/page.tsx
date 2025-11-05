import { Metadata } from "next"
import ProjectsClient from "./projects-client"

export const metadata: Metadata = {
  title: "My Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies.",
  keywords: ["projects", "portfolio", "web development", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "My Projects",
    description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies.",
    type: "website",
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}