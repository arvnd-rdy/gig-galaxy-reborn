import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Bell, Shield, CreditCard, Briefcase, Eye, Globe, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    title: "Full Stack Developer & UI/UX Designer",
    overview: "Experienced Full Stack Developer with 6+ years of expertise in React, Node.js, and modern web technologies.",
    hourlyRate: "65",
    availability: "30"
  });

  const [notifications, setNotifications] = useState({
    emailJobAlerts: true,
    emailMessages: true,
    emailProposals: true,
    pushJobAlerts: false,
    pushMessages: true,
    pushProposals: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEarnings: false,
    showLocation: true,
    allowMessages: true
  });

  const updateProfileData = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const updateNotifications = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const updatePrivacy = (field: string, value: boolean) => {
    setPrivacy(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/freelancer-dashboard" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={20} className="mr-2" />
                Back to Dashboard
              </Link>
            </div>
            <Link to="/freelancer-dashboard" className="text-2xl font-bold text-upwork-green">
              Upwork
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card className="upwork-shadow sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Settings</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <a href="#profile" className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-upwork-green bg-upwork-light-green/20 border-r-2 border-upwork-green">
                    <User size={16} />
                    <span>Profile</span>
                  </a>
                  <a href="#account" className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-upwork-light-green/10">
                    <Shield size={16} />
                    <span>Account & Security</span>
                  </a>
                  <a href="#notifications" className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-upwork-light-green/10">
                    <Bell size={16} />
                    <span>Notifications</span>
                  </a>
                  <a href="#billing" className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-upwork-light-green/10">
                    <CreditCard size={16} />
                    <span>Billing & Payments</span>
                  </a>
                  <a href="#privacy" className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-upwork-light-green/10">
                    <Eye size={16} />
                    <span>Privacy</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              {/* Profile Settings */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5c" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" size="sm">Change Photo</Button>
                        <p className="text-xs text-muted-foreground mt-1">JPG, PNG max 5MB</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => updateProfileData("firstName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => updateProfileData("lastName", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        value={profileData.title}
                        onChange={(e) => updateProfileData("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="overview">Professional Overview</Label>
                      <Textarea
                        id="overview"
                        value={profileData.overview}
                        onChange={(e) => updateProfileData("overview", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={profileData.hourlyRate}
                          onChange={(e) => updateProfileData("hourlyRate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability (hrs/week)</Label>
                        <Input
                          id="availability"
                          type="number"
                          value={profileData.availability}
                          onChange={(e) => updateProfileData("availability", e.target.value)}
                        />
                      </div>
                    </div>

                    <Button className="btn-primary">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Account Settings */}
              <TabsContent value="account" className="space-y-6">
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Manage your account details and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => updateProfileData("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => updateProfileData("phone", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => updateProfileData("location", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <select 
                          id="timezone"
                          value={profileData.timezone}
                          onChange={(e) => updateProfileData("timezone", e.target.value)}
                          className="w-full p-2 border border-border rounded-lg"
                        >
                          <option>PST (UTC-8)</option>
                          <option>EST (UTC-5)</option>
                          <option>GMT (UTC+0)</option>
                          <option>CET (UTC+1)</option>
                        </select>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline">Change Password</Button>
                        <Button variant="outline">Enable Two-Factor Authentication</Button>
                      </div>
                    </div>

                    <Button className="btn-primary">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Settings */}
              <TabsContent value="notifications" className="space-y-6">
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to be notified about activity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Job Alerts</p>
                            <p className="text-sm text-muted-foreground">Receive emails about new job opportunities</p>
                          </div>
                          <Switch
                            checked={notifications.emailJobAlerts}
                            onCheckedChange={(checked) => updateNotifications("emailJobAlerts", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Messages</p>
                            <p className="text-sm text-muted-foreground">Get notified about new messages</p>
                          </div>
                          <Switch
                            checked={notifications.emailMessages}
                            onCheckedChange={(checked) => updateNotifications("emailMessages", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Proposal Updates</p>
                            <p className="text-sm text-muted-foreground">Updates about your submitted proposals</p>
                          </div>
                          <Switch
                            checked={notifications.emailProposals}
                            onCheckedChange={(checked) => updateNotifications("emailProposals", checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Job Alerts</p>
                            <p className="text-sm text-muted-foreground">Browser notifications for new jobs</p>
                          </div>
                          <Switch
                            checked={notifications.pushJobAlerts}
                            onCheckedChange={(checked) => updateNotifications("pushJobAlerts", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Messages</p>
                            <p className="text-sm text-muted-foreground">Instant message notifications</p>
                          </div>
                          <Switch
                            checked={notifications.pushMessages}
                            onCheckedChange={(checked) => updateNotifications("pushMessages", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Proposal Updates</p>
                            <p className="text-sm text-muted-foreground">Real-time proposal status updates</p>
                          </div>
                          <Switch
                            checked={notifications.pushProposals}
                            onCheckedChange={(checked) => updateNotifications("pushProposals", checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="btn-primary">Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing" className="space-y-6">
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Billing & Payments</CardTitle>
                    <CardDescription>Manage your payment methods and billing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Payment Methods</h3>
                      <div className="border border-border rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                              PP
                            </div>
                            <div>
                              <p className="font-medium">PayPal</p>
                              <p className="text-sm text-muted-foreground">sarah.johnson@example.com</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                      <Button variant="outline">Add Payment Method</Button>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Tax Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Tax forms submitted</span>
                          <span className="text-green-600">✓ Complete</span>
                        </div>
                        <Button variant="outline">Update Tax Information</Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Earnings</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-upwork-green">$12,450</p>
                          <p className="text-sm text-muted-foreground">This Month</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">$89,320</p>
                          <p className="text-sm text-muted-foreground">This Year</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">$125,000+</p>
                          <p className="text-sm text-muted-foreground">All Time</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy Settings */}
              <TabsContent value="privacy" className="space-y-6">
                <Card className="upwork-shadow">
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control who can see your information and contact you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-muted-foreground">Make your profile visible to clients</p>
                        </div>
                        <Switch
                          checked={privacy.profileVisible}
                          onCheckedChange={(checked) => updatePrivacy("profileVisible", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Earnings</p>
                          <p className="text-sm text-muted-foreground">Display your total earnings on profile</p>
                        </div>
                        <Switch
                          checked={privacy.showEarnings}
                          onCheckedChange={(checked) => updatePrivacy("showEarnings", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Location</p>
                          <p className="text-sm text-muted-foreground">Display your location to clients</p>
                        </div>
                        <Switch
                          checked={privacy.showLocation}
                          onCheckedChange={(checked) => updatePrivacy("showLocation", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Messages</p>
                          <p className="text-sm text-muted-foreground">Let clients contact you directly</p>
                        </div>
                        <Switch
                          checked={privacy.allowMessages}
                          onCheckedChange={(checked) => updatePrivacy("allowMessages", checked)}
                        />
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Data & Privacy</h3>
                      <div className="space-y-2">
                        <Button variant="outline">Download My Data</Button>
                        <Button variant="outline">Delete Account</Button>
                      </div>
                    </div>

                    <Button className="btn-primary">Save Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;