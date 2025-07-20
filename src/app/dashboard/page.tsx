// src/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Users,
  Globe,
  Shield,
  MapPin,
  Clock,
  User,
  Plus,
  Search,
  Filter,
  Bell,
  Settings,
  LogOut,
  Calendar,
  MessageCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// Mock data - replace with actual API calls
const mockOpportunities = [
  {
    id: 1,
    title: "Medical Consultation Support",
    organization: "Gaza Health Initiative",
    category: "medical",
    type: "remote",
    urgency: "high",
    description: "Provide remote medical consultations for patients in Gaza",
    timeCommitment: "2-4 hours/week",
    skillsNeeded: ["Medical Degree", "Arabic/English"],
    location: "Remote",
    postedDate: "2024-01-15",
    applicants: 12,
  },
  {
    id: 2,
    title: "Mental Health Counseling",
    organization: "Palestine Wellness Center",
    category: "mental-health",
    type: "remote",
    urgency: "medium",
    description: "Provide trauma counseling and mental health support",
    timeCommitment: "3-5 hours/week",
    skillsNeeded: ["Psychology", "Trauma Therapy"],
    location: "Remote",
    postedDate: "2024-01-14",
    applicants: 8,
  },
  {
    id: 3,
    title: "Educational Support Coordinator",
    organization: "Gaza Learning Hub",
    category: "education",
    type: "hybrid",
    urgency: "medium",
    description: "Help coordinate online educational programs",
    timeCommitment: "5-8 hours/week",
    skillsNeeded: ["Education", "Program Management"],
    location: "Remote/On-site",
    postedDate: "2024-01-13",
    applicants: 15,
  },
];

const mockMyOpportunities = [
  {
    id: 1,
    title: "Medical Consultation Support",
    status: "active",
    hoursLogged: 12,
    nextSession: "2024-01-20T14:00:00Z",
    organization: "Gaza Health Initiative",
  },
  {
    id: 2,
    title: "Mental Health Counseling",
    status: "pending",
    hoursLogged: 0,
    nextSession: null,
    organization: "Palestine Wellness Center",
  },
];

const mockStats = {
  volunteer: {
    totalHours: 48,
    peopleHelped: 23,
    activeOpportunities: 2,
    impactScore: 8.7,
  },
  organization: {
    totalRequests: 12,
    activeVolunteers: 28,
    completedProjects: 5,
    averageRating: 4.8,
  },
};

interface DashboardProps {}

export default function DashboardPage({}: DashboardProps) {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("opportunities");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const isVolunteer = user?.user_metadata?.user_type === "volunteer";
  const isOrganization = user?.user_metadata?.user_type === "organization";

  const getCategoryColor = (category: string) => {
    const colors = {
      medical: "bg-emerald-100 text-emerald-700 border-emerald-200",
      "mental-health": "bg-orange-100 text-orange-700 border-orange-200",
      education: "bg-blue-100 text-blue-700 border-blue-200",
      emergency: "bg-red-100 text-red-700 border-red-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  const getUrgencyColor = (urgency: string) => {
    const colors = {
      high: "bg-red-500",
      medium: "bg-yellow-500",
      low: "bg-green-500",
    };
    return colors[urgency as keyof typeof colors] || "bg-gray-500";
  };

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || opp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Solidarity Forum
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Welcome back, {user?.user_metadata?.full_name || "User"}
              </h1>
              <p className="text-gray-600 mt-1">
                {isVolunteer && "Continue making a difference with your skills"}
                {isOrganization && "Manage your volunteer opportunities"}
              </p>
            </div>
            {isOrganization && (
              <Link href="/dashboard/create-opportunity">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Opportunity
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {isVolunteer && (
            <>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.volunteer.totalHours}
                      </p>
                      <p className="text-sm text-gray-600">Hours Volunteered</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.volunteer.peopleHelped}
                      </p>
                      <p className="text-sm text-gray-600">People Helped</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.volunteer.activeOpportunities}
                      </p>
                      <p className="text-sm text-gray-600">
                        Active Opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.volunteer.impactScore}
                      </p>
                      <p className="text-sm text-gray-600">Impact Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {isOrganization && (
            <>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.organization.totalRequests}
                      </p>
                      <p className="text-sm text-gray-600">Total Requests</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.organization.activeVolunteers}
                      </p>
                      <p className="text-sm text-gray-600">Active Volunteers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.organization.completedProjects}
                      </p>
                      <p className="text-sm text-gray-600">
                        Completed Projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {mockStats.organization.averageRating}
                      </p>
                      <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-4 mb-6">
            <TabsTrigger value="opportunities">
              {isVolunteer ? "Find Opportunities" : "My Opportunities"}
            </TabsTrigger>
            <TabsTrigger value="my-work">
              {isVolunteer ? "My Work" : "Applications"}
            </TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            {isVolunteer && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Available Opportunities</CardTitle>

                  {/* Search and Filter */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search opportunities..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <select
                      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="medical">Medical</option>
                      <option value="mental-health">Mental Health</option>
                      <option value="education">Education</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {filteredOpportunities.map((opportunity) => (
                    <Card
                      key={opportunity.id}
                      className="border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg text-gray-900">
                                  {opportunity.title}
                                </h3>
                                <p className="text-gray-600">
                                  {opportunity.organization}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div
                                  className={`w-2 h-2 rounded-full ${getUrgencyColor(
                                    opportunity.urgency
                                  )}`}
                                />
                                <Badge
                                  variant="outline"
                                  className={getCategoryColor(
                                    opportunity.category
                                  )}
                                >
                                  {opportunity.category.replace("-", " ")}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-gray-700">
                              {opportunity.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {opportunity.skillsNeeded.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{opportunity.timeCommitment}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{opportunity.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{opportunity.applicants} applicants</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                              Apply Now
                            </Button>
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* My Work Tab */}
          <TabsContent value="my-work" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>
                  {isVolunteer
                    ? "My Active Opportunities"
                    : "Recent Applications"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockMyOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">
                            {opportunity.title}
                          </h3>
                          <p className="text-gray-600">
                            {opportunity.organization}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge
                              variant={
                                opportunity.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {opportunity.status}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              {opportunity.hoursLogged} hours logged
                            </span>
                            {opportunity.nextSession && (
                              <span className="text-sm text-gray-600">
                                Next:{" "}
                                {new Date(
                                  opportunity.nextSession
                                ).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No messages yet
                  </h3>
                  <p className="text-gray-600">
                    Your conversations with organizations and volunteers will
                    appear here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Profile Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Update your profile information, skills, and availability.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
