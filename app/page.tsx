"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Anoki AI",
      location: "Mountain View, CA",
      period: "June 2025 - Present",
      logo: "/logos/anoki-logo.png",
      description: ["Incoming SWE Intern Summer 2025"],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "University of Maryland, College Park",
      location: "College Park, MD",
      period: "Jan 2025 - Jun 2025",
      logo: "/logos/umiacs-logo.png",
      description: [
        "Collaborating with Dr. Naomi Feldman and graduate fellow Imani Finkley to propose a framework for assessing novelty in LLM-generated literature.",
        "Constructing a 200K-item dataset of LLM-generated literature to support large-scale analysis.",
        "Performing data analysis and fine-tuning models (OPT-175b, BERT) using NLP to study how prompt complexity impacts originality, hypothesizing that detailed prompts enhance novelty but overly detailed ones can reduce it.",
        "Leveraging the Creativity Index and n-gram sequencing to evaluate thematic diversity and originality in LLM-generated text for AI ethics and IP research.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hack4Impact-UMD",
      location: "College Park, MD",
      period: "Sep 2024 - Present",
      logo: "/logos/hack4impact-logo.png",
      description: [
        "Worked on a team to build a photo-sharing and scheduling platform for Camp Starfish, a nonprofit camp supporting youth with social-emotional challenges through a 1:1 staff-to-camper model.",
        "Built Firestore helper functions for employees, albums, and campers to safely handle multi-step database operations like creating, updating, and querying by ID, UID, or email, ensuring data consistency when multiple records must be changed together.",
        "Developed a responsive Login page with secure Google Authentication using Firebase, styled with Tailwind CSS, including dynamic error messaging for failed sign-ins and a fallback link for unregistered users.",
        "The system now supports over 1,500 photos and 300 camper records each summer, used by 60+ staff to securely manage media and streamline camper scheduling.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Karya",
      location: "",
      period: "Aug 2024 - May 2025",
      logo: "/logos/karya-logo.png",
      description: [
        "Developed Kalai, a Natural Language Query Dashboard using Google Gemini and LangChain SQL agents to process plain English queries and return SQL responses, enabling users to retrieve data from Karya's datasets.",
        "Implemented a role-based access control (RBAC) system to enforce dataset permissions, ensuring secure and restricted access to sensitive data.",
        "Optimized backend SQL query execution with caching mechanisms in an SQLite database to enhance performance.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Decision Factories",
      location: "",
      period: "May 2024 - Aug 2024",
      logo: "/placeholder.svg?height=64&width=64",
      description: [
        "Built an LLM-powered web application that transforms high-level use case descriptions into detailed specifications and executable flows, facilitating business feedback.",
        "From a high-level description of a use case, generate a detailed specification, a flowchart, and an executable flow that can be validated through interactively simulating various test scenarios.",
        "Developed the MVP using React.js and Node.js, integrating TLDraw for dynamic flowchart generation, RESTful APIs for backend communication, and Claude for generating executable code in an infinite canvas UI.",
      ],
    },
  ]

  const projects = [
    {
      title: "EcoNavix",
      category: "MACHINE LEARNING",
      description: "An environmental navigation system using machine learning to optimize eco-friendly routes",
      technologies: ["Python", "Flask", "React.js"],
      icon: "☁️",
      github: "#",
      demo: "#",
    },
    {
      title: "LiveReqs",
      category: "SOFTWARE DEVELOPMENT",
      description: "Real-time requirements management platform with interactive flowchart generation",
      technologies: ["React.js", "Node.js", "RESTful APIs", "TLDraw"],
      icon: "👥",
      github: "#",
      demo: "#",
    },
    {
      title: "WAR Prediction",
      category: "MACHINE LEARNING",
      description: "Machine learning model to predict Wins Above Replacement (WAR) in baseball analytics",
      technologies: ["Python", "scikit-learn"],
      icon: "⚾",
      github: "#",
      demo: "#",
    },
    {
      title: "How To Get A Good Whiff",
      category: "SPORTS ANALYTICS",
      description: "Statistical analysis of baseball swing mechanics and strike zone optimization",
      technologies: ["R", "ggplot2", "dplyr"],
      icon: "🏟️",
      github: "#",
      demo: "#",
    },
    {
      title: "Anti Refugee Sentiment Analysis",
      category: "MACHINE LEARNING",
      description: "NLP analysis of social media sentiment regarding refugee policies and public opinion",
      technologies: ["NLP", "Python", "scikit-learn"],
      icon: "🐦",
      github: "#",
      demo: "#",
    },
  ]

  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📝" },
    { name: "Linux", icon: "🐧" },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-300 hover:text-blue-300 hover:bg-blue-600/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hello! I'm <span className="text-blue-300">Tej</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              I'm a Computer Science student and Software Engineer passionate about developing innovative software
              solutions. I focus on leveraging modern technologies to solve complex problems across various industries.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-blue-300 mb-8">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">San Francisco, CA</span>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600/30 shadow-2xl">
                <img src="/placeholder.svg?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-600/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            <span className="text-blue-300">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex items-center justify-center">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white font-semibold">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-300 font-medium">{exp.company}</CardDescription>
                      <div className="flex items-center space-x-4 mt-2 text-gray-400">
                        {exp.location && (
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        )}
                        {exp.period && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start leading-relaxed">
                        <span className="text-blue-300 mr-3 mt-1">•</span>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            <span className="text-blue-300">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-blue-300 hover:text-blue-300">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-blue-300 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-blue-300 border-blue-600/30 w-fit font-medium">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-light leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-600/10 text-blue-300 font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            <span className="text-blue-300">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-white font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="text-blue-300">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-600/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="font-light">&copy; 2025 Tej. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
