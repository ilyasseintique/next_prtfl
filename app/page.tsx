"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                👋 Welcome to my portfolio
              </Badge>
            </motion.div>

            {/* Name and Title */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Computer Science Student & Web Developer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Passionate about creating innovative digital solutions and exploring
              the latest technologies. Currently studying Computer Science and
              building projects with React, Next.js, and TypeScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:your.email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Tech Stack</h2>
              <p className="text-muted-foreground">
                Technologies I work with
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python",
                "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS", "Git"
              ].map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
