import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Calendar, Users, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      stats: { stars: 127, contributors: 4, year: "2024" },
      status: "Production"
    },
    {
      title: "Machine Learning Classifier",
      description: "Developed a machine learning model to classify images using TensorFlow and Python. Achieved 94% accuracy on validation dataset.",
      image: "/waste.png",
      technologies: ["Python", "TensorFlow", "scikit-learn", "HTML", "CSS"],
      githubUrl: "https://github.com/hanz15-bacus/waste-management-prediction",
      liveUrl: "waste-management-prediction.vercel.app",
      featured: true,
      stats: { stars: 89, contributors: 2, year: "2024" },
      status: "Active"
    },
    {
      title: "Task Management API",
      description: "RESTful API built with Express.js and MongoDB. Includes features like task CRUD operations, user management, and real-time updates.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      stats: { stars: 45, contributors: 1, year: "2023" },
      status: "Completed"
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform mobile application built with React Native. Integrates with weather APIs and provides location-based forecasts.",
      image: "/placeholder.svg",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      stats: { stars: 32, contributors: 1, year: "2023" },
      status: "Archived"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case "Production": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Active": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Completed": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Archived": return "bg-gray-500/10 text-gray-600 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6">
        {/* Header with animated gradient text */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            <Star className="h-4 w-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects that demonstrate my expertise in full-stack development, 
            machine learning, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects with enhanced cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status indicator */}
              <div className="absolute top-4 left-4 z-10">
                <Badge 
                  className={`${getStatusColor(project.status)} border font-medium`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Image with overlay effect */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover overlay with quick actions */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project stats */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.stats.contributors}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.stats.year}
                  </div>
                </div>
                
                {/* Technologies with improved styling */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs font-medium bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-200"
                      style={{ 
                        animationDelay: `${techIndex * 100}ms`,
                        animation: hoveredProject === index ? 'pulse 2s infinite' : 'none'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="group/btn" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects with compact grid */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-900/80"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-1">
                      <Badge 
                        className={`${getStatusColor(project.status)} text-xs border`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Stats row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.stats.year}
                    </div>
                    <div className="ml-auto flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;