// lib/hooks/useDashboardData.ts
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import {
  OpportunityCategory,
  OpportunityType,
  UrgencyLevel,
} from "@/generated/prisma";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: OpportunityCategory;
  type: OpportunityType;
  urgency: UrgencyLevel;
  skillsNeeded: string[];
  timeCommitment: string;
  location: string;
  isRemote: boolean;
  organizationName: string;
  organizationAvatar?: string;
  applicants: number;
  postedDate: Date;
  maxVolunteers: number;
}

interface Assignment {
  id: string;
  title: string;
  organization: string;
  status: string;
  hoursLogged: number;
  nextSession: Date | null;
  startDate: Date;
  endDate: Date | null;
}

interface VolunteerStats {
  totalHours: number;
  peopleHelped: number;
  activeOpportunities: number;
  impactScore: number;
}

interface OrganizationStats {
  totalRequests: number;
  activeVolunteers: number;
  completedProjects: number;
  averageRating: number;
}

interface OpportunityFilters {
  search?: string;
  category?: string;
  type?: OpportunityType;
  urgency?: UrgencyLevel;
  location?: string;
  isRemote?: boolean;
}

export function useOpportunities(filters: OpportunityFilters = {}) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== "" && value !== "all") {
            queryParams.append(key, String(value));
          }
        });

        const response = await fetch(
          `/api/dashboard/opportunities?${queryParams}`,
          {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch opportunities");
        }

        const data = await response.json();
        setOpportunities(data.opportunities);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [session?.access_token, JSON.stringify(filters)]);

  return { opportunities, loading, error, refetch: () => {} };
}

export function useVolunteerStats() {
  const [stats, setStats] = useState<VolunteerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dashboard/volunteer/stats", {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch volunteer stats");
        }

        const data = await response.json();
        setStats(data.stats);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [session?.access_token]);

  return { stats, loading, error };
}

export function useVolunteerAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchAssignments = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dashboard/volunteer/assignments", {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch assignments");
        }

        const data = await response.json();
        setAssignments(data.assignments);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, [session?.access_token]);

  return { assignments, loading, error };
}

export function useOrganizationStats() {
  const [stats, setStats] = useState<OrganizationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dashboard/organization/stats", {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch organization stats");
        }

        const data = await response.json();
        setStats(data.stats);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [session?.access_token]);

  return { stats, loading, error };
}

export function useOrganizationOpportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/dashboard/organization/opportunities",
          {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch organization opportunities");
        }

        const data = await response.json();
        setOpportunities(data.opportunities);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [session?.access_token]);

  return { opportunities, loading, error };
}

export function useOrganizationApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    if (!session?.access_token) return;

    const fetchApplications = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/dashboard/organization/applications",
          {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch organization applications");
        }

        const data = await response.json();
        setApplications(data.applications);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [session?.access_token]);

  return { applications, loading, error };
}

export function useApplyToOpportunity() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  const applyToOpportunity = async (
    opportunityId: string,
    coverLetter?: string
  ) => {
    if (!session?.access_token) {
      throw new Error("Not authenticated");
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          opportunityId,
          coverLetter,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to apply");
      }

      const data = await response.json();
      return data.application;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { applyToOpportunity, loading, error };
}
