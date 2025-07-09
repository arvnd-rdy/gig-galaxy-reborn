import { Link } from "react-router-dom";
import { User, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UserTypeSelection = () => {
  return (
    <div className="min-h-screen bg-upwork-light-gray">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Join as a freelancer or hire talent
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose your account type to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Freelancer Option */}
            <Card className="upwork-shadow hover:upwork-shadow-lg transition-shadow cursor-pointer border-2 hover:border-upwork-green group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-upwork-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-upwork-green group-hover:text-white transition-colors">
                  <User size={32} />
                </div>
                <CardTitle className="text-xl">I'm a freelancer, looking for work</CardTitle>
                <CardDescription>
                  I want to offer my skills and services to clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Browse and apply to jobs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Create a portfolio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Get paid securely</span>
                </div>
                <Link to="/profile-creation?type=freelancer" className="block mt-6">
                  <Button className="w-full btn-primary">
                    Join as a Freelancer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Client Option */}
            <Card className="upwork-shadow hover:upwork-shadow-lg transition-shadow cursor-pointer border-2 hover:border-upwork-green group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-upwork-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-upwork-green group-hover:text-white transition-colors">
                  <Building2 size={32} />
                </div>
                <CardTitle className="text-xl">I'm a client, hiring for a project</CardTitle>
                <CardDescription>
                  I want to find and hire talented freelancers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Post jobs and hire talent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Manage projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-upwork-green" />
                  <span className="text-sm">Pay safely</span>
                </div>
                <Link to="/profile-creation?type=client" className="block mt-6">
                  <Button className="w-full btn-primary">
                    Join as a Client
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Looking for something else?{" "}
              <Link to="/help" className="text-upwork-green hover:underline">
                Visit our Help Center
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;