import type { Gallery, Home, Newsletter } from "@/types";
import { about } from "./about-page";
import { blogs } from "./blogs-page";
import { credentials } from "./credentials-page";
import { work } from "./experiences-page";
import { latest } from "./latest-page";
import { person, social } from "./profile-card";
import { blog } from "./publications-page";

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional updates on my research and projects.</>,
};

const home: Home = {
  path: "/",
  image: person.avatar,
  label: "Home",
  title: `${person.lastName}'s Portfolio`,
  description:
    "Portfolio of Md Habibur Rahman, PhD student in Computer Science at Old Dominion University and AI security researcher.",
  headline: <>Researching security, privacy, and trustworthy AI</>,
  featured: {
    // Set display: true and update href to highlight a specific project on the home page
    display: false,
    title: <>Featured work</>,
    href: "/publications/machine-learning-firewall-log-classification",
  },
  subline: (
    <>
      I'm {person.firstName}, a PhD student in Computer Science at Old Dominion University working
      across AI security, privacy, applied cryptography, and machine learning.
    </>
  ),
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Replace these with your own images in public/images/gallery/
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Campus view",
      orientation: "horizontal",
      caption: "Old Dominion University Campus",
      location: "Norfolk, Virginia, USA",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Daffodil International University",
      orientation: "vertical",
      caption: "Undergraduate Days",
      location: "Daffodil International University, Dhaka",
    },
  ],
};

export { person, social, newsletter, home, about, blog, blogs, work, latest, credentials, gallery };
