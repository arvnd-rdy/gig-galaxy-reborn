import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Heart, Flag, Share2, Users, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const JobDetails = () => {
  const { id } = useParams();
  const [coverLetter, setCoverLetter] = useState("");
  const [proposedRate, setProposedRate] = useState("");
  const [showProposalForm, setShowProposalForm] = useState(false);

  // Mock job data
  const job = {
    id: 1,
    title: "React Developer for E-commerce Platform",
    description: `We are looking for an experienced React developer to help build our e-commerce platform. This is an exciting opportunity to work on a cutting-edge project that will serve thousands of users.

**Project Overview:**
Our company is developing a comprehensive e-commerce platform that needs to be built from the ground up. We need someone who can create responsive, user-friendly components and integrate with our existing backend APIs.

**Key Responsibilities:**
• Develop responsive React components using modern JavaScript (ES6+)
• Implement state management using Redux or Context API
• Integrate with RESTful APIs and handle data efficiently
• Ensure cross-browser compatibility and optimal performance
• Write clean, maintainable, and well-documented code
• Collaborate with our design and backend teams

**Requirements:**
• 3+ years of experience with React and JavaScript
• Strong understanding of HTML5, CSS3, and modern web standards
• Experience with state management libraries (Redux preferred)
• Knowledge of modern build tools (Webpack, Babel, etc.)
• Familiarity with version control systems (Git)
• Experience with responsive design and mobile-first development

**Nice to Have:**
• Experience with TypeScript
• Knowledge of Node.js and Express
• Familiarity with AWS or other cloud platforms
• Experience with testing frameworks (Jest, React Testing Library)

**Project Timeline:**
We are looking to start immediately and complete the project within 2-3 months. There is potential for long-term collaboration on additional features and maintenance.`,
    client: {
      name: "TechCorp Inc.",
      location: "United States",
      rating: 4.8,
      totalSpent: "$50,000+",
      hires: 25,
      memberSince: "2019",
      jobsPosted: 47,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    budget: {
      type: "Fixed Price",
      amount: "$3,000 - $5,000"
    },
    duration: "1-3 months",
    experienceLevel: "Expert",
    posted: "2 hours ago",
    proposals: 15,
    skills: ["React", "JavaScript", "Redux", "Node.js", "MongoDB", "CSS3", "HTML5", "REST APIs"],
    verified: true,
    featured: true,
    connectsRequired: 6,
    category: "Web Development"
  };

  const similarJobs = [
    {
      id: 2,
      title: "Vue.js Developer for Dashboard",
      budget: "$2,000 - $4,000",
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Frontend Developer - React/TypeScript",
      budget: "$4,000 - $8,000",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Full Stack Developer - MERN Stack",
      budget: "$5,000 - $10,000",
      posted: "1 week ago"
    }
  ];

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Proposal submitted successfully!");
    setShowProposalForm(false);
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/find-work" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={20} className="mr-2" />
                Back to search
              </Link>
            </div>
            <Link to="/freelancer-dashboard" className="text-2xl font-bold text-upwork-green">
              Upwork
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="upwork-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold text-foreground">{job.title}</h1>
                      {job.featured && (
                        <Badge className="bg-upwork-green text-white">Featured</Badge>
                      )}
                      {job.verified && (
                        <Badge variant="secondary">Verified</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">Posted {job.posted} in {job.category}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <DollarSign size={20} className="text-muted-foreground mr-2" />
                        <div>
                          <p className="font-medium">{job.budget.amount}</p>
                          <p className="text-sm text-muted-foreground">{job.budget.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={20} className="text-muted-foreground mr-2" />
                        <div>
                          <p className="font-medium">{job.duration}</p>
                          <p className="text-sm text-muted-foreground">{job.experienceLevel} level</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users size={20} className="text-muted-foreground mr-2" />
                        <div>
                          <p className="font-medium">{job.proposals} proposals</p>
                          <p className="text-sm text-muted-foreground">{job.connectsRequired} connects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Heart size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Flag size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {job.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proposal Form */}
            {showProposalForm ? (
              <Card className="upwork-shadow">
                <CardHeader>
                  <CardTitle>Submit a Proposal</CardTitle>
                  <CardDescription>
                    Stand out from the competition by crafting a compelling proposal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitProposal} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Describe why you're the perfect fit for this job..."
                        rows={8}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        {coverLetter.length}/5000 characters
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rate">Your Proposed Rate</Label>
                      <div className="relative">
                        <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="rate"
                          type="number"
                          value={proposedRate}
                          onChange={(e) => setProposedRate(e.target.value)}
                          placeholder="4000"
                          className="pl-10"
                          required
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Client's budget: {job.budget.amount}
                      </p>
                    </div>

                    <div className="bg-upwork-light-green/20 border border-upwork-green/30 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Connects required:</strong> {job.connectsRequired} connects
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        You'll use {job.connectsRequired} connects to submit this proposal
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit" className="btn-primary">
                        Submit Proposal
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowProposalForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center">
                <Button 
                  className="btn-primary px-8 py-3"
                  onClick={() => setShowProposalForm(true)}
                >
                  Apply Now
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Information */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">About the Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.client.avatar} />
                    <AvatarFallback>{job.client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{job.client.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-warning" />
                      <span className="text-sm">{job.client.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">{job.client.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Member since</p>
                    <p className="font-medium">{job.client.memberSince}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total spent</p>
                    <p className="font-medium">{job.client.totalSpent}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total hires</p>
                    <p className="font-medium">{job.client.hires}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Recent activity</p>
                  <p className="text-sm">{job.client.jobsPosted} jobs posted</p>
                </div>

                <Button variant="outline" className="w-full">
                  View Client Profile
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarJobs.map((similarJob) => (
                  <div key={similarJob.id} className="border border-border rounded-lg p-3 hover:bg-upwork-light-green/10 transition-colors">
                    <h4 className="font-medium text-sm mb-2 hover:text-upwork-green cursor-pointer">
                      {similarJob.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {similarJob.budget}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Posted {similarJob.posted}
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View More Jobs
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="upwork-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tips for Success</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Award size={16} className="text-upwork-green mt-0.5" />
                  <p>Personalize your proposal to show you understand the project</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Award size={16} className="text-upwork-green mt-0.5" />
                  <p>Highlight relevant experience and skills</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Award size={16} className="text-upwork-green mt-0.5" />
                  <p>Ask clarifying questions to show engagement</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Award size={16} className="text-upwork-green mt-0.5" />
                  <p>Include examples of similar work you've done</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;