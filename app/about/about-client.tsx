"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function AboutClient() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL & Databases", level: 70 },
    { name: "AWS & Cloud Services", level: 65 },
  ]

  const interests = [
    "🚀 Web Development", "🤖 Machine Learning", "📱 Mobile Apps",
    "🎮 Game Development", "🏃‍♂️ Running", "📚 Reading",
    "🎵 Music", "✈️ Travel", "📸 Photography"
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <Avatar className="h-32 w-32 mx-auto">
          <AvatarImage src="/profile-photo.webp" alt="Profile photo" />
          <AvatarFallback className="text-2xl">YN</AvatarFallback>
        </Avatar> 

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Computer Science student with a love for creating
            innovative web applications and exploring cutting-edge technologies.
          </p>
        </div>
        <a href="/mon-cv.pdf">
          <Button size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button> 
        </a>
        
      </motion.section>

      {/* Bio & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Biography */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>My Story</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Hello! I'm a dedicated Computer Science student currently pursuing my
                Bachelor's degree with a focus on web development and software engineering.
                My journey into programming started during high school when I built my
                first website.
              </p>
              <p className="text-muted-foreground">
                Since then, I've been passionate about creating digital solutions that
                make a difference. I enjoy working with modern web technologies,
                particularly React and Next.js, and I'm always eager to learn new
                frameworks and tools.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me contributing to open-source projects,
                reading tech blogs, or exploring the great outdoors. I believe in
                continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University Name</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>City, State</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>GPA:</strong> 3.8/4.0 • <strong>Relevant Coursework:</strong> Data Structures,
                  Algorithms, Web Development, Database Systems, Software Engineering
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">High School Diploma</h3>
                <p className="text-muted-foreground">High School Name</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2018 - 2022</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>City, State</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Honors:</strong> Valedictorian, National Honor Society,
                  Computer Science Club President
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Interests */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
          <p className="text-muted-foreground">
            What I enjoy doing in my free time
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {interest}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}