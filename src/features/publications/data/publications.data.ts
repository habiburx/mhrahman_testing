import type { Publication } from "../types/publication.types";

/** Your name exactly as it appears in author lists — bolded automatically. */
export const myName = "Md Habibur Rahman";

/**
 * Add publications here. Each entry needs: year, title, authors, venue, type.
 * Optional: links array with label + href pairs (ARXIV, CODE, PDF, DOI, SLIDES…).
 */
export const publications: Publication[] = [
  {
    year: 2024,
    title: "Add your conference paper title here",
    authors: ["Md Habibur Rahman", "Co-Author Name"],
    venue: "Conference Name 2024",
    type: "Conference",
    links: [
      { label: "ARXIV", href: "#" },
      { label: "CODE",  href: "#" },
    ],
  },
  {
    year: 2024,
    title: "Add your journal paper title here",
    authors: ["Md Habibur Rahman", "Co-Author Name"],
    venue: "Journal Name, Vol. 1, 2024",
    type: "Journal",
    links: [
      { label: "DOI", href: "#" },
      { label: "PDF", href: "#" },
    ],
  },
  {
    year: 2024,
    title: "Add your second journal paper title here",
    authors: ["Md Habibur Rahman", "Co-Author Name", "Another Author"],
    venue: "IEEE Transactions on Example, Vol. 12, No. 3, 2024",
    type: "Journal",
    links: [
      { label: "DOI", href: "#" },
      { label: "PDF", href: "#" },
    ],
  },
  {
    year: 2023,
    title: "Add your third journal paper title here",
    authors: ["Md Habibur Rahman", "Co-Author Name"],
    venue: "ACM Computing Surveys, Vol. 55, No. 10, 2023",
    type: "Journal",
    links: [
      { label: "DOI", href: "#" },
      { label: "PDF", href: "#" },
    ],
  },
  {
    year: 2023,
    title: "Add your preprint title here",
    authors: ["Md Habibur Rahman", "Co-Author Name"],
    venue: "arXiv preprint arXiv:2300.00000",
    type: "Preprint",
    links: [{ label: "ARXIV", href: "#" }],
  },
];
