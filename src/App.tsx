import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserTypeSelection from "./pages/UserTypeSelection";
import ProfileCreation from "./pages/ProfileCreation";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import FindWork from "./pages/FindWork";
import JobDetails from "./pages/JobDetails";
import FreelancerProfile from "./pages/FreelancerProfile";
import Messages from "./pages/Messages";
import Proposals from "./pages/Proposals";
import Settings from "./pages/Settings";
import PostJob from "./pages/PostJob";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/freelancer/:id" element={<FreelancerProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
