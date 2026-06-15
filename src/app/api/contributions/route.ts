import { NextResponse } from "next/server";

import {
  getContributions,
  isValidYearParam,
} from "@/lib/github/contributions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("y");

  if (!year || !isValidYearParam(year)) {
    return NextResponse.json({ error: "Invalid year parameter" }, { status: 400 });
  }

  const data = await getContributions(year);

  if (!data) {
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 502 },
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
