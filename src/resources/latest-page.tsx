import type { NewsItem } from "@/features/latest/types/latest.types";
import type { Latest } from "@/types";
import { person } from "./profile-card";

const latest: Latest = {
  path: "/latest",
  label: "Latest",
  title: `Latest – ${person.name}`,
  description: `Latest news and updates from ${person.name}`,
};

const latestPageContent = {
  heading: "News",
};

/**
 * Add, remove, or reorder news items here.
 * Categories: PAPER | AWARD | MILESTONE | TALK | RECOGNITION | SERVICE
 */
const newsItems: NewsItem[] = [
  {
    date: "Jan '26",
    category: "MILESTONE",
    content: <>Started PhD in Computer Science at Old Dominion University.</>,
  },
  {
    date: "Feb '26",
    category: "SERVICE",
    content: <>Joined Institute of Science and Technology, Dhanmondi as a Lecturer.</>,
  },
  {
    date: "Dec '25",
    category: "SERVICE",
    content: <>Currently serving as a Lecturer and is on study leave for higher studies.</>,
  },
];

export { latest, latestPageContent, newsItems };
