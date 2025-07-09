import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Award, Calendar, DollarSign, MessageSquare, Heart, Flag, Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FreelancerProfile = () => {
  const { id } = useParams();

  // Mock freelancer data
  const freelancer = {
    id: 1,
    name: "Sarah Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c",
    hourlyRate: 65,
    availability: "30+ hrs/week",
    responseTime: "within 1 hour",
    rating: 4.9,
    totalReviews: 127,
    totalEarnings: "$125,000+",
    jobSuccessScore: 98,
    topRated: true,
    memberSince: "2019",
    overview: `Experienced Full Stack Developer with 6+ years of expertise in React, Node.js, and modern web technologies. I specialize in creating scalable web applications and intuitive user interfaces that drive business results.

I have successfully delivered 150+ projects for clients worldwide, ranging from startups to Fortune 500 companies. My approach combines technical excellence with user-centric design to create solutions that not only work flawlessly but also provide exceptional user experiences.

**What I offer:**
• Full stack web development (React, Node.js, Python, PostgreSQL)
• UI/UX design and prototyping (Figma, Adobe Creative Suite)
• Mobile app development (React Native)
• E-commerce solutions (Shopify, WooCommerce, custom builds)
• API development and integration
• Performance optimization and scaling

**Industries I've worked with:**
• FinTech and Banking
• E-commerce and Retail
• Healthcare and Telemedicine
• Education and EdTech
• SaaS and B2B platforms

I'm passionate about staying current with the latest technologies and best practices. I believe in clear communication, meeting deadlines, and delivering work that exceeds expectations.`,
    skills: [
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "UI/UX Design", level: "Expert" },
      { name: "Figma", level: "Expert" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Intermediate" }
    ],
    portfolio: [
      {
        id: 1,
        title: "E-commerce Platform Redesign",
        description: "Complete redesign and development of a multi-vendor e-commerce platform",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        url: "#"
      },
      {
        id: 2,
        title: "FinTech Mobile App",
        description: "React Native app for personal finance management with real-time analytics",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
        technologies: ["React Native", "Firebase", "Chart.js"],
        url: "#"
      },
      {
        id: 3,
        title: "SaaS Dashboard",
        description: "Modern dashboard for project management with real-time collaboration",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        technologies: ["React", "TypeScript", "WebSocket"],
        url: "#"
      }
    ],
    education: [
      {
        school: "Stanford University",
        degree: "Bachelor of Science in Computer Science",
        year: "2015-2019",
        description: "Graduated Magna Cum Laude with focus on Human-Computer Interaction"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023"
      },
      {
        name: "Google UX Design Certificate",
        issuer: "Google",
        year: "2022"
      }
    ],
    workHistory: [
      {
        id: 1,
        title: "E-commerce Platform Development",
        client: "TechCorp Inc.",
        duration: "Mar 2024 - Present",
        budget: "$8,500",
        rating: 5.0,
        feedback: "Sarah exceeded our expectations in every way. Her technical skills are outstanding, and she delivered a beautiful, functional e-commerce platform ahead of schedule."
      },
      {
        id: 2,
        title: "Mobile App UI/UX Design",
        client: "StartupXYZ",
        duration: "Jan 2024 - Feb 2024", 
        budget: "$3,200",
        rating: 5.0,
        feedback: "Incredible designer and developer. Sarah transformed our app from good to amazing. The user feedback has been overwhelmingly positive since launch."
      },
      {
        id: 3,
        title: "SaaS Dashboard Development",
        client: "InnovateTech",
        duration: "Nov 2023 - Dec 2023",
        budget: "$5,800",
        rating: 4.8,
        feedback: "Professional, communicative, and highly skilled. Sarah built exactly what we needed and provided valuable suggestions for improvements."
      }
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Conversational" },
      { name: "French", level: "Basic" }
    ]
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/find-freelancers" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={20} className="mr-2" />
                Back to search
              </Link>
            </div>
            <Link to="/client-dashboard" className="text-2xl font-bold text-upwork-green">
              Upwork
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <Card className="upwork-shadow mb-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={freelancer.avatar} />
                    <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">{freelancer.name}</h1>
                        {freelancer.topRated && (
                          <Badge className="bg-upwork-green text-white mt-1">Top Rated</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Heart size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Flag size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-3">{freelancer.title}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {freelancer.location}
                      </div>
                      <div className="flex items-center">
                        <Star size={16} className="text-warning mr-1" />
                        {freelancer.rating} ({freelancer.totalReviews} reviews)
                      </div>
                      <div>Job Success: {freelancer.jobSuccessScore}%</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Hourly Rate</p>
                        <p className="font-semibold text-lg">${freelancer.hourlyRate}/hr</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Availability</p>
                        <p className="font-medium">{freelancer.availability}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Response Time</p>
                        <p className="font-medium">{freelancer.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="work-history">Work History</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Overview */}
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      {freelancer.overview.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3 text-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {freelancer.skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant={skill.level === "Expert" ? "default" : "secondary"}>
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Education & Certifications */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="upwork-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GraduationCap size={20} className="mr-2" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {freelancer.education.map((edu, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground">{edu.school} • {edu.year}</p>
                          <p className="text-sm mt-1">{edu.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="upwork-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award size={20} className="mr-2" />
                        Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {freelancer.certifications.map((cert, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {freelancer.portfolio.map((item) => (
                    <Card key={item.id} className="upwork-shadow hover:upwork-shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="work-history" className="space-y-4">
                {freelancer.workHistory.map((work) => (
                  <Card key={work.id} className="upwork-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{work.title}</h3>
                          <p className="text-muted-foreground">{work.client} • {work.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{work.budget}</p>
                          <div className="flex items-center">
                            <Star size={16} className="text-warning mr-1" />
                            <span>{work.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm italic">"{work.feedback}"</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="text-center py-8">
                  <Star size={48} className="text-warning mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{freelancer.rating} out of 5 stars</h3>
                  <p className="text-muted-foreground">Based on {freelancer.totalReviews} reviews</p>
                </div>
                {/* Reviews would be mapped here similar to work history */}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card className="upwork-shadow">
              <CardContent className="p-4 space-y-3">
                <Button className="w-full btn-primary">
                  <MessageSquare size={16} className="mr-2" />
                  Contact Sarah
                </Button>
                <Button variant="outline" className="w-full">
                  Invite to Job
                </Button>
                <Button variant="outline" className="w-full">
                  <Download size={16} className="mr-2" />
                  Save Freelancer
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earned</span>
                  <span className="font-semibold">{freelancer.totalEarnings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Job Success</span>
                  <span className="font-semibold">{freelancer.jobSuccessScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-semibold">{freelancer.totalReviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">{freelancer.memberSince}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Zone</span>
                  <span className="font-semibold">{freelancer.timezone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {freelancer.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;