import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageSquare, User, Building, Clock, Heart } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bacushanzchester@gmail.com",
      href: "mailto:bacushanzchester@gmail.com",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0992 402 1076",
      href: "tel:+639924021076",
      description: "Available during business hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Inoburan City of Naga, Cebu, Philippines",
      href: "",
      description: "Based in the beautiful Philippines",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hanz15-bacus",
      username: "hanz15-bacus",
      description: "Check out my repositories",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hanz-chester-vicada-bacus-77aba8357/",
      username: "Hanz Chester V. Bacus",
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
      }),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            <MessageSquare className="h-4 w-4" />
            Let's Talk
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and innovation.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Intro Card */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Let's Connect</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Whether you're looking for a <span className="text-blue-600 dark:text-blue-400 font-semibold">software engineering intern</span>,
                  want to collaborate on a <span className="text-green-600 dark:text-green-400 font-semibold">exciting project</span>,
                  or just want to say hello, I'd love to hear from you!
                </p>
                {/* Availability status */}
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 dark:text-green-200 text-sm">Currently Available</p>
                    <p className="text-green-600 dark:text-green-400 text-xs">Open to internship opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Contact Information</h4>
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm cursor-pointer"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium block mb-2"
                        >
                          {item.value}
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                        {/* Progress bar */}
                        <div className="mt-3 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ${
                              hoveredContact === index ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Social Links */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Follow Me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          <social.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {social.label}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">{social.username}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{social.description}</p>
                        </div>
                        {/* Progress indicator */}
                        <div className="h-1 w-16 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${social.color} rounded-full transition-all duration-700 ${
                              hoveredSocial === index ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Enhanced Contact Form */}
          <div className="w-full">
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden">
              {/* Form header with gradient */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <CardTitle className="text-white text-2xl font-bold flex items-center gap-3">
                  <Send className="h-6 w-6" />
                  Send a Message
                </CardTitle>
                <p className="text-blue-100 mt-2">I'll get back to you within 24 hours</p>
              </div>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-900 dark:text-slate-100 font-medium">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-900 dark:text-slate-100 font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-900 dark:text-slate-100 font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-900 dark:text-slate-100 font-medium">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project collaboration opportunity"
                      className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-900 dark:text-slate-100 font-medium">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello! I'm excited to hear from you..."
                      rows={6}
                      className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                          ✅ Message sent successfully! I'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                          ❌ Failed to send message. Please try again or contact me directly.
                        </p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 py-6 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                      Your information is safe and will never be shared with third parties.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
