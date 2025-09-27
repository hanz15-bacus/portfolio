import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                CS
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hanz Chester V. Bacus
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student @ Cebu Institute of Technology - University
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing a BS in Computer Science 
            with experience in full-stack development, machine learning, and software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           <a href="mailto:bacushanzchester@gmail.com">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </a>


            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>



        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/hanz15-bacus" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="p-3">
              <Github className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/hanz-chester-vicada-bacus-77aba8357/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="p-3">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
        </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;