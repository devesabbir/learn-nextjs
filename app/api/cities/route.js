import { getCitiesSuggestions } from "@/database/queries";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const res = await getCitiesSuggestions(query);

  return NextResponse.json({ query: query, data: res });
}
