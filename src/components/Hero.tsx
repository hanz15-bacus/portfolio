import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, MapPin, Calendar, Code, Star } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/50 dark:bg-green-900/20 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>

          {/* Enhanced Profile Image */}
          <div className="mb-10">
            <div 
              className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-1 shadow-2xl group hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                CS
              </div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-slate-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
            Hanz Chester V. Bacus
          </h1>
          
          {/* Enhanced subtitle with location and status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
              Computer Science Student
            </h2>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Cebu, Philippines</span>
            </div>
          </div>

          <div className="text-lg text-blue-600 dark:text-blue-400 mb-8 font-medium">
            @ Cebu Institute of Technology - University
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing a BS in Computer Science 
            with experience in <span className="text-blue-600 dark:text-blue-400 font-semibold">full-stack development</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> machine learning</span>, and 
            <span className="text-green-600 dark:text-green-400 font-semibold"> software engineering</span>.
          </p>

          {/* Skills preview badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["React", "Python", "Node.js", "TensorFlow", "PostgreSQL"].map((skill, index) => (
              <Badge 
                key={skill}
                variant="outline" 
                className="text-sm font-medium bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:bacushanzchester@gmail.com">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </a>

            <a href="/resume.pdf" download="hanz_bacus-resume.pdf">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 shadow-md hover:shadow-lg transition-all duration-300 group">
                <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/hanz15-bacus" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="lg" 
                className="p-4 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 group shadow-md hover:shadow-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
              >
                <Github className="h-6 w-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/hanz-chester-vicada-bacus-77aba8357/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="lg" 
                className="p-4 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 group shadow-md hover:shadow-lg bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
              >
                <Linkedin className="h-6 w-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </Button>
            </a>
          </div>

          {/* Stats or additional info */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>4+ Programming Languages</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>10+ Projects Completed</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Expected Graduation May 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;