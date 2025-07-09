import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Upload, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfileCreation = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "freelancer";
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Common fields
    location: "",
    profilePhoto: null as File | null,
    
    // Freelancer fields
    title: "",
    overview: "",
    skills: [] as string[],
    hourlyRate: "",
    experience: "",
    education: "",
    portfolio: [] as File[],
    
    // Client fields
    companyName: "",
    companySize: "",
    industry: "",
    website: "",
    companyDescription: ""
  });

  const isFreelancer = userType === "freelancer";
  const totalSteps = isFreelancer ? 6 : 4;

  const freelancerSteps = [
    "Personal Info",
    "Professional Info", 
    "Skills & Expertise",
    "Rate & Experience",
    "Education",
    "Portfolio"
  ];

  const clientSteps = [
    "Personal Info",
    "Company Info",
    "Company Details", 
    "Verification"
  ];

  const steps = isFreelancer ? freelancerSteps : clientSteps;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      updateFormData("skills", [...formData.skills, skill]);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateFormData("skills", formData.skills.filter(skill => skill !== skillToRemove));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete profile creation
      const redirectPath = isFreelancer ? "/freelancer-dashboard" : "/client-dashboard";
      window.location.href = redirectPath;
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    if (isFreelancer) {
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-upwork-light-gray rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-muted transition-colors">
                  <Upload size={32} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Upload a profile photo</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    placeholder="City, State, Country"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          );

        case 2:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => updateFormData("title", e.target.value)}
                  placeholder="e.g. Full Stack Developer, Graphic Designer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overview">Professional Overview</Label>
                <Textarea
                  id="overview"
                  value={formData.overview}
                  onChange={(e) => updateFormData("overview", e.target.value)}
                  placeholder="Write a brief description about your professional background, skills, and what makes you unique..."
                  rows={6}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.overview.length}/5000 characters
                </p>
              </div>
            </div>
          );

        case 3:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Skills & Expertise</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {formData.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} ×
                    </Badge>
                  ))}
                </div>
                <Input
                  placeholder="Type a skill and press Enter"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {["JavaScript", "React", "Node.js", "Python", "Design", "Writing", "Marketing"].map((suggestedSkill) => (
                    <Button
                      key={suggestedSkill}
                      variant="outline"
                      size="sm"
                      onClick={() => addSkill(suggestedSkill)}
                      className="text-xs"
                    >
                      + {suggestedSkill}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          );

        case 4:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                <div className="relative">
                  <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => updateFormData("hourlyRate", e.target.value)}
                    placeholder="25.00"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <select 
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => updateFormData("experience", e.target.value)}
                  className="w-full p-3 border border-border rounded-lg"
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="expert">Expert (6+ years)</option>
                </select>
              </div>
            </div>
          );

        case 5:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  id="education"
                  value={formData.education}
                  onChange={(e) => updateFormData("education", e.target.value)}
                  placeholder="Add your educational background, certifications, or relevant courses..."
                  rows={4}
                />
              </div>
            </div>
          );

        case 6:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Portfolio</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Upload your work samples</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add images, documents, or links to showcase your best work
                  </p>
                  <Button variant="outline">Choose Files</Button>
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    } else {
      // Client steps
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-upwork-light-gray rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-muted transition-colors">
                  <Upload size={32} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Upload a profile photo</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    placeholder="City, State, Country"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          );

        case 2:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>
          );

        case 3:
          return (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <select 
                  id="companySize"
                  value={formData.companySize}
                  onChange={(e) => updateFormData("companySize", e.target.value)}
                  className="w-full p-3 border border-border rounded-lg"
                >
                  <option value="">Select company size</option>
                  <option value="1-9">1-9 employees</option>
                  <option value="10-99">10-99 employees</option>
                  <option value="100-999">100-999 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <select 
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => updateFormData("industry", e.target.value)}
                  className="w-full p-3 border border-border rounded-lg"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyDescription">Company Description</Label>
                <Textarea
                  id="companyDescription"
                  value={formData.companyDescription}
                  onChange={(e) => updateFormData("companyDescription", e.target.value)}
                  placeholder="Tell us about your company..."
                  rows={4}
                />
              </div>
            </div>
          );

        case 4:
          return (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-upwork-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Verification Complete!</h3>
              <p className="text-muted-foreground">
                Your profile is ready. You can now start posting jobs and finding talent.
              </p>
            </div>
          );

        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">
                {isFreelancer ? "Create your freelancer profile" : "Set up your company profile"}
              </h1>
              <span className="text-sm text-muted-foreground">
                {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="w-full bg-upwork-light-gray rounded-full h-2">
              <div 
                className="bg-upwork-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <span 
                  key={index}
                  className={`text-xs ${index < currentStep ? 'text-upwork-green' : 'text-muted-foreground'}`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="upwork-shadow-lg mb-8">
            <CardHeader>
              <CardTitle>{steps[currentStep - 1]}</CardTitle>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Button>
            
            <Button 
              onClick={nextStep}
              className="btn-primary flex items-center space-x-2"
            >
              <span>{currentStep === totalSteps ? "Complete Profile" : "Next"}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;