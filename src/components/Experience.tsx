import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building, Trophy, BookOpen, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "88WebForge Solutions",
      location: "Cebu City, Philippines",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      status: "Completed",
      description: [
        "Developed and maintained React components for the company's main web application",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and learned industry best practices",
        "Contributed to improving application performance by 20%"
      ],
      technologies: ["React", "TypeScript", "Django", "PostgreSQL", "Git"],
      achievements: ["20% Performance Improvement", "Code Review Participation"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Cebu Institute of Technology - University",
      location: "Cebu City, Philippines",
      period: "Aug 2022 - May 2026",
      gpa: "4.0 - 4.3",
      status: "In Progress",
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Software Engineering",
        "Information Management 1 & 2",
        "Applied AI",
        "Intelligent Systems",
        "Operating Systems",
        "Automata Theory"
      ],
      highlights: ["Dean's List", "Academic Excellence", "Outstanding Student"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "In Progress": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Current": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getCategoryColor = (category, index) => {
    const colors = [
      "bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
      "bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      "bg-orange-100/80 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      "bg-pink-100/80 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/50 dark:bg-green-900/20 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-6">
            <TrendingUp className="h-4 w-4" />
            My Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic background in computer science, showcasing growth and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10">
                <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden"
                  onMouseEnter={() => setHoveredCard(`exp-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                            <CalendarDays className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="w-fit font-medium">
                          {exp.type}
                        </Badge>
                        <Badge className={`${getStatusColor(exp.status)} border font-medium w-fit`}>
                          {exp.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    {/* Key Achievements */}
                    {exp.achievements && (
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">Key Achievements</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <Badge key={idx} className="bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800">
                              <Star className="h-3 w-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start leading-relaxed">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={tech} 
                            className={`text-sm font-medium border hover:scale-105 transition-all duration-200 ${getCategoryColor('tech', idx)}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${exp.color} rounded-full transition-all duration-1000 ${
                          hoveredCard === `exp-${index}` ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden"
                  onMouseEnter={() => setHoveredCard(`edu-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <CardTitle className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                        {edu.degree}
                      </CardTitle>
                      <Badge className={`${getStatusColor(edu.status)} border font-medium`}>
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Building className="h-4 w-4" />
                        <span className="font-medium text-sm">{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <CalendarDays className="h-4 w-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    {/* GPA and Highlights */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Academic Performance</span>
                        <Badge variant="outline" className="font-bold text-green-600 dark:text-green-400 border-green-500/20">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      
                      {edu.highlights && (
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <Badge key={idx} className="bg-purple-100/80 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800 text-xs">
                              <Trophy className="h-3 w-3 mr-1" />
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Coursework */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <Badge 
                            key={course} 
                            className={`text-xs font-medium border hover:scale-105 transition-all duration-200 ${getCategoryColor('course', idx)}`}
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${edu.color} rounded-full transition-all duration-1000 ${
                          hoveredCard === `edu-${index}` ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;