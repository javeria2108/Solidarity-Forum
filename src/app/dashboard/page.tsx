"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import VolunteerDashboard from "@/components/volunteerDashboard";
import OrganizationDashboard from "@/components/orgDashboard";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const userType = user.user_metadata?.user_type;
      setRole(userType);
    }
  }, [user]);

  if (loading || !user || !role) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
        <span className="ml-2">Loading Dashboard...</span>
      </div>
    );
  }

  if (role === "volunteer") {
    return <VolunteerDashboard />;
  }

  if (role === "organization") {
    return <OrganizationDashboard />;
  }

  return (
    <div className="text-center mt-10 text-red-500">
      Invalid role detected. Please contact support.
    </div>
  );
}
