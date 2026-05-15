import type { Person, Social } from "@/types";

const person: Person = {
  firstName: "Md Habibur",
  lastName: "Rahman",
  name: "Md Habibur Rahman",
  role: "PhD Student | AI Security Researcher",
  avatar: "/images/mhrahman.webp",
  avatarAlt: "Md Habibur Rahman profile photo",
  avatarFit: "cover",
  avatarPosition: "top center",
  details: ["Department of Computer Science", "Old Dominion University"],
  scholar: "https://scholar.google.com/citations?user=F4vGKhgAAAAJ&hl=en&authuser=1",
  email: "mrahm015@odu.edu",
  personalEmail: "mhrahman.cs@gmail.com",
  address: "Norfolk, VA, United States of America",
  nickname: "Habib",
  cv: "#",
  languages: [],
};

const social: Social = [
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
