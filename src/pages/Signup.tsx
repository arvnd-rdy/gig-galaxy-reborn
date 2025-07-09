import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - redirect to user type selection
    window.location.href = "/user-type-selection";
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-upwork-green mb-2">Upwork</h1>
          <h2 className="text-xl font-semibold text-foreground">Sign up for your account</h2>
        </div>

        <Card className="upwork-shadow-lg">
          <CardHeader>
            <CardTitle>Get started</CardTitle>
            <CardDescription>
              Already have an account?{" "}
              <Link to="/login" className="text-upwork-green hover:underline">
                Log in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    placeholder="8+ characters"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum 8 characters, with at least one number and one letter
                </p>
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" required />
                  <span className="text-sm">
                    Yes, I understand and agree to the{" "}
                    <Link to="/terms" className="text-upwork-green hover:underline">
                      Upwork Terms of Service
                    </Link>
                    , including the{" "}
                    <Link to="/user-agreement" className="text-upwork-green hover:underline">
                      User Agreement
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-upwork-green hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <Button type="submit" className="w-full btn-primary">
                Create my account
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-2 text-muted-foreground">or</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" type="button">
                Continue with Google
              </Button>
              
              <Button variant="outline" className="w-full" type="button">
                Continue with Apple
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;