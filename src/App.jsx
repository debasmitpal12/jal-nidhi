import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing + Auth
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";

// Dashboard files
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import ProjectSubmission from "./components/ProjectSubmission";
import MyProjects from "./components/MyProjects";
import MRVReview from "./components/MRVReview";
import Marketplace from "./components/MarketPlace";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication Page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Default dashboard home */}
          <Route index element={<DashboardHome />} />

          {/* Project submission page */}
          <Route path="submit" element={<ProjectSubmission />} />

          {/* My Projects page */}
          <Route path="projects" element={<MyProjects />} />

          {/* MRV Review page */}
          <Route path="mrv-review" element={<MRVReview />} />
          {/* Marketplace page */}
          <Route path="marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </Router>
  );
}
