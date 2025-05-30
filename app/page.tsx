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
      const scrollPosition = window.scrollY + 150 // Increased offset for better detection

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
      website: "https://www.anoki.ai/",
      description: ["Incoming SWE Intern Summer 2025"],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "UMIACS",
      location: "College Park, MD",
      period: "Jan 2025 - Jun 2025",
      logo: "/logos/umiacs-logo.png",
      website: "https://www.umiacs.umd.edu/",
      description: [
        "Collaborated with Dr. Naomi Feldman and graduate fellow Imani Finkley to propose a framework for assessing novelty in LLM-generated literature.",
        "Constructed a 200K-item dataset of LLM-generated literature to support large-scale analysis.",
        "Performed data analysis and fine-tuning models (OPT-175b, BERT) using NLP to study how prompt complexity impacts originality, hypothesizing that detailed prompts enhance novelty but overly detailed ones can reduce it.",
        "Leveraged the Creativity Index and n-gram sequencing to evaluate thematic diversity and originality in LLM-generated text.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hack4Impact-UMD",
      location: "College Park, MD",
      period: "Jan 2025 - May 2025",
      logo: "/logos/hack4impact-logo.png",
      website: "https://www.hack4impact.org/",
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
      website: "https://www.karya.in/",
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
      logo: "/logos/decision-factories-logo.png",
      website: null,
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
      description:
        "AI-driven platform that optimizes supply chain routes using real-time environmental and traffic data, reducing carbon emissions by up to 35% while improving logistical efficiency.",
      technologies: ["Python", "Flask", "React.js"],
      icon: "☁️",
      demo: "https://www.youtube.com/watch?v=j-Y0KCmyz50",
    },
    {
      title: "LiveReqs",
      category: "SOFTWARE DEVELOPMENT",
      description:
        "LLM-powered application that enables Product Managers to convert high-level product requirements into detailed, testable use case documentation with visual flowcharts, executable code, and automated scenario validation.",
      technologies: ["React.js", "Node.js", "REST APIs", "TLDraw"],
      icon: "👥",
      demo: "https://drive.google.com/file/d/1vHlgmCA0g7pTzsWpSPBkkDVtMHJ_NYDg/view",
    },
    {
      title: "Camp Starfish",
      category: "Full-Stack Development",
      description:
        "Photo-sharing and scheduling platform for Camp Starfish, a nonprofit serving youth with social-emotional challenges. The system supports over 1,500 photos and 300 camper records each summer, used by 60+ staff to securely manage media and streamline camper scheduling.",
      technologies: ["Firebase", "AWS", "React.js"],
      icon: "⭐",
      demo: "https://docs.google.com/presentation/d/16vBt3v3ev4AX0mnmETDYSM6hhrsJ8w6QKF9zASiV840/edit?usp=sharing",
    },
    {
      title: "CosmoSearch",
      category: "WEB DEVELOPMENT",
      description:
        "Web application that lets users explore NASA's image library. Just enter a space-related term and date range (1920-2025) to browse stunning space images with titles, descriptions, and dates. Designed for quick, engaging cosmic discovery across any device.",
      technologies: ["Machine Learning", "React.js"],
      icon: "🚀",
      demo: "https://space-project-ruddy.vercel.app/",
    },
    {
      title: "Is GPT-3 Smarter Than A Sixth-Grader?",
      category: "AI RESEARCH",
      description:
        "Research study that evaluated the GPT-3 Davinci model's ability to answer middle school science questions from the TQA dataset using zero-shot, few-shot, and fine-tuning approaches to measure performance across different learning setups.",
      technologies: ["Python", "GPT-3", "NLP", "pandas"],
      icon: "🧠",
      demo: "https://independent-project-mentorship.netlify.app/projects/12bafc1b0d40c5efca04d8d8aaef32d3ba22e042.html",
    },
    {
      title: "WAR Prediction",
      category: "MACHINE LEARNING",
      description:
        "Machine learning model built with Python and scikit-learn to predict 2019 MLB player Wins Above Replacement (WAR), a key metric for evaluating player value and informing team decision-making, achieving a 0.87 correlation with actual performance.",
      technologies: ["Python", "scikit-learn", "Linear Regression"],
      icon: "⚾",
      demo: "https://github.com/TejSuklikar/WAR-Prediction",
    },
    {
      title: "How To Get A Good Whiff",
      category: "DATA SCIENCE",
      description:
        "Logistic regression model built in R to predict optimal MLB pitch locations by analyzing swing-and-miss probabilities, achieving 85% accuracy using Statcast data and visualized insights through ggplot2.",
      technologies: ["R", "ggplot2", "dplyr"],
      icon: "🏟️",
      demo: "https://github.com/TejSuklikar/HowToGetAGoodWhiff/blob/main/How%20to%20get%20a%20good%20WHIFF-%20Wharton%20Moneyball%20Academy%20Presentation.pdf",
    },
    {
      title: "Anti Refugee Sentiment Analysis",
      category: "MACHINE LEARNING",
      description:
        "Sentiment analysis model developed in Python using NLP techniques to classify tweets as pro- or anti-refugee, achieving 92.65% accuracy through feature extraction methods like Bag of Words, Tf-idf, and Word2Vec with logistic regression.",
      technologies: ["NLP", "Python", "scikit-learn", "TF-IDF", "Word2Vec"],
      icon: "🐦‍⬛",
      demo: "https://github.com/TejSuklikar/AntiRefugeeSentimentAnalysis/blob/main/Anti-Refugee%20Sentiment%20Analysis.pdf",
    },
  ]

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "/logos/skills/java-logo.png" },
        { name: "Python", icon: "/logos/skills/python-logo.png" },
        { name: "JavaScript/TypeScript", icon: "/logos/skills/typescript-javascript-logo.png" },
        { name: "C", icon: "/logos/skills/c-logo.png" },
        { name: "C++", icon: "/logos/skills/cpp-logo-new.png" },
        { name: "R", icon: "/logos/skills/r-logo.png" },
        { name: "SQL", icon: "/logos/skills/sql-logo.png" },
        { name: "HTML/CSS", icon: "/logos/skills/html-css-logo.png" },
        { name: "OCaml", icon: "/logos/skills/ocaml-logo.png" },
        { name: "Assembly", icon: "/logos/skills/assembly-logo.png" },
      ],
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "React.js", icon: "/logos/skills/react-logo.png" },
        { name: "Node.js", icon: "/logos/skills/nodejs-logo.png" },
        { name: "Express.js", icon: "/logos/skills/express-logo.png" },
        { name: "Next.js", icon: "/logos/skills/nextjs-logo.png" },
        { name: "Flask", icon: "/logos/skills/flask-logo.png" },
        { name: "scikit-learn", icon: "/logos/skills/scikit-learn-logo.png" },
        { name: "pandas", icon: "/logos/skills/pandas-logo.png" },
        { name: "TensorFlow", icon: "/logos/skills/tensorflow-logo.png" },
        { name: "PyTorch", icon: "/logos/skills/pytorch-logo.png" },
        { name: "NumPy", icon: "/logos/skills/numpy-logo.png" },
      ],
    },
    {
      title: "Tools/Technologies",
      skills: [
        { name: "AWS", icon: "/logos/skills/aws-logo.png" },
        { name: "Azure", icon: "/logos/skills/azure-logo.png" },
        { name: "Docker", icon: "/logos/skills/docker-logo.png" },
        { name: "Kubernetes", icon: "/logos/skills/kubernetes-logo.png" },
        { name: "MySQL", icon: "/logos/skills/mysql-logo.png" },
        { name: "PostgreSQL", icon: "/logos/skills/postgresql-logo.png" },
        { name: "Jupyter", icon: "/logos/skills/jupyter-logo.png" },
        { name: "MongoDB", icon: "/logos/skills/mongodb-logo.png" },
        { name: "Linux", icon: "/logos/skills/linux-logo.png" },
        { name: "Git", icon: "/logos/skills/git-logo.png" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-8 py-3 sm:py-4 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap ${
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight font-heading">
              Hello! I'm <span className="text-blue-300">Tej</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light">
              I'm a Computer Science and Linguistics student at the University of Maryland, passionate about developing
              innovative software solutions. I focus on leveraging AI, Machine Learning, and Data Science to solve
              complex problems across various industries. I'm eager to explore new ways AI can be applied across
              different fields, uncovering innovative solutions and pushing technological boundaries.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-blue-300 mb-6 sm:mb-8">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">San Francisco, CA</span>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-heading text-sm sm:text-base"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center order-1 md:order-2 mt-4 sm:mt-8 md:mt-16">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-600/30 shadow-2xl">
                <img
                  src="/profile-photo.jpeg"
                  alt="Tej Suklikar"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-600/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-10 sm:py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight font-heading">
            <span className="text-blue-300">Experience</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden flex items-center justify-center p-2 mx-auto sm:mx-0">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        style={exp.company === "Decision Factories" ? { filter: "brightness(0) invert(1)" } : {}}
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <CardTitle className="text-lg sm:text-xl text-white font-semibold font-heading">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-blue-300 font-medium font-heading">
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
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-4 mt-2 text-gray-400">
                        {exp.location && (
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{exp.location}</span>
                          </div>
                        )}
                        {exp.period && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{exp.period}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start leading-relaxed text-sm sm:text-base">
                        <span className="text-blue-300 mr-2 sm:mr-3 mt-1">•</span>
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
      <section id="projects" className="py-10 sm:py-14 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight font-heading">
            <span className="text-blue-300">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">{project.icon}</div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-blue-300 hover:text-blue-300"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-blue-300 border-blue-600/30 w-fit font-medium text-xs sm:text-sm"
                  >
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors font-semibold font-heading">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-600/10 text-blue-300 font-medium text-xs sm:text-sm"
                      >
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
      <section id="skills" className="py-10 sm:py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight font-heading">
            <span className="text-blue-300">Skills</span>
          </h2>
          <div className="space-y-8 sm:space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6 text-center font-heading">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {category.skills.map((skill, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900/50 border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-3 sm:p-4 text-center">
                        {typeof skill.icon === "string" && skill.icon.startsWith("/") ? (
                          <div className="h-12 w-12 sm:h-16 sm:w-16 mx-auto flex items-center justify-center mb-2 sm:mb-3 p-1 sm:p-2">
                            <img
                              src={skill.icon || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              className="max-h-8 max-w-8 sm:max-h-12 sm:max-w-12 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="h-12 w-12 sm:h-16 sm:w-16 mx-auto flex items-center justify-center mb-2 sm:mb-3 text-2xl sm:text-4xl">
                            {skill.icon}
                          </div>
                        )}
                        <p className="text-white font-medium text-xs sm:text-sm">{skill.name}</p>
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
      <section id="contact" className="py-10 sm:py-14 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight font-heading">
            <span className="text-blue-300">Get In Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium font-heading text-sm sm:text-base"
              onClick={() => window.open("mailto:anitej@suklikar.org")}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium font-heading text-sm sm:text-base"
              onClick={() => window.open("https://www.linkedin.com/in/tej-suklikar/", "_blank")}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 font-medium font-heading text-sm sm:text-base"
              onClick={() => window.open("https://github.com/TejSuklikar", "_blank")}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-blue-600/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="font-light text-sm sm:text-base">
            &copy; Tej Suklikar. All rights reserved. Built with React, Next.js, TypeScript, & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
