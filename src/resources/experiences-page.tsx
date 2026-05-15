import type { Work } from "@/types";
import { person } from "./profile-card";

type ExperiencesPageContent = {
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      timeframe: string;
      courses: React.ReactNode;
    }>;
  };
  research: {
    display: boolean;
    title: string;
    experiences: Array<{
      role: string;
      achievement: string;
    }>;
  };
  services: {
    display: boolean;
    title: string;
    items: Array<{
      role: string;
      organization: string;
      link?: string;
    }>;
  };
  teaching: {
    display: boolean;
    title: string;
    courses: Array<{
      name: string;
      session: string;
      note?: string;
    }>;
  };
  studentMentored: {
    display: boolean;
    title: string;
    items: string[];
  };
};

const work: Work = {
  path: "/experiences",
  label: "Experiences",
  title: `Experiences – ${person.name}`,
  description: `Research projects and experiences by ${person.name}`,
};

const experiencesPageContent: ExperiencesPageContent = {
  studies: {
    display: true,
    title: "Educational Background",
    institutions: [
      {
        name: "PhD in Computer Science — Old Dominion University, United States of America",
        timeframe: "In Progress",
        courses: <>Relevant Coursework: LLM Architecture &amp; Application, Research Methods.</>,
      },
      {
        name: "M.Sc. in Computer Science — Jahangirnagar University",
        timeframe: "March 2025",
        courses: (
          <>
            Relevant Coursework: Digital Image Processing, Modern Cryptography, Digital Forensics,
            Network Security, Information Security, Software Project Management, and Quality
            Assurance.
          </>
        ),
      },
      {
        name: "B.Sc. in Computer Science &amp; Engineering — Daffodil International University",
        timeframe: "March 2023",
        courses: (
          <>
            Relevant Coursework: Big Data and IoT, Research and Innovation, Data Mining and Machine
            Learning, Artificial Intelligence, Database Management System, System Analysis and
            Design.
          </>
        ),
      },
      // Add more entries by copying the block above
    ],
  },
  research: {
    display: true,
    title: "Research Experience",
    experiences: [
      {
        role: "Graduate Research",
        achievement:
          "Detecting Fake News in English Newspapers Using Recurrent Neural Networks (RNNs).",
      },
      {
        role: "Undergraduate Research",
        achievement:
          "Analysis of Encrypted Machine Learning Model Using Fully Homomorphic Encryption and CKKS scheme.",
      },
      {
        role: "Research Assistant",
        achievement:
          "Deep learning approach to tomato leaf disease detection using EfficientNetB3.",
      },
      // Add more entries by copying the block above
    ],
  },
  services: {
    display: true,
    title: "Services",
    items: [
      { role: "Graduate Teaching Assistant", organization: "Old Dominion University", link: "https://www.odu.edu/" },
      { role: "Graduate Research Assistant", organization: "Old Dominion University", link: "https://www.odu.edu/" },
      { role: "Lecturer", organization: "Institute of Science & Technology", link: "https://ist.edu.bd/" },
      { role: "Website Developer", organization: "Supabex", link: "https://supabex.com/" },
      { role: "Instructor & Content Creator", organization: "IshQool", link: "https://www.facebook.com/ishqool.org/" },
      { role: "Teaching Assistant", organization: "Daffodil International University", link: "https://daffodilvarsity.edu.bd/" },
      // Add more entries by copying the block above
    ],
  },
  teaching: {
    display: true,
    title: "Teaching",
    courses: [
      {
        name: "Operating System & Lab",
        session: "S'21-22",
      },
      {
        name: "Software Engineering & Lab",
        session: "S'20-21",
      },
      {
        name: "Structured Programming Language & Lab",
        session: "S'23-24",
      },
      {
        name: "Algorithms Lab",
        session: "F'21",
        note: "Teaching Assistant",
      },
      {
        name: "Programming & Problem Solving Lab",
        session: "S'21, F'21",
        note: "Teaching Assistant",
      },
    ],
  },
  studentMentored: {
    display: true,
    title: "Student Mentored",
    items: ["Loading"],
  },
};

export { work, experiencesPageContent };
