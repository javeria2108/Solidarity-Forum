// app/dashboard/volunteer/page.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Clock,
  Users,
  Award,
  Search,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import {
  useVolunteerStats,
  useVolunteerAssignments,
  useOpportunities,
  useApplyToOpportunity,
} from "@/lib/hooks/useDashboardData";
import { OpportunityType, UrgencyLevel } from "@/generated/prisma";

const VolunteerDashboard = () => {
  const [opportunityFilters, setOpportunityFilters] = useState({
    search: "",
    category: "all",
    type: undefined as OpportunityType | undefined,
    urgency: undefined as UrgencyLevel | undefined,
    location: "",
    isRemote: undefined as boolean | undefined,
  });

  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);

  const { stats, loading: statsLoading } = useVolunteerStats();
  const { assignments, loading: assignmentsLoading } =
    useVolunteerAssignments();
  const { opportunities, loading: opportunitiesLoading } =
    useOpportunities(opportunityFilters);
  const { applyToOpportunity, loading: applyLoading } = useApplyToOpportunity();

  const handleApply = async () => {
    if (!selectedOpportunity) return;

    try {
      await applyToOpportunity(selectedOpportunity.id, coverLetter);
      setIsApplyDialogOpen(false);
      setCoverLetter("");
      setSelectedOpportunity(null);
      // Show success message
    } catch (error) {
      // Handle error
      console.error("Application failed:", error);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "CRITICAL":
        return "bg-red-100 text-red-800 border-red-200";
      case "HIGH":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "LOW":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "MEDICAL":
        return "🏥";
      case "MENTAL_HEALTH":
        return "🧠";
      case "EDUCATION":
        return "📚";
      case "EMERGENCY":
        return "🚨";
      case "LOGISTICS":
        return "📦";
      case "LEGAL":
        return "⚖️";
      case "TECHNOLOGY":
        return "💻";
      case "FUNDRAISING":
        return "💰";
      default:
        return "🤝";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "on_hold":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Volunteer Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Make a difference in Gaza - Your skills can save lives
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.totalHours || 0}
              </div>
              <p className="text-xs text-red-100">
                Hours contributed to Gaza relief
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                People Helped
              </CardTitle>
              <Heart className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.peopleHelped || 0}
              </div>
              <p className="text-xs text-green-100">
                Lives positively impacted
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Opportunities
              </CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.activeOpportunities || 0}
              </div>
              <p className="text-xs text-blue-100">Currently engaged in</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Impact Score
              </CardTitle>
              <Award className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.impactScore?.toFixed(1) || "0.0"}
              </div>
              <p className="text-xs text-purple-100">Community impact rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green-600" />
              Current Assignments
            </CardTitle>
            <CardDescription>
              Your active volunteer assignments and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            {assignmentsLoading ? (
              <div className="text-center py-8">Loading assignments...</div>
            ) : assignments?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No active assignments yet. Apply to opportunities below!
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {assignments?.map((assignment) => (
                  <Card
                    key={assignment.id}
                    className="border-l-4 border-l-green-500"
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-lg">
                            {assignment.title}
                          </h3>
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status.replace("_", " ")}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Organization: {assignment.organization}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {assignment.hoursLogged}h logged
                          </span>
                          {assignment.nextSession && (
                            <span className="flex items-center gap-1 text-blue-600">
                              <Calendar className="h-4 w-4" />
                              Next:{" "}
                              {new Date(
                                assignment.nextSession
                              ).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Available Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-600" />
              Available Opportunities
            </CardTitle>
            <CardDescription>
              Find and apply to volunteer opportunities in Gaza relief efforts
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search opportunities..."
                  value={opportunityFilters.search}
                  onChange={(e) =>
                    setOpportunityFilters((prev) => ({
                      ...prev,
                      search: e.target.value,
                    }))
                  }
                  className="pl-10"
                />
              </div>

              <Select
                value={opportunityFilters.category}
                onValueChange={(value) =>
                  setOpportunityFilters((prev) => ({
                    ...prev,
                    category: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="MEDICAL">Medical</SelectItem>
                  <SelectItem value="MENTAL_HEALTH">Mental Health</SelectItem>
                  <SelectItem value="EDUCATION">Education</SelectItem>
                  <SelectItem value="EMERGENCY">Emergency</SelectItem>
                  <SelectItem value="LOGISTICS">Logistics</SelectItem>
                  <SelectItem value="LEGAL">Legal</SelectItem>
                  <SelectItem value="TECHNOLOGY">Technology</SelectItem>
                  <SelectItem value="FUNDRAISING">Fundraising</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={opportunityFilters.type || "ANY"}
                onValueChange={(value) =>
                  setOpportunityFilters((prev) => ({
                    ...prev,
                    type: (value as OpportunityType) || undefined,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ANY">All Types</SelectItem>
                  <SelectItem value="REMOTE">Remote</SelectItem>
                  <SelectItem value="ON_SITE">On-site</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={opportunityFilters.urgency || "ANY"}
                onValueChange={(value) =>
                  setOpportunityFilters((prev) => ({
                    ...prev,
                    urgency: (value as UrgencyLevel) || undefined,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ANY">All Urgencies</SelectItem>
                  <SelectItem value="CRITICAL">Critical</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Location..."
                value={opportunityFilters.location}
                onChange={(e) =>
                  setOpportunityFilters((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              />
            </div>

            {/* Opportunities List */}
            {opportunitiesLoading ? (
              <div className="text-center py-8">Loading opportunities...</div>
            ) : opportunities?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No opportunities found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {opportunities?.map((opportunity) => (
                  <Card
                    key={opportunity.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-2">
                            <span className="text-2xl">
                              {getCategoryIcon(opportunity.category)}
                            </span>
                            <div>
                              <h3 className="font-semibold text-lg line-clamp-2">
                                {opportunity.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {opportunity.organizationName}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={getUrgencyColor(opportunity.urgency)}
                          >
                            {opportunity.urgency}
                          </Badge>
                        </div>

                        <p className="text-sm text-gray-700 line-clamp-3">
                          {opportunity.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {opportunity.skillsNeeded
                            .slice(0, 3)
                            .map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          {opportunity.skillsNeeded.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{opportunity.skillsNeeded.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {opportunity.isRemote
                              ? "Remote"
                              : opportunity.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {opportunity.applicants}/{opportunity.maxVolunteers}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Posted:{" "}
                            {new Date(
                              opportunity.postedDate
                            ).toLocaleDateString()}
                          </span>
                          <Dialog
                            open={isApplyDialogOpen}
                            onOpenChange={setIsApplyDialogOpen}
                          >
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() =>
                                  setSelectedOpportunity(opportunity)
                                }
                              >
                                Apply Now
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>
                                  Apply for {selectedOpportunity?.title}
                                </DialogTitle>
                                <DialogDescription>
                                  Tell the organization why you're the right fit
                                  for this Gaza relief opportunity.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="text-sm font-medium mb-2 block">
                                    Cover Letter (Optional)
                                  </label>
                                  <Textarea
                                    placeholder="Explain your motivation, relevant skills, and how you can contribute to this Gaza relief effort..."
                                    value={coverLetter}
                                    onChange={(e) =>
                                      setCoverLetter(e.target.value)
                                    }
                                    rows={6}
                                  />
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => setIsApplyDialogOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={handleApply}
                                    disabled={applyLoading}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    {applyLoading
                                      ? "Applying..."
                                      : "Submit Application"}
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
