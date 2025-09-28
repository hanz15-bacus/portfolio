import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Rocket, Users, GraduationCap, MapPin, Coffee, Heart } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code with industry best practices",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex technical challenges",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring cutting-edge technologies and modern development methodologies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication skills and natural leadership abilities",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const technologies = [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Python", category: "backend" },
    { name: "C#", category: "backend" },
    { name: "Java", category: "backend" },
    { name: "React", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "AWS", category: "cloud" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "frontend": return "bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800";
      case "backend": return "bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800";
      case "database": return "bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800";
      case "cloud": return "bg-orange-100/80 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800";
      case "devops": return "bg-gray-100/80 text-gray-700 dark:bg-gray-800/80 dark:text-gray-300 border-gray-200 dark:border-gray-700";
      default: return "bg-slate-100/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            <Heart className="h-4 w-4" />
            Get to Know Me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a passion for building 
            impactful software solutions and exploring the frontiers of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Personal Info Card */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">My Journey</h3>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    Currently pursuing a Bachelor's degree in <span className="text-blue-600 dark:text-blue-400 font-semibold">Computer Science</span> at 
                    <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cebu Institute of Technology - University</span>, 
                    I've developed a strong foundation in software engineering principles, algorithms, 
                    and data structures.
                  </p>
                  <p>
                    My journey began with curiosity about how things work, which led me to programming. 
                    Since then, I've worked on various projects ranging from <span className="text-green-600 dark:text-green-400 font-semibold">web applications</span> to 
                    <span className="text-purple-600 dark:text-purple-400 font-semibold"> machine learning models</span>, always striving to learn and grow.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source projects, 
                    participating in hackathons, or exploring the latest tech trends.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="h-4 w-4" />
                    <span>Cebu, Philippines</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Coffee className="h-4 w-4" />
                    <span>Always Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech.name} 
                      className={`text-sm py-2 px-4 font-medium border hover:scale-105 transition-all duration-200 ${getCategoryColor(tech.category)}`}
                      style={{ 
                        animationDelay: `${index * 50}ms` 
                      }}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                
                {/* Category legend */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Frontend</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Backend</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Cloud</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-center mb-2 text-slate-900 dark:text-slate-100">What Drives Me</h3>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 relative">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Animated bar */}
                      <div className="mt-4 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ${
                            hoveredCard === index ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
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

export default About;