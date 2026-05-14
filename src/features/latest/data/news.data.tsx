import type { NewsItem } from "../types/latest.types";

/**
 * Add, remove, or reorder news items here.
 * Each item needs: date, category, and content (JSX supported).
 *
 * Categories: PAPER | AWARD | MILESTONE | TALK | RECOGNITION | SERVICE
 */
export const newsItems: NewsItem[] = [
  {
    date: "Jan '26",
    category: "MILESTONE",
    content: <>Started PhD in Computer Science at Old Dominion University.</>,
  },
  {
    date: "Feb '25",
    category: "SERVICE",
    content: <>Joined Institute of Science and Technology, Dhanmondi as a Lecturer.</>,
  },
  {
    date: "Dec '15",
    category: "SERVICE",
    content: <>Currently serving as a Lecturer and is on study leave for higher studies.</>,
  },
];
