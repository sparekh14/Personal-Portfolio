"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar } from "lucide-react"

export default function Portfolio() {
  // Add typewriter effect with proper delete/retype animation
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const roles = ["Software Engineer", "Problem-Solver", "Full-Stack Developer", "Critical Thinker"]
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.substring(0, displayText.length + 1))
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentRole.substring(0, displayText.length - 1))
          } else {
            // Finished deleting, move to next role
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 80,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 150

      // Check if we're near the bottom of the page (contact section)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100

      if (isNearBottom) {
        setActiveSection("contact")
        return
      }

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
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "StoneX",
      location: "New York, NY",
      period: "June 2025 - August 2025",
      logo: "/logos/stonex-logo.png",
      website: "https://www.stonex.com/en/",
      description: [
        "Enhancing REST APIs to integrate with external applications, eliminating 40\% of post data-ingestion field updates, reducing significant manual work and ensuring seamless and accurate data access across the entire CRM platform",
        "Developing an Outlook automation support tool utilizing Power Automate and a custom text classification model that automates classification and triage of Outlook support emails, reducing manual ticket handling by 65\%"
      ],
    },
    {
      title: "Quantum Machine Learning Engineer",
      company: "IonQ",
      location: "College Park, MD",
      period: "Jan 2025 - May 2025",
      logo: "/logos/ionq-logo.png",
      website: "https://ionq.com/",
      description: [
        "Developed hybrid quantum-classical machine learning algorithms for image classification by leveraging IonQ’s Aria and ForteQPUs to compare the efficiency of classical and quantum models on the MNIST dataset",
        "Optimized feature reduction techniques for quantum machine learning, enabling improved performance of quantum support vector machines and generative adversarial networks on resource-limited quantum processors",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "US Food and Drug Administration",
      location: "College Park, MD",
      period: "June 2024 - May 2025",
      logo: "/logos/fda-logo.png",
      website: "https://jifsan.umd.edu/news/view/102",
      description: [
        "Designed and implemented a Python/Dash synthetic-data generator to aid in streamlining the data generation and testing process, reducing manual test-data prep time by 30%",
        "Authored detailed system and API documentation for global engineering teams of an open-source tool to enable global agencies to address traceability concerns, achieving a reduction in manual labor across 10+ international organizations",
        "Presented a poster to 200+ people at the FDA Foods Program Regulatory Science Conference to highlight the current effort and innovative approach in enhancing global traceability efforts through open-source collaboration",
      ],
    },
    {
      title: "Software Engineer",
      company: "Warriors Legacy Care",
      location: "College Park, MD",
      period: "Sep 2024 - Dec 2024",
      logo: "/logos/wlc-logo.png",
      website: "https://warriorslegacycare.com/",
      description: [
        "Led a 10-member team of engineers in developing a fullstack React Native mobile application to provide essential services to veterans, including care facilities, mental health services, and veteran messaging helping achieve \$5 million in investments",
        "Built an AI-powered resume reviewer that analyzes uploaded resumes using Google Gemini, provides tailored suggestions, and recommends roles based on user profiles, integrated with a web scraper for real-time job postings",
        "Integrated WebSockets and Geolocation to provide real-time location, user messaging, and enabling dynamic service provider mapping and appointment scheduling via RESTful APIs",
      ],
    }
  ]

  const projects = [
    {
      title: "Matchrimoney",
      category: "FULL STACK",
      description:
        "A full-stack web platform helping couples share wedding vendor costs through intelligent matching and group buying, targeting the \$70B+ US wedding market",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      icon: "💍",
      demo: "https://github.com/sparekh14/Matchrimoney",
    },
    {
      title: "EcoNavix",
      category: "AI",
      description:
        "AI-driven platform that optimizes supply chain routes using real-time environmental and traffic data, reducing carbon emissions by up to 35% while improving logistical efficiency.",
      technologies: ["Python", "Flask", "React.js"],
      icon: "🌍",
      demo: "https://www.youtube.com/watch?v=j-Y0KCmyz50",
    },
    {
      title: "Digits 2.0",
      category: "FULL STACK",
      description:
        "An AI-enhanced numerical puzzle game where players strategically combine numbers via arithmetic to reach a target value, featuring an interactive tile interface, dynamic scoring, and Gemini-powered hints.",
      technologies: ["React.js", "Node.js", "Tailwind CSS", "TypeScript", "Gemini"],
      icon: "🔢",
      demo: "https://studio--number-cruncher-44jel.us-central1.hosted.app/",
    },
    {
      title: "SmartCards.AI",
      category: "AI",
      description:
        "AI-powered flashcard platform that dynamically generates study content based on user input, with support for real-time user analytics, authentication, and subscription access",
      technologies: ["Next.js", "OpenAI", "Firebase", "Clerk.js", "Stripe"],
      icon: "💡",
      demo: "https://github.com/sparekh14/AI-Flashcards?tab=readme-ov-file",
    },
    {
      title: "MyMoneyTracker",
      category: "FULL STACK",
      description:
        "Full-stack financial tracker for managing personal transactions with CRUD operations and optimized backend performance for smooth data handling and retrieval",
      technologies: ["React.js", "Express", "MongoDB", "Node.js"],
      icon: "💰",
      demo: "https://github.com/sparekh14/My-Money-Tracker",
    },
    {
      title: "MyPA",
      category: "FULL STACK",
      description:
        "Voice-activated personal assistant with 10+ interactive features including text-to-speech and web scraping, designed to boost user productivity and simplify task execution",
      technologies: ["Python"],
      icon: "🤖",
      demo: "https://github.com/sparekh14/Hackathons/tree/main/HackDefy",
    }
  ]

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "/logos/skills/python-logo.png" },
        { name: "Java", icon: "/logos/skills/java-logo.png" },
        { name: "Apex", icon: "/logos/skills/apex-logo.png" },
        { name: "TypeScript + JavaScript", icon: "/logos/skills/ts-js-logo.png" },
        { name: "HTML/CSS", icon: "/logos/skills/html-css-logo.png" },
        { name: "C", icon: "/logos/skills/c-logo.png" },
        { name: "MATLAB", icon: "/logos/skills/matlab-logo.png" },
        { name: "SQL", icon: "/logos/skills/sql-logo.png" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React + React Native", icon: "/logos/skills/react-reactnative-logo.png" },
        { name: "Node.js", icon: "/logos/skills/nodejs-logo.png" },
        { name: "Express.js", icon: "/logos/skills/expressjs-logo.png" },
        { name: "Spring Boot", icon: "/logos/skills/springboot-logo.png" },
        { name: "Stripe", icon: "/logos/skills/stripe-logo.png" },
        { name: "Clerk.js", icon: "/logos/skills/clerkjs-logo.png" },
        { name: "JUnit", icon: "/logos/skills/junit-logo.png" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "AWS", icon: "/logos/skills/aws-logo.png" },
        { name: "Salesforce", icon: "/logos/skills/salesforce-logo.png" },
        { name: "Git", icon: "/logos/skills/git-logo.png" },
        { name: "GitHub", icon: "/logos/skills/github-logo.png" },
        { name: "Postman", icon: "/logos/skills/postman-logo.png" },
        { name: "Firebase", icon: "/logos/skills/firebase-logo.png" },
        { name: "MongoDB", icon: "/logos/skills/mongodb-logo.png" },
        { name: "MySQL", icon: "/logos/skills/mysql-logo.png" },
        { name: "PostgreSQL", icon: "/logos/skills/postgresql-logo.png" },
        { name: "Google Suite", icon: "/logos/skills/google-suite-logo.png" },
        { name: "Microsoft Platforms", icon: "/logos/skills/microsoft-platforms-logo.png" },
        { name: "Jira", icon: "/logos/skills/jira-logo.png" },
        { name: "Linux", icon: "/logos/skills/linux-logo.png" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-8 py-2 sm:py-3 md:py-4 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 ${
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
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 tracking-tight">
              Nice to meet you! <span className="inline-block animate-pulse">👋</span>
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-heading">
              <span className="text-white hover:bg-gradient-to-r hover:from-green-400 hover:via-teal-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 cursor-default">
                I'm Samarth
              </span>
            </h1>
            {/* Fixed height container for typewriter to prevent layout shifts and overflow */}
            <div className="h-16 sm:h-20 md:h-24 mb-8 flex items-center justify-center lg:justify-start overflow-hidden">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center max-w-full">
                <span className="mr-2 flex-shrink-0">I'm a</span>
                <div className="relative inline-block min-w-0 flex-1">
                  <span className="text-[#6BB6FF] whitespace-nowrap block overflow-hidden text-ellipsis">
                    {displayText}
                    <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 bg-[#6BB6FF] ml-1 animate-pulse"></span>
                  </span>
                  {/* Invisible text to reserve space for longest text */}
                  <span className="absolute top-0 left-0 text-transparent pointer-events-none whitespace-nowrap opacity-0">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full font-heading text-sm md:text-base flex items-center transition-all duration-300 border border-gray-700 hover:border-gray-600 min-w-[180px] justify-center"
              >
                Contact me here <span className="ml-2">→</span>
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/samarth-parekh/", "_blank")}
                  className="bg-white hover:bg-gray-100 p-3 rounded-full transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={() => window.open("https://github.com/sparekh14", "_blank")}
                  className="bg-white hover:bg-gray-100 p-3 rounded-full transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2 lg:col-span-1">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Samarth Parekh"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 5%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight font-heading">
            <span className="text-blue-300">About</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
            I am a Computer Science student at the University of Maryland with a strong interest in building impactful software
            that solves real-world problems. My work blends artificial intelligence and full-stack development, with a
            growing focus on Generative AI. Currently, I am a <span className="font-semibold">Software Engineering Intern</span> at{" "}
            the <span className="font-semibold">StoneX Group</span>, where I am utilizing Salesforce and Apex to develop a robust CRM solution.{" "}
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
            <span className="italic">Outside of tech</span>, I enjoy playing soccer, going to the gym, hanging out with friends, and reading novels. I am also a huge fan of movies and love discovering plots that stay with me.
          </p>
            <div className="flex items-center justify-center space-x-2 text-blue-300">
              <MapPin className="w-5 h-5" />
              <span className="font-medium text-base">New York, NY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight font-heading">
            <span className="text-blue-300">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300"
              >
                <CardHeader className="p-6">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        style={exp.company === "Decision Factories" ? { filter: "brightness(0) invert(1)" } : {}}
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <CardTitle className="text-xl text-white font-semibold font-heading mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-300 font-medium font-heading text-base mb-3">
                        {exp.website ? (
                          <button
                            onClick={() => window.open(exp.website, "_blank")}
                            className="hover:text-blue-200 transition-colors cursor-pointer underline decoration-transparent hover:decoration-blue-300"
                          >
                            {exp.company}
                          </button>
                        ) : (
                          exp.company
                        )}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                        {exp.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        )}
                        {exp.period && (
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start leading-relaxed text-base">
                        <span className="text-blue-300 mr-3 mt-1 flex-shrink-0">•</span>
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
      <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight font-heading">
            <span className="text-blue-300">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group h-full"
              >
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-blue-300 hover:text-blue-300 p-2"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-blue-300 border-blue-600/30 w-fit font-medium text-sm mb-3">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors font-semibold font-heading mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-light leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-600/10 text-blue-300 font-medium text-xs">
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
      <section id="skills" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight font-heading">
            <span className="text-blue-300">Skills</span>
          </h2>
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center font-heading">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-4 text-center">
                        {typeof skill.icon === "string" && skill.icon.startsWith("/") ? (
                          <div className="h-16 w-16 mx-auto flex items-center justify-center mb-3 p-1">
                            <img
                              src={skill.icon || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              className="max-h-12 max-w-12 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="h-16 w-16 mx-auto flex items-center justify-center mb-3 text-4xl">
                            {skill.icon}
                          </div>
                        )}
                        <p className="text-white font-medium text-sm leading-tight">{skill.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight font-heading">
            <span className="text-blue-300">Get In Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or having a chat about
            technology. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-400 hover:text-blue-500 border-none font-medium font-heading text-base flex items-center justify-center px-8 py-6 min-w-[140px]"
              onClick={() => window.open("mailto:parekh.samarth@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-400 hover:text-blue-500 border-none font-medium font-heading text-base flex items-center justify-center px-8 py-6 min-w-[140px]"
              onClick={() => window.open("https://www.linkedin.com/in/samarth-parekh/", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-400 hover:text-blue-500 border-none font-medium font-heading text-base flex items-center justify-center px-8 py-6 min-w-[140px]"
              onClick={() => window.open("https://github.com/sparekh14", "_blank")}
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-600/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="font-light text-base">
            &copy; Samarth Parekh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
