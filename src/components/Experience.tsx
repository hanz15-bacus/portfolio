import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Startup Inc.",
      location: "San Francisco, CA",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Developed and maintained React components for the company's main web application",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and learned industry best practices",
        "Contributed to improving application performance by 20%"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Teaching Assistant",
      company: "University Computer Science Department",
      location: "University Campus",
      period: "Sep 2023 - Present",
      type: "Part-time",
      description: [
        "Assist students in CS101 and CS201 courses with programming concepts",
        "Hold weekly office hours and conduct review sessions",
        "Grade assignments and provide constructive feedback",
        "Help improve student understanding of algorithms and data structures"
      ],
      technologies: ["Java", "Python", "C++", "Algorithms"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jan 2023 - May 2024",
      type: "Freelance",
      description: [
        "Built responsive websites for small businesses and local organizations",
        "Worked directly with clients to understand requirements and deliver solutions",
        "Managed project timelines and maintained client relationships",
        "Delivered 5+ successful projects with 100% client satisfaction"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      location: "City, State",
      period: "Aug 2022 - May 2026",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Machine Learning",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background in computer science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">GPA:</span>
                      <Badge variant="outline">{edu.gpa}</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
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