// app/api/dashboard/organization/opportunities/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getOrganizationProfile } from "@/lib/db/organizations";
import {
  OpportunityCategory,
  OpportunityStatus,
  OpportunityType,
  UrgencyLevel,
} from "@/generated/prisma";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type OpportunityWithCounts = {
  id: string;
  title: string;
  description: string;
  category: OpportunityCategory;
  type: OpportunityType;
  urgency: UrgencyLevel;
  status: OpportunityStatus;
  _count: {
    applications: number;
    assignments: number;
  };
  maxVolunteers: number;
  createdAt: Date;
};

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const organizationProfile = await getOrganizationProfile(user.id);
    if (!organizationProfile) {
      return NextResponse.json(
        { error: "Organization profile not found" },
        { status: 404 }
      );
    }

    const opportunities = organizationProfile.opportunities.map(
      (opportunity: OpportunityWithCounts) => ({
        id: opportunity.id,
        title: opportunity.title,
        description: opportunity.description,
        category: opportunity.category,
        type: opportunity.type,
        urgency: opportunity.urgency,
        status: opportunity.status,
        applications: opportunity._count.applications,
        assignments: opportunity._count.assignments,
        maxVolunteers: opportunity.maxVolunteers,
        createdAt: opportunity.createdAt,
      })
    );

    return NextResponse.json({ opportunities });
  } catch (error) {
    console.error("Error fetching organization opportunities:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
