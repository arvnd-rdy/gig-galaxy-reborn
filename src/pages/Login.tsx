import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    window.location.href = "/freelancer-dashboard";
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-upwork-green mb-2">Upwork</h1>
          <h2 className="text-xl font-semibold text-foreground">Log in to your account</h2>
        </div>

        <Card className="upwork-shadow-lg">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Don't have an Upwork account?{" "}
              <Link to="/signup" className="text-upwork-green hover:underline">
                Sign up
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Keep me logged in</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-upwork-green hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full btn-primary">
                Log in
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

export default Login;