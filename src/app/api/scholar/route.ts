import { NextResponse } from "next/server";

function getScholarUrl(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    throw new Error("Missing Google Scholar profile URL");
  }

  const parsed = new URL(url);

  if (parsed.hostname !== "scholar.google.com" || !parsed.pathname.startsWith("/citations")) {
    throw new Error("Invalid Google Scholar profile URL");
  }

  return parsed.toString();
}

function stripTags(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseScholarMetrics(html: string, profileUrl: string) {
  const headers = [...html.matchAll(/<span[^>]*class="gsc_rsb_sth"[^>]*>([\s\S]*?)<\/span>/g)].map(
    (match) => stripTags(match[1]),
  );
  const cells = [...html.matchAll(/<td[^>]*class="gsc_rsb_std"[^>]*>([\s\S]*?)<\/td>/g)].map(
    (match) => stripTags(match[1]),
  );

  const [citations, citationsSince, hIndex, hIndexSince, i10Index, i10IndexSince] = cells;

  if (!citations || !hIndex || !i10Index) {
    throw new Error("Could not parse Google Scholar metrics");
  }

  return {
    citations,
    citationsSince,
    hIndex,
    hIndexSince,
    i10Index,
    i10IndexSince,
    sinceLabel: headers[1] || "Since 2021",
    profileUrl,
    updatedAt: new Date().toISOString(),
  };
}

export async function GET(request: Request) {
  let scholarUrl = "";

  try {
    scholarUrl = getScholarUrl(request);
    const response = await fetch(scholarUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) {
      throw new Error(`Google Scholar returned ${response.status}`);
    }

    const html = await response.text();
    const metrics = parseScholarMetrics(html, scholarUrl);

    return NextResponse.json(metrics, {
      headers: {
        "Cache-Control": "s-maxage=43200, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch Google Scholar metrics",
        message: error instanceof Error ? error.message : "Unknown error",
        profileUrl: scholarUrl,
      },
      { status: 502 },
    );
  }
}
