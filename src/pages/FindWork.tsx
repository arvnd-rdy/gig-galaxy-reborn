import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Clock, DollarSign, Heart, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "React Developer for E-commerce Platform",
      description: "We are looking for an experienced React developer to help build our e-commerce platform. You should have strong experience with React, Redux, and modern JavaScript. The project involves creating responsive components, integrating with APIs, and ensuring optimal performance.",
      client: {
        name: "TechCorp Inc.",
        location: "United States",
        rating: 4.8,
        totalSpent: "$50K+",
        hires: 25
      },
      budget: {
        type: "Fixed Price",
        amount: "$3,000 - $5,000"
      },
      duration: "1-3 months",
      experienceLevel: "Expert",
      posted: "2 hours ago",
      proposals: 15,
      skills: ["React", "JavaScript", "Redux", "Node.js", "MongoDB"],
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App Redesign",
      description: "Looking for a talented UI/UX designer to redesign our mobile application. The app serves over 100K users and needs a modern, intuitive interface. Experience with Figma, user research, and mobile design patterns is essential.",
      client: {
        name: "StartupXYZ",
        location: "Canada",
        rating: 4.9,
        totalSpent: "$25K+",
        hires: 12
      },
      budget: {
        type: "Hourly",
        amount: "$35 - $60/hr"
      },
      duration: "1-3 months",
      experienceLevel: "Intermediate",
      posted: "5 hours ago",
      proposals: 8,
      skills: ["Figma", "UI Design", "UX Research", "Mobile Design", "Prototyping"],
      verified: true,
      featured: false
    },
    {
      id: 3,
      title: "Full Stack Development for SaaS Platform",
      description: "We need a full stack developer to build a comprehensive SaaS platform from scratch. The project includes user authentication, payment integration, dashboard creation, and API development. Long-term partnership potential.",
      client: {
        name: "InnovateTech Solutions",
        location: "United Kingdom",
        rating: 4.7,
        totalSpent: "$100K+",
        hires: 35
      },
      budget: {
        type: "Fixed Price",
        amount: "$8,000 - $15,000"
      },
      duration: "3-6 months",
      experienceLevel: "Expert",
      posted: "1 day ago",
      proposals: 23,
      skills: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "TypeScript"],
      verified: true,
      featured: true
    },
    {
      id: 4,
      title: "Content Writer for Marketing Blog",
      description: "Seeking an experienced content writer to create engaging blog posts for our marketing website. You should have experience with SEO writing, content strategy, and the ability to write in various industries.",
      client: {
        name: "Marketing Agency Pro",
        location: "Australia",
        rating: 4.6,
        totalSpent: "$15K+",
        hires: 18
      },
      budget: {
        type: "Fixed Price",
        amount: "$500 - $1,000"
      },
      duration: "Less than 1 month",
      experienceLevel: "Intermediate",
      posted: "1 day ago",
      proposals: 31,
      skills: ["Content Writing", "SEO", "Blog Writing", "Marketing", "Research"],
      verified: false,
      featured: false
    }
  ];

  const categories = [
    "Web Development",
    "Mobile Development", 
    "Design & Creative",
    "Writing & Translation",
    "Marketing & Sales",
    "Data Science",
    "Engineering",
    "Legal",
    "Admin Support"
  ];

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/freelancer-dashboard" className="text-2xl font-bold text-upwork-green">
              Upwork
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/find-work" className="text-upwork-green font-medium">
                Find Work
              </Link>
              <Link to="/my-jobs" className="text-foreground hover:text-upwork-green">
                My Jobs
              </Link>
              <Link to="/reports" className="text-foreground hover:text-upwork-green">
                Reports
              </Link>
              <Link to="/messages" className="text-foreground hover:text-upwork-green">
                Messages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:col-span-1`}>
            <Card className="upwork-shadow sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 5).map((category) => (
                      <label key={category} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                    <Button variant="ghost" className="text-xs p-0 h-auto">
                      Show more categories
                    </Button>
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h3 className="font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Fixed Price</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Hourly</span>
                    </label>
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <h3 className="font-medium mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Entry Level</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Intermediate</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Expert</span>
                    </label>
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <h3 className="font-medium mb-3">Client Info</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Payment Verified</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">$1K+ spent</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">10+ hires</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Sort Bar */}
            <Card className="upwork-shadow mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for jobs..."
                      className="pl-10"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter size={16} className="mr-2" />
                    Filters
                  </Button>
                  <select className="px-3 py-2 border border-border rounded-lg">
                    <option>Sort: Newest</option>
                    <option>Sort: Oldest</option>
                    <option>Sort: Budget (High to Low)</option>
                    <option>Sort: Budget (Low to High)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Results Summary */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Jobs you might like</h2>
              <p className="text-sm text-muted-foreground">1,247 jobs found</p>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="upwork-shadow hover:upwork-shadow-lg transition-all duration-200 hover:border-upwork-green/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Link to={`/job/${job.id}`} className="text-lg font-semibold text-foreground hover:text-upwork-green">
                            {job.title}
                          </Link>
                          {job.featured && (
                            <Badge className="bg-upwork-green text-white text-xs">Featured</Badge>
                          )}
                          {job.verified && (
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                          {job.description}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Heart size={16} />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <DollarSign size={16} className="text-muted-foreground mr-2" />
                          <span className="font-medium">{job.budget.amount}</span>
                          <span className="text-muted-foreground ml-2">({job.budget.type})</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="text-muted-foreground mr-2" />
                          <span>{job.duration} • {job.experienceLevel} level</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <MapPin size={16} className="text-muted-foreground mr-2" />
                          <span>{job.client.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-muted-foreground">Posted {job.posted} • {job.proposals} proposals</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Star size={14} className="text-warning mr-1" />
                          {job.client.rating}
                        </span>
                        <span>{job.client.totalSpent} spent</span>
                        <span>{job.client.hires} hires</span>
                      </div>
                      <Button className="btn-primary">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWork;