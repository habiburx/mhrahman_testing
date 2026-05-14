import { slugify as transliterate } from "transliteration";

export type TocHeading = { level: number; text: string; id: string };

function slugify(str: string): string {
  const strWithAnd = str.replace(/&/g, " and ");
  return transliterate(strWithAnd, { lowercase: true, separator: "-" }).replace(/--+/g, "-");
}

export function extractHeadings(content: string): TocHeading[] {
  const headings: TocHeading[] = [];
  for (const line of content.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim().replace(/\*\*/g, "").replace(/`/g, "");
      headings.push({ level, text, id: slugify(text) });
    }
  }
  return headings;
}
