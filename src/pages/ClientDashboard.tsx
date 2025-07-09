import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, MessageSquare, Plus, Eye, Users, DollarSign, Calendar, TrendingUp, Award, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ClientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const activeJobs = [
    {
      id: 1,
      title: "React Developer for E-commerce Platform",
      freelancer: "John Smith",
      status: "In Progress",
      budget: "$3,500",
      deadline: "March 15, 2024",
      progress: 65
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      freelancer: "Sarah Johnson",
      status: "Review",
      budget: "$2,800",
      deadline: "March 20, 2024",
      progress: 90
    }
  ];

  const recentApplications = [
    {
      id: 1,
      job: "Full Stack Development for SaaS Platform",
      applicants: 24,
      posted: "2 days ago",
      status: "Active"
    },
    {
      id: 2,
      job: "WordPress Website Redesign",
      applicants: 18,
      posted: "1 week ago",
      status: "Hiring"
    },
    {
      id: 3,
      job: "Content Writer for Marketing Blog",
      applicants: 31,
      posted: "3 days ago",
      status: "Active"
    }
  ];

  const recommendedFreelancers = [
    {
      id: 1,
      name: "Mike Chen",
      title: "Full Stack Developer",
      rate: "$45/hr",
      rating: 4.9,
      skills: ["React", "Node.js", "Python"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 2,
      name: "Emma Wilson",
      title: "UI/UX Designer",
      rate: "$35/hr",
      rating: 5.0,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c"
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
                <Link to="/find-freelancers" className="text-foreground hover:text-upwork-green">
                  Find Freelancers
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
                  placeholder="Search for freelancers..."
                  className="pl-10 w-64"
                />
              </div>
              <Link to="/post-job">
                <Button className="btn-primary">
                  <Plus size={16} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare size={20} />
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                <AvatarFallback>AD</AvatarFallback>
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
                    <CardTitle className="text-xl">Welcome back, Alex!</CardTitle>
                    <CardDescription>Manage your projects and find the perfect freelancers</CardDescription>
                  </div>
                  <Link to="/post-job">
                    <Button className="btn-primary">
                      <Plus size={16} className="mr-2" />
                      Post a Job
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="text-upwork-blue" size={20} />
                    <div>
                      <p className="text-2xl font-bold">4</p>
                      <p className="text-xs text-muted-foreground">Active Jobs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="text-upwork-green" size={20} />
                    <div>
                      <p className="text-2xl font-bold">73</p>
                      <p className="text-xs text-muted-foreground">Total Applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-warning" size={20} />
                    <div>
                      <p className="text-2xl font-bold">$12.4k</p>
                      <p className="text-xs text-muted-foreground">Total Spent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="upwork-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="text-destructive" size={20} />
                    <div>
                      <p className="text-2xl font-bold">4.8</p>
                      <p className="text-xs text-muted-foreground">Avg Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Jobs */}
            <Card className="upwork-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Jobs</CardTitle>
                  <Link to="/my-jobs">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Freelancer: <span className="font-medium">{job.freelancer}</span>
                        </p>
                      </div>
                      <Badge 
                        variant={job.status === "In Progress" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {job.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground">Budget</p>
                        <p className="font-medium">{job.budget}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Deadline</p>
                        <p className="font-medium">{job.deadline}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Progress</p>
                        <p className="font-medium">{job.progress}%</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-upwork-light-gray rounded-full h-2 mb-3">
                      <div 
                        className="bg-upwork-green h-2 rounded-full" 
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        Message Freelancer
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Job Posts */}
            <Card className="upwork-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Job Posts</CardTitle>
                  <Link to="/post-job">
                    <Button variant="outline" size="sm">Post New Job</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentApplications.map((job) => (
                  <div key={job.id} className="border border-border rounded-lg p-4 hover:bg-upwork-light-green/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{job.job}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {job.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {job.applicants} proposals • Posted {job.posted}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="btn-primary">
                        View Proposals
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit Job
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommended Freelancers */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Recommended Freelancers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedFreelancers.map((freelancer) => (
                  <div key={freelancer.id} className="border border-border rounded-lg p-3">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src={freelancer.image} />
                        <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{freelancer.name}</h4>
                        <p className="text-xs text-muted-foreground">{freelancer.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{freelancer.rate}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">{freelancer.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 text-warning">⭐</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {freelancer.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {freelancer.skills.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{freelancer.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Browse More Freelancers
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus size={16} className="mr-2" />
                  Post a Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Search size={16} className="mr-2" />
                  Find Freelancers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp size={16} className="mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText size={16} className="mr-2" />
                  Manage Contracts
                </Button>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Get started with our comprehensive guides and tutorials.
                </p>
                <Button variant="outline" className="w-full">
                  Visit Help Center
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;