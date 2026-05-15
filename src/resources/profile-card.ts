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
  avatarFit: "cover",
  avatarPosition: "top center",
  details: ["Department of Computer Science", "Old Dominion University"],
  scholar: "https://scholar.google.com/citations?user=F4vGKhgAAAAJ&hl=en&authuser=1",
  email: "mrahm015@odu.edu",
  personalEmail: "mhrahman.cs@gmail.com",
  address: "Norfolk, VA, United States of America",
  // location: "America/New_York", // IANA time zone identifier — uncomment to show local time
  languages: [], // e.g. ["English", "Bengali"] — leave empty to hide
};

const social: Social = [
  // Set essential: true to show a link on the profile card.
  // Add new icons in src/resources/icons.ts
  {
    name: "github/habiburx",
    icon: "github",
    link: "https://github.com/habiburx",
    essential: true,
  },
  {
    name: "linkedin/habiburx",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/habiburx/",
    essential: true,
  },
  {
    name: "0009-0000-3395-751X",
    icon: "orcid",
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
    name: "mrahm015",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: false,
  },
];

export { person, social };
