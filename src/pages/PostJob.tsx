import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, HelpCircle, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    skills: [] as string[],
    projectType: "", // hourly or fixed
    budgetType: "",
    budgetMin: "",
    budgetMax: "",
    fixedBudget: "",
    experienceLevel: "",
    duration: "",
    timeCommitment: "",
    screening: {
      questions: [] as string[],
      requireCoverLetter: true,
      requirePortfolio: false
    }
  });

  const totalSteps = 4;
  const steps = ["Job Details", "Skills & Expertise", "Budget & Timeline", "Review & Post"];

  const categories = [
    "Web Development",
    "Mobile Development",
    "Design & Creative", 
    "Writing & Translation",
    "Marketing & Sales",
    "Data Science & Analytics",
    "Engineering & Architecture",
    "Legal",
    "Admin Support",
    "Customer Service"
  ];

  const suggestedSkills = [
    "JavaScript", "React", "Node.js", "Python", "UI/UX Design", "Figma", 
    "Content Writing", "SEO", "Digital Marketing", "Data Analysis", "WordPress"
  ];

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
      // Submit job post
      alert("Job posted successfully!");
      window.location.href = "/client-dashboard";
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
                placeholder="e.g. Build a responsive website with React"
              />
              <p className="text-xs text-muted-foreground">
                A good title attracts the right freelancers
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select 
                id="category"
                value={formData.category}
                onChange={(e) => updateFormData("category", e.target.value)}
                className="w-full p-3 border border-border rounded-lg"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
                placeholder="Describe your project in detail..."
                rows={8}
              />
              <p className="text-xs text-muted-foreground">
                {formData.description.length}/5000 characters
              </p>
            </div>

            <div className="bg-upwork-light-green/20 border border-upwork-green/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">💡 Tips for a great job post:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Be specific about what you need</li>
                <li>• Include project goals and requirements</li>
                <li>• Mention your preferred communication style</li>
                <li>• Set clear expectations for deliverables</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Required Skills</Label>
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
            </div>

            <div>
              <h3 className="font-medium mb-3">Suggested Skills</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill) => (
                  <Button
                    key={skill}
                    variant="outline"
                    size="sm"
                    onClick={() => addSkill(skill)}
                    className="text-xs"
                    disabled={formData.skills.includes(skill)}
                  >
                    + {skill}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Experience Level</Label>
              <div className="space-y-3">
                {[
                  { value: "entry", label: "Entry Level", desc: "Looking for someone relatively new to this field" },
                  { value: "intermediate", label: "Intermediate", desc: "Looking for substantial experience in this field" },
                  { value: "expert", label: "Expert", desc: "Looking for comprehensive and deep expertise" }
                ].map((level) => (
                  <label key={level.value} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value={level.value}
                      checked={formData.experienceLevel === level.value}
                      onChange={(e) => updateFormData("experienceLevel", e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium">{level.label}</p>
                      <p className="text-sm text-muted-foreground">{level.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>How do you want to pay?</Label>
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer border border-border rounded-lg p-4">
                  <input
                    type="radio"
                    name="projectType"
                    value="hourly"
                    checked={formData.projectType === "hourly"}
                    onChange={(e) => updateFormData("projectType", e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock size={20} className="text-upwork-green" />
                      <p className="font-medium">Hourly rate</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pay for hours worked. Use our time tracking tools.
                    </p>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer border border-border rounded-lg p-4">
                  <input
                    type="radio"
                    name="projectType"
                    value="fixed"
                    checked={formData.projectType === "fixed"}
                    onChange={(e) => updateFormData("projectType", e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign size={20} className="text-upwork-green" />
                      <p className="font-medium">Fixed price</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pay a set amount for the entire project.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {formData.projectType === "hourly" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budgetMin">From ($/hr)</Label>
                    <Input
                      id="budgetMin"
                      type="number"
                      value={formData.budgetMin}
                      onChange={(e) => updateFormData("budgetMin", e.target.value)}
                      placeholder="15"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budgetMax">To ($/hr)</Label>
                    <Input
                      id="budgetMax"
                      type="number"
                      value={formData.budgetMax}
                      onChange={(e) => updateFormData("budgetMax", e.target.value)}
                      placeholder="25"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Time commitment</Label>
                  <select 
                    value={formData.timeCommitment}
                    onChange={(e) => updateFormData("timeCommitment", e.target.value)}
                    className="w-full p-3 border border-border rounded-lg"
                  >
                    <option value="">Select time commitment</option>
                    <option value="less-than-30">Less than 30 hrs/week</option>
                    <option value="30-plus">30+ hrs/week</option>
                  </select>
                </div>
              </div>
            )}

            {formData.projectType === "fixed" && (
              <div className="space-y-2">
                <Label htmlFor="fixedBudget">Project Budget ($)</Label>
                <Input
                  id="fixedBudget"
                  type="number"
                  value={formData.fixedBudget}
                  onChange={(e) => updateFormData("fixedBudget", e.target.value)}
                  placeholder="5000"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Project Duration</Label>
              <select 
                value={formData.duration}
                onChange={(e) => updateFormData("duration", e.target.value)}
                className="w-full p-3 border border-border rounded-lg"
              >
                <option value="">Select duration</option>
                <option value="less-than-1-month">Less than 1 month</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="more-than-6-months">More than 6 months</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Review your job post</h2>
              
              <Card className="upwork-shadow mb-6">
                <CardHeader>
                  <CardTitle>{formData.title || "Your Job Title"}</CardTitle>
                  <CardDescription>{formData.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Description</p>
                    <p className="text-sm">{formData.description || "Your job description will appear here"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      {formData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Budget</p>
                      <p className="font-medium">
                        {formData.projectType === "hourly" 
                          ? `$${formData.budgetMin || "0"} - $${formData.budgetMax || "0"}/hr`
                          : `$${formData.fixedBudget || "0"} fixed`
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Experience</p>
                      <p className="font-medium capitalize">{formData.experienceLevel}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{formData.duration?.replace(/-/g, " ") || "Not specified"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="upwork-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Screening Questions (Optional)</CardTitle>
                  <CardDescription>Add questions to help filter candidates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <Checkbox 
                      checked={formData.screening.requireCoverLetter}
                      onCheckedChange={(checked) => 
                        updateFormData("screening", {
                          ...formData.screening,
                          requireCoverLetter: checked
                        })
                      }
                    />
                    <span className="text-sm">Require cover letter</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <Checkbox 
                      checked={formData.screening.requirePortfolio}
                      onCheckedChange={(checked) => 
                        updateFormData("screening", {
                          ...formData.screening,
                          requirePortfolio: checked
                        })
                      }
                    />
                    <span className="text-sm">Require portfolio</span>
                  </label>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/client-dashboard" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={20} className="mr-2" />
                Back to Dashboard
              </Link>
            </div>
            <Link to="/client-dashboard" className="text-2xl font-bold text-upwork-green">
              Upwork
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Post a Job</h1>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
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
              <span>{currentStep === totalSteps ? "Post Job" : "Next"}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;