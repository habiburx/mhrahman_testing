import type { About } from "@/types";
import { SmartLink } from "@once-ui-system/core";
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

const aboutPageContent = {
  bio: (
    <>
      Welcome to my homepage! I&apos;m Md Habibur Rahman, a first year PhD student at{" "}
      <SmartLink href="https://www.odu.edu/">Old Dominion University</SmartLink>. I have completed
      my Master of Science in Computer Science from{" "}
      <SmartLink href="https://juniv.edu/department/cse">Jahangirnagar University</SmartLink> and
      pursued a Bachelor of Science in Computer Science and Engineering from{" "}
      <SmartLink href="https://daffodilvarsity.edu.bd/">
        Daffodil International University
      </SmartLink>
      .
      <br />
      Previously I have worked with{" "}
      <SmartLink href="https://juniv.edu/teachers/makazad">Prof. Md Abul Kalam Azad</SmartLink> and{" "}
      <SmartLink href="https://www.researchgate.net/profile/Md-Ismail-Jabiullah">
        Prof. Md Ismail Jabiullah
      </SmartLink>
      . I also had the opportunity to collaborate with{" "}
      <SmartLink href="https://taminulislam.github.io/">Md Taminul Islam</SmartLink> in a project.
      Outside of my academic pursuits, you&apos;ll find me immersed in a good book, exploring the
      unknown via travelling, or enjoying my leisure time with video games such as{" "}
      <SmartLink href="https://www.fortnite.com/">Fortnite</SmartLink> and{" "}
      <SmartLink href="https://playvalorant.com/en-gb/">Valorant</SmartLink>. Thanks for visiting!
    </>
  ),
  researchTitle: "Research Interests",
  researchInterests: [
    "Computer Security & Privacy",
    "Decentralized System Security",
    "Applied Cryptography",
    "Adversarial Machine Learning",
  ],
};

export { about, aboutPageContent };
