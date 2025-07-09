import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, DollarSign, Eye, MessageSquare, MoreVertical, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Proposals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const proposals = [
    {
      id: 1,
      jobTitle: "React Developer for E-commerce Platform",
      client: {
        name: "TechCorp Inc.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        location: "United States"
      },
      proposedRate: "$4,200",
      submittedDate: "2024-03-10",
      status: "Under Review",
      coverLetter: "I am excited to work on your e-commerce platform. With 5+ years of React experience, I've built similar platforms that handle high traffic and complex user interactions. I would love to discuss how I can bring your vision to life.",
      connectsUsed: 6,
      jobBudget: "$3,000 - $5,000",
      clientActivity: "Last seen 2 hours ago",
      interviewing: 3,
      avgProposal: "$3,800"
    },
    {
      id: 2,
      jobTitle: "Full Stack Development for SaaS Platform",
      client: {
        name: "InnovateTech Solutions",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c",
        location: "United Kingdom"
      },
      proposedRate: "$12,000",
      submittedDate: "2024-03-08",
      status: "Interview Scheduled",
      coverLetter: "Your SaaS platform project aligns perfectly with my expertise. I've built several SaaS applications from scratch, including user authentication, payment systems, and scalable architectures. Looking forward to discussing the project details with you.",
      connectsUsed: 6,
      jobBudget: "$8,000 - $15,000",
      clientActivity: "Last seen 1 day ago",
      interviewing: 5,
      avgProposal: "$11,200",
      interviewDate: "March 15, 2024 at 10:00 AM PST"
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer for Mobile App Redesign",
      client: {
        name: "StartupXYZ",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        location: "Canada"
      },
      proposedRate: "$45/hr",
      submittedDate: "2024-03-05",
      status: "Not Selected",
      coverLetter: "I specialize in mobile app design with a focus on user experience. My portfolio includes several successful app redesigns that improved user engagement by 40-60%. I would love to help modernize your app interface.",
      connectsUsed: 4,
      jobBudget: "$35 - $60/hr",
      clientActivity: "Last seen 3 days ago",
      interviewing: 2,
      avgProposal: "$42/hr"
    },
    {
      id: 4,
      jobTitle: "WordPress Website Development", 
      client: {
        name: "Local Business Solutions",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        location: "Australia"
      },
      proposedRate: "$2,800",
      submittedDate: "2024-03-01",
      status: "Hired",
      coverLetter: "I have extensive experience building WordPress websites for small businesses. I focus on creating fast, SEO-optimized sites that drive results. I'm confident I can deliver exactly what you're looking for.",
      connectsUsed: 4,
      jobBudget: "$2,000 - $3,500",
      clientActivity: "Active now",
      interviewing: 1,
      avgProposal: "$2,650",
      projectStarted: "March 3, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Hired":
        return "bg-green-100 text-green-800";
      case "Not Selected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const activeProposals = proposals.filter(p => 
    p.status === "Under Review" || p.status === "Interview Scheduled"
  );
  
  const archivedProposals = proposals.filter(p => 
    p.status === "Hired" || p.status === "Not Selected"
  );

  const ProposalCard = ({ proposal }: { proposal: typeof proposals[0] }) => (
    <Card className="upwork-shadow hover:upwork-shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <Link to={`/job/${proposal.id}`} className="text-lg font-semibold text-foreground hover:text-upwork-green mb-2 block">
              {proposal.jobTitle}
            </Link>
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={getStatusColor(proposal.status)}>
                {proposal.status}
              </Badge>
              {proposal.status === "Interview Scheduled" && (
                <Badge variant="outline">
                  Interview: {proposal.interviewDate}
                </Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical size={16} />
          </Button>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={proposal.client.avatar} />
            <AvatarFallback>{proposal.client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{proposal.client.name}</p>
            <p className="text-sm text-muted-foreground">{proposal.client.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
          <div>
            <p className="text-muted-foreground">Your Proposal</p>
            <p className="font-semibold">{proposal.proposedRate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Client Budget</p>
            <p className="font-medium">{proposal.jobBudget}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Submitted</p>
            <p className="font-medium">{new Date(proposal.submittedDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Connects Used</p>
            <p className="font-medium">{proposal.connectsUsed}</p>
          </div>
        </div>

        <div className="bg-upwork-light-gray rounded-lg p-3 mb-4">
          <p className="text-sm italic text-muted-foreground">
            "{proposal.coverLetter}"
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>Client {proposal.clientActivity}</span>
          <span>Interviewing: {proposal.interviewing} • Avg proposal: {proposal.avgProposal}</span>
        </div>

        <div className="flex space-x-2">
          {proposal.status === "Interview Scheduled" && (
            <Button size="sm" className="btn-primary">
              Join Interview
            </Button>
          )}
          {proposal.status === "Under Review" && (
            <Button size="sm" variant="outline">
              <MessageSquare size={14} className="mr-2" />
              Message Client
            </Button>
          )}
          {proposal.status === "Hired" && (
            <Button size="sm" className="btn-primary">
              View Contract
            </Button>
          )}
          <Button size="sm" variant="outline">
            <Eye size={14} className="mr-2" />
            View Job
          </Button>
          <Button size="sm" variant="outline">
            Edit Proposal
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/freelancer-dashboard" className="flex items-center text-muted-foreground hover:text-foreground lg:hidden">
                <ArrowLeft size={20} className="mr-2" />
                Back
              </Link>
              <Link to="/freelancer-dashboard" className="text-2xl font-bold text-upwork-green">
                Upwork
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/find-work" className="text-foreground hover:text-upwork-green">
                Find Work
              </Link>
              <Link to="/my-jobs" className="text-foreground hover:text-upwork-green">
                My Jobs
              </Link>
              <Link to="/proposals" className="text-upwork-green font-medium">
                Proposals
              </Link>
              <Link to="/messages" className="text-foreground hover:text-upwork-green">
                Messages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">My Proposals</h1>
          <p className="text-muted-foreground">Track and manage all your job proposals</p>
        </div>

        {/* Search and Filters */}
        <Card className="upwork-shadow mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search proposals..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
              <select className="px-3 py-2 border border-border rounded-lg">
                <option>Sort: Newest</option>
                <option>Sort: Oldest</option>
                <option>Sort: Status</option>
                <option>Sort: Amount</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="upwork-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-upwork-green">{proposals.length}</div>
              <div className="text-sm text-muted-foreground">Total Proposals</div>
            </CardContent>
          </Card>
          <Card className="upwork-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{activeProposals.length}</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
          <Card className="upwork-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {proposals.filter(p => p.status === "Hired").length}
              </div>
              <div className="text-sm text-muted-foreground">Hired</div>
            </CardContent>
          </Card>
          <Card className="upwork-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-upwork-green">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Proposals Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="active">
              Active Proposals ({activeProposals.length})
            </TabsTrigger>
            <TabsTrigger value="archived">
              Archived ({archivedProposals.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeProposals.length > 0 ? (
              activeProposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))
            ) : (
              <Card className="upwork-shadow">
                <CardContent className="p-12 text-center">
                  <h3 className="text-lg font-semibold mb-2">No active proposals</h3>
                  <p className="text-muted-foreground mb-4">
                    Start browsing jobs and submit proposals to see them here
                  </p>
                  <Link to="/find-work">
                    <Button className="btn-primary">
                      Browse Jobs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="archived" className="space-y-4">
            {archivedProposals.length > 0 ? (
              archivedProposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))
            ) : (
              <Card className="upwork-shadow">
                <CardContent className="p-12 text-center">
                  <h3 className="text-lg font-semibold mb-2">No archived proposals</h3>
                  <p className="text-muted-foreground">
                    Completed and closed proposals will appear here
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Proposals;