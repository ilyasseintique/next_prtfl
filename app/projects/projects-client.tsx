"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsClient() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization, inventory management, and responsive design.",
      image: "/project-1.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      featured: true,
      date: "2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, message history, and responsive design. Built with modern web technologies and OpenAI API.",
      image: "/project-2.jpg",
      tags: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
      liveUrl: "https://ai-chat-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ai-chat-app",
      featured: true,
      date: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Beautiful weather application with 7-day forecasts, location search, and detailed weather metrics. Features smooth animations and dark mode support.",
      image: "/project-3.jpg",
      tags: ["Vue.js", "JavaScript", "Weather API", "CSS3", "PWA"],
      liveUrl: "https://weather-app-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/weather-app",
      featured: false,
      date: "2023",
      status: "Completed"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, team collaboration, and deadline tracking. Built for my software engineering course.",
      image: "/project-4.jpg",
      tags: ["Python", "Django", "SQLite", "Bootstrap", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/yourusername/task-manager",
      featured: false,
      date: "2023",
      status: "Completed"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my projects and skills. Features modern design, dark mode, and smooth animations built with Next.js.",
      image: "/project-5.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: false,
      date: "2024",
      status: "Completed"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Full-stack web application for online learning with course management, video streaming, and progress tracking. Currently in development.",
      image: "/project-6.jpg",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      liveUrl: null,
      githubUrl: "https://github.com/yourusername/lms",
      featured: true,
      date: "2024",
      status: "In Progress"
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I've built while learning and practicing
          software development. Each project represents a step in my journey
          as a developer.
        </p>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <h2 className="text-2xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <div className="text-4xl opacity-50">🚀</div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="flex items-center space-x-2">
                        <span>{project.title}</span>
                        <Badge variant={project.status === "Completed" ? "secondary" : "outline"}>
                          {project.status}
                        </Badge>
                      </CardTitle>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="space-x-2">
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Other Projects */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold">Other Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-32 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                  <div className="text-2xl opacity-50">💻</div>
                </div>
                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{project.title}</span>
                      <Badge variant="outline" className="text-xs">
                        {project.date}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 space-x-2">
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 bg-muted/50 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold">Interested in Working Together?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          I'm always excited to work on new projects and collaborate with others.
          Let's build something amazing together!
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </motion.section>
    </div>
  )
}