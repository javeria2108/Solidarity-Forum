// // app/api/dashboard/opportunities/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import { getOpportunities, OpportunityFilters } from "@/lib/db/opportunities";
// import {
//   OpportunityCategory,
//   OpportunityType,
//   UrgencyLevel,
// } from "@prisma/client";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// export async function GET(request: NextRequest) {
//   try {
//     // Get user from session
//     const authHeader = request.headers.get("Authorization");
//     if (!authHeader) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const token = authHeader.replace("Bearer ", "");
//     const {
//       data: { user },
//       error,
//     } = await supabase.auth.getUser(token);

//     if (error || !user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     // Parse query parameters
//     const { searchParams } = new URL(request.url);
//     const filters: OpportunityFilters = {
//       search: searchParams.get("search") || undefined,
//       category: (searchParams.get("category") as OpportunityCategory) || "all",
//       type: (searchParams.get("type") as OpportunityType) || undefined,
//       urgency: (searchParams.get("urgency") as UrgencyLevel) || undefined,
//       location: searchParams.get("location") || undefined,
//       isRemote: searchParams.get("isRemote")
//         ? searchParams.get("isRemote") === "true"
//         : undefined,
//     };

//     const opportunities = await getOpportunities(filters);
//     return NextResponse.json({ opportunities });
//   } catch (error) {
//     console.error("Error fetching opportunities:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
