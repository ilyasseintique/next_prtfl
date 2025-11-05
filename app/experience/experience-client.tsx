"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, ExternalLink, GraduationCap, Briefcase, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ExperienceClient() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Frontend Developer Intern",
      company: "Tech Startup Inc.",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement user interfaces and improved website performance by 30%. Worked on component library and documentation.",
      achievements: [
        "Built 5+ React components for the company's design system",
        "Reduced bundle size by 25% through code optimization",
        "Mentored 2 junior developers during the internship"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"],
      current: false
    },
    {
      id: 2,
      type: "work",
      title: "Web Development Volunteer",
      company: "Local Non-Profit Organization",
      location: "City, State",
      period: "Jan 2024 - May 2024",
      description: "Redesigned and developed a new website for a local charity organization. Managed project timeline and collaborated with stakeholders to gather requirements and deliver solutions.",
      achievements: [
        "Increased website traffic by 40% with improved SEO",
        "Created content management system for easy updates",
        "Trained staff on website maintenance"
      ],
      technologies: ["Next.js", "JavaScript", "CSS", "WordPress", "SEO"],
      current: false
    },
    {
      id: 3,
      type: "project",
      title: "Full-Stack Development Project",
      company: "University Course Project",
      location: "University Name",
      period: "Sep 2023 - Dec 2023",
      description: "Led a team of 4 students to build a complete web application for course project. Implemented user authentication, database design, and responsive frontend with modern technologies.",
      achievements: [
        "Delivered project 2 weeks ahead of schedule",
        "Achieved highest grade in the class (A+)",
        "Presented solution to industry professionals"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      current: false
    },
    {
      id: 4,
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      location: "City, State",
      period: "Aug 2022 - May 2026 (Expected)",
      description: "Pursuing a comprehensive computer science education with focus on software development, algorithms, and data structures. Active in programming clubs and hackathons.",
      achievements: [
        "Current GPA: 3.8/4.0",
        "Dean's List for 3 consecutive semesters",
        "President of Computer Science Club"
      ],
      technologies: ["Python", "Java", "C++", "SQL", "Data Structures"],
      current: true
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5" />
      case "education":
        return <GraduationCap className="h-5 w-5" />
      case "project":
        return <Award className="h-5 w-5" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return "text-blue-600"
      case "education":
        return "text-green-600"
      case "project":
        return "text-purple-600"
      default:
        return "text-blue-600"
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "education":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
        <h1 className="text-4xl font-bold">Experience & Education</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My journey as a computer science student and aspiring developer.
          Here's where I've worked, learned, and grown.
        </p>
      </motion.section>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-6"
            >
              {/* Timeline dot */}
              <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-background shadow-lg ${getIconColor(experience.type)}`}>
                {getIcon(experience.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div className="space-y-2">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{experience.title}</span>
                          {experience.current && (
                            <Badge variant="secondary" className="text-xs">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <Badge className={getBadgeColor(experience.type)}>
                        {experience.type === "work" ? "Work" : experience.type === "education" ? "Education" : "Project"}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{experience.description}</p>

                    {experience.achievements && (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 bg-muted/50 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold">Ready for New Opportunities</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          I'm always looking for new challenges and opportunities to grow as a developer.
          Let's connect and discuss how I can contribute to your team!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Resume
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </motion.section>
    </div>
  )
}