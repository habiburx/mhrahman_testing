import type { Person, Social } from "@/types";

/**
 * PROFILE CARD CUSTOMIZATION
 *
 * Edit this file to change the photo card:
 * - name, role, email, location
 * - profile image
 * - image fit/position
 * - department / university detail lines
 * - Google Scholar profile
 * - social buttons
 */
const person: Person = {
  firstName: "Md Habibur",
  lastName: "Rahman",
  name: "Md Habibur Rahman",
  role: "PhD Student in CS @ ODU | AI Security Researcher",
  avatar: "/images/mhrahman.webp",
  avatarAlt: "Md Habibur Rahman profile photo",
  avatarFit: "contain", // use "cover" if you want a new photo to fill the frame
  avatarPosition: "center",
  details: ["Department of Computer Science", "Old Dominion University, USA"],
  scholar: "https://scholar.google.com/citations?user=F4vGKhgAAAAJ&hl=en&authuser=1",
  email: "mrahm015@odu.edu",
  personalEmail: "mhrahman.cs@gmail.com",
  address: "Norfolk, VA",
  // location: "America/New_York", // IANA time zone identifier — uncomment to show local time
  languages: [], // e.g. ["English", "Bengali"] — leave empty to hide
};

const social: Social = [
  // Set essential: true to show a link on the profile card.
  // Add new icons in src/resources/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/habiburx",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/habiburx/",
    essential: true,
  },
  {
    name: "ORCID",
    icon: "globe",
    link: "https://orcid.org/0009-0000-3395-751X",
    essential: true,
  },
  {
    name: "@mhabiburx",
    icon: "twitter",
    link: "https://x.com/mhabiburx",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sneakyrayman/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "", // Add your Threads URL here, or leave empty to hide
    essential: false,
  },
  {
    name: "mrahm015",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: false,
  },
];

export { person, social };
