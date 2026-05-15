import type { Publication } from "@/features/publications/types/publication.types";
import type { Blog } from "@/types";
import { person } from "./profile-card";

const blog: Blog = {
  path: "/publications",
  label: "Publications",
  title: `Publications – ${person.name}`,
  description: `Research papers, articles, and writing by ${person.name}`,
};

const publicationsPageContent = {
  heading: "Publications",
  emptyMessage: "No publications match your search.",
  searchPlaceholder: "Search…",
};

/** Your name exactly as it appears in author lists — bolded automatically. */
const myName = "Md Habibur Rahman";

/**
 * Add publications here. Each entry needs: year, title, authors, venue, type.
 * Optional: links array with label + href pairs (ARXIV, CODE, PDF, DOI, SLIDES…).
 */
const publications: Publication[] = [
  {
    year: 2023,
    title: "Machine Learning Approach on Multiclass Classification of Internet Firewall Log Files",
    authors: [
      "Md Habibur Rahman",
      "Taminul Islam",
      "Md Masum Rana",
      "Rehnuma Tasnim",
      "Tanzina Rahman Mona",
      "Md Mamun Sakib",
    ],
    venue:
      "International Conference on Computational Intelligence and Sustainable Engineering Solutions (CISES), pp. 358-364",
    type: "Conference",
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/document/10183601" },
      { label: "DOI", href: "https://doi.org/10.1109/CISES58720.2023.10183601" },
      { label: "ARXIV", href: "https://arxiv.org/abs/2306.07997" },
      { label: "PDF", href: "https://arxiv.org/pdf/2306.07997" },
    ],
  },
  {
    year: 2023,
    title:
      "Presented Machine Learning Approach on Multiclass Classification of Internet Firewall Log Files",
    authors: ["Md Habibur Rahman"],
    venue: "CISES 2023",
    type: "Talk",
  },
];

export { blog, publicationsPageContent, myName, publications };
