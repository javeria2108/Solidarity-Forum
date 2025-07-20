import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getVolunteerProfile } from "@/lib/db/volunteers";

// Use the Supabase Service Role key only in secure server-side code
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

    const volunteerProfile = await getVolunteerProfile(user.id);

    if (!volunteerProfile) {
      return NextResponse.json(
        { error: "Volunteer profile not found" },
        { status: 404 }
      );
    }

    // const assignments = volunteerProfile.assignments.map(
    //   (assignment: {
    //     id: string;
    //     opportunity: {
    //       title: string;
    //       organization: {
    //         organizationName: string;
    //       };
    //     };
    //     status: string;
    //     hoursLogged: number;
    //     sessions: {
    //       scheduledAt: string;
    //     }[];
    //     startDate: string;
    //     endDate: string | null;
    //   }) => ({
    //     id: assignment.id,
    //     title: assignment.opportunity.title,
    //     organization: assignment.opportunity.organization.organizationName,
    //     status: assignment.status.toLowerCase(),
    //     hoursLogged: assignment.hoursLogged,
    //     nextSession: assignment.sessions?.[0]?.scheduledAt ?? null,
    //     startDate: assignment.startDate,
    //     endDate: assignment.endDate,
    //   })
    // );

    return NextResponse.json("assignments", {});
  } catch (error) {
    console.error("Error fetching volunteer assignments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
