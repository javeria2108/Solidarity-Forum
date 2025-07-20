// app/api/applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createApplication } from "@/lib/db/applications";
import { getVolunteerProfile } from "@/lib/db/volunteers";
import { getOpportunityById } from "@/lib/db/opportunities";
import { z } from "zod";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const applicationSchema = z.object({
  opportunityId: z.string().uuid(),
  coverLetter: z.string().optional(),
});

export async function POST(request: NextRequest) {
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

    const body = await request.json();
    const validatedData = applicationSchema.parse(body);

    // Check if volunteer profile exists
    const volunteerProfile = await getVolunteerProfile(user.id);
    if (!volunteerProfile) {
      return NextResponse.json(
        { error: "Volunteer profile not found" },
        { status: 404 }
      );
    }

    // Get opportunity details
    const opportunity = await getOpportunityById(validatedData.opportunityId);
    if (!opportunity) {
      return NextResponse.json(
        { error: "Opportunity not found" },
        { status: 404 }
      );
    }

    // Create application
    const application = await createApplication({
      opportunityId: validatedData.opportunityId,
      volunteerId: volunteerProfile.id,
      organizationId: opportunity.organizationId,
      coverLetter: validatedData.coverLetter,
    });

    return NextResponse.json({ application }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
