import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex challenges"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and development methodologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication and leadership skills"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "Python", "Java", "React", "Node.js",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", 
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for building 
            impactful software solutions and exploring the frontiers of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing a Bachelor's degree in Computer Science at [University Name], 
                I've developed a strong foundation in software engineering principles, algorithms, 
                and data structures.
              </p>
              <p>
                My journey began with curiosity about how things work, which led me to programming. 
                Since then, I've worked on various projects ranging from web applications to 
                machine learning models, always striving to learn and grow.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                participating in hackathons, or exploring the latest tech trends.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
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