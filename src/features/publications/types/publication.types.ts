export type PublicationType =
  | "Conference"
  | "Journal"
  | "Preprint"
  | "Workshop"
  | "Poster"
  | "Talk"
  | "Presentation"
  | "Report";

export type PublicationLink = {
  label: string; // e.g. "ARXIV", "CODE", "PDF", "DOI", "SLIDES"
  href: string;
};

export type Publication = {
  year: number;
  title: string;
  authors: string[];
  venue: string;
  type: PublicationType;
  links?: PublicationLink[];
};
