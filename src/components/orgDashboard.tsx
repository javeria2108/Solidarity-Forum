// app/dashboard/organization/page.tsx
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
  Building2,
  Users,
  FileText,
  Star,
  Search,
  Plus,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  MapPin,
  AlertCircle,
} from "lucide-react";
import {
  useOrganizationStats,
  useOrganizationOpportunities,
  useOrganizationApplications,
} from "@/lib/hooks/useDashboardData";

const OrganizationDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);

  const { stats, loading: statsLoading } = useOrganizationStats();
  const { opportunities, loading: opportunitiesLoading } =
    useOrganizationOpportunities();
  const { applications, loading: applicationsLoading } =
    useOrganizationApplications();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "reviewing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "withdrawn":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getOpportunityStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
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

  const filteredApplications = applications?.filter((app: any) => {
    const matchesSearch =
      app.volunteerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.opportunityTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || app.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Organization Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage volunteers and coordinate Gaza relief efforts
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Requests
              </CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.totalRequests || 0}
              </div>
              <p className="text-xs text-blue-100">
                Volunteer requests received
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Volunteers
              </CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.activeVolunteers || 0}
              </div>
              <p className="text-xs text-green-100">
                Currently engaged volunteers
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Projects
              </CardTitle>
              <Building2 className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.completedProjects || 0}
              </div>
              <p className="text-xs text-purple-100">
                Successfully finished projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Rating
              </CardTitle>
              <Star className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading
                  ? "..."
                  : stats?.averageRating?.toFixed(1) || "0.0"}
              </div>
              <p className="text-xs text-orange-100">
                Volunteer satisfaction rating
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Volunteer Applications
            </CardTitle>
            <CardDescription>
              Review and manage volunteer applications for your opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by volunteer name or opportunity..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewing">Reviewing</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="withdrawn">Withdrawn</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Applications List */}
            {applicationsLoading ? (
              <div className="text-center py-8">Loading applications...</div>
            ) : filteredApplications?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No applications found matching your criteria.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredApplications?.map((application: any) => (
                  <Card
                    key={application.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                              {application.volunteerName
                                .charAt(0)
                                .toUpperCase()}
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                {application.volunteerName}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Applied for: {application.opportunityTitle}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Applied:{" "}
                              {new Date(
                                application.appliedAt
                              ).toLocaleDateString()}
                            </span>
                            {application.reviewedAt && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Reviewed:{" "}
                                {new Date(
                                  application.reviewedAt
                                ).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                          <Dialog
                            open={isApplicationDialogOpen}
                            onOpenChange={setIsApplicationDialogOpen}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setSelectedApplication(application)
                                }
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>
                                  Application from{" "}
                                  {selectedApplication?.volunteerName}
                                </DialogTitle>
                                <DialogDescription>
                                  For: {selectedApplication?.opportunityTitle}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium mb-2">
                                    Cover Letter
                                  </h4>
                                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                                    {selectedApplication?.coverLetter ||
                                      "No cover letter provided."}
                                  </p>
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    className="text-red-600 border-red-200"
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Reject
                                  </Button>
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Accept
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

        {/* Opportunities Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-green-600" />
                Your Opportunities
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-1" />
                Create New
              </Button>
            </CardTitle>
            <CardDescription>
              Manage your volunteer opportunities and track their progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            {opportunitiesLoading ? (
              <div className="text-center py-8">Loading opportunities...</div>
            ) : opportunities?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No opportunities created yet. Create your first opportunity to
                start recruiting volunteers!
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {opportunities?.map((opportunity: any) => (
                  <Card
                    key={opportunity.id}
                    className="hover:shadow-lg transition-shadow"
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
                              <p className="text-sm text-gray-600 capitalize">
                                {opportunity.category
                                  .toLowerCase()
                                  .replace("_", " ")}
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

                        <div className="flex justify-between items-center text-sm">
                          <Badge
                            className={getOpportunityStatusColor(
                              opportunity.status
                            )}
                          >
                            {opportunity.status}
                          </Badge>
                          <span className="text-gray-600">
                            {opportunity.type === "REMOTE"
                              ? "Remote"
                              : opportunity.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center p-2 bg-blue-50 rounded">
                            <div className="font-semibold text-blue-600">
                              {opportunity.applications}
                            </div>
                            <div className="text-blue-700">Applications</div>
                          </div>
                          <div className="text-center p-2 bg-green-50 rounded">
                            <div className="font-semibold text-green-600">
                              {opportunity.assignments}
                            </div>
                            <div className="text-green-700">Active</div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            Max: {opportunity.maxVolunteers} volunteers
                          </span>
                          <span>
                            Created:{" "}
                            {new Date(
                              opportunity.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            View Details
                          </Button>
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

export default OrganizationDashboard;
