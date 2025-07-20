// app/api/dashboard/organization/applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getOrganizationProfile } from "@/lib/db/organizations";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    const applications = organizationProfile.applications.map(
      (application: {
        id: any;
        opportunity: { title: any };
        volunteer: { profile: { fullName: any; avatar: any } };
        status: any;
        coverLetter: any;
        appliedAt: any;
        reviewedAt: any;
      }) => ({
        id: application.id,
        opportunityTitle: application.opportunity.title,
        volunteerName: application.volunteer.profile.fullName,
        volunteerAvatar: application.volunteer.profile.avatar,
        status: application.status,
        coverLetter: application.coverLetter,
        appliedAt: application.appliedAt,
        reviewedAt: application.reviewedAt,
      })
    );

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Error fetching organization applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
