import { aboutPageContent } from "@/features/about";
import type { About } from "@/types";
import { experiencesPageContent } from "./experiences-page";
import { person } from "./profile-card";

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} — ${person.role}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "", // Replace with your own scheduling link if you want a "Book a call" button
  },
  intro: {
    display: true,
    title: "About Me",
    description: <></>,
  },
  work: {
    display: experiencesPageContent.research.display,
    title: experiencesPageContent.research.title,
    experiences: experiencesPageContent.research.experiences.map((experience) => ({
      company: "",
      timeframe: "",
      role: experience.role,
      achievements: [experience.achievement],
      images: [],
    })),
  },
  studies: {
    display: experiencesPageContent.studies.display,
    title: experiencesPageContent.studies.title,
    institutions: experiencesPageContent.studies.institutions,
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Security & Privacy Research",
        description: (
          <>
            Research enthusiast in computer security, privacy, decentralized systems, applied
            cryptography, and AI security.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Machine Learning & Deep Learning",
        description: (
          <>
            Experience applying machine learning and deep learning techniques to firewall log
            classification, adversarial machine learning, and trustworthy AI problems.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>
            Proficient in PHP, Laravel, HTML, CSS, and JavaScript for building full-stack web
            applications.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
  services: {
    display: experiencesPageContent.services.display,
    title: experiencesPageContent.services.title,
    items: experiencesPageContent.services.items,
  },
};

export { about, aboutPageContent };
