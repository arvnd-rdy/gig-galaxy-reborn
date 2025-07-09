import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, MessageSquare, Star, Eye, Heart, DollarSign, Calendar, TrendingUp, Award, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FreelancerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const recentJobs = [
    {
      id: 1,
      title: "React Developer for E-commerce Platform",
      client: "TechCorp Inc.",
      budget: "$3,000 - $5,000",
      posted: "2 hours ago",
      proposals: 15,
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      client: "StartupXYZ",
      budget: "$2,500 - $4,000",
      posted: "5 hours ago",
      proposals: 8,
      skills: ["Figma", "UI Design", "Mobile Design"]
    },
    {
      id: 3,
      title: "Content Writer for Marketing Blog",
      client: "Marketing Agency Pro",
      budget: "$500 - $1,000",
      posted: "1 day ago",
      proposals: 23,
      skills: ["Content Writing", "SEO", "Marketing"]
    }
  ];

  const activeProposals = [
    {
      id: 1,
      job: "Full Stack Development for SaaS Platform",
      client: "InnovateTech",
      submitted: "3 days ago",
      status: "Under Review"
    },
    {
      id: 2,
      job: "WordPress Website Redesign",
      client: "Local Business",
      submitted: "1 week ago",
      status: "Interview Scheduled"
    }
  ];

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-upwork-green">
                Upwork
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/find-work" className="text-foreground hover:text-upwork-green">
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
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for jobs..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare size={20} />
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <Card className="upwork-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Good morning, John!</CardTitle>
                    <CardDescription>Here's what's happening with your freelance work today</CardDescription>
                  </div>
                  <Button className="btn-primary">
                    Complete Profile
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="text-upwork-blue" size={20} />
                    <div>
                      <p className="text-2xl font-bold">847</p>
                      <p className="text-xs text-muted-foreground">Profile Views</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="text-destructive" size={20} />
                    <div>
                      <p className="text-2xl font-bold">23</p>
                      <p className="text-xs text-muted-foreground">Saved Jobs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-upwork-green" size={20} />
                    <div>
                      <p className="text-2xl font-bold">$2.4k</p>
                      <p className="text-xs text-muted-foreground">This Month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="text-warning" size={20} />
                    <div>
                      <p className="text-2xl font-bold">4.9</p>
                      <p className="text-xs text-muted-foreground">Job Success</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Job Recommendations */}
            <Card className="upwork-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recommended for you</CardTitle>
                  <Link to="/find-work">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="border border-border rounded-lg p-4 hover:bg-upwork-light-green/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground hover:text-upwork-green cursor-pointer">
                        {job.title}
                      </h3>
                      <Button variant="ghost" size="sm">
                        <Heart size={16} />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {job.budget} - Posted {job.posted}
                    </p>
                    <p className="text-sm mb-3">
                      Client: <span className="font-medium">{job.client}</span> • {job.proposals} proposals
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="btn-primary">
                      Submit Proposal
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Complete your profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile completeness</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-upwork-light-gray rounded-full h-2">
                  <div className="bg-upwork-green h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText size={16} className="text-muted-foreground" />
                    <span>Add portfolio items</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-muted-foreground" />
                    <span>Take skill assessments</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Complete Profile
                </Button>
              </CardContent>
            </Card>

            {/* Active Proposals */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Active Proposals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProposals.map((proposal) => (
                  <div key={proposal.id} className="border border-border rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-1">{proposal.job}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {proposal.client} • Submitted {proposal.submitted}
                    </p>
                    <Badge 
                      variant={proposal.status === "Interview Scheduled" ? "default" : "secondary"} 
                      className="text-xs"
                    >
                      {proposal.status}
                    </Badge>
                  </div>
                ))}
                <Link to="/proposals">
                  <Button variant="outline" className="w-full">
                    View All Proposals
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Search size={16} className="mr-2" />
                  Browse Jobs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp size={16} className="mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users size={16} className="mr-2" />
                  Find Clients
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;