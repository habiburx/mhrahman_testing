import type { Award, Certification } from "@/features/credentials/types/credentials.types";
import type { Credentials } from "@/types";
import { person } from "./profile-card";

const credentials: Credentials = {
  path: "/credentials",
  label: "Credentials",
  title: `Credentials – ${person.name}`,
  description: `Certifications and credentials of ${person.name}`,
};

const credentialsPageContent = {
  awardsTitle: "Awards",
  certificationsTitle: "Certifications",
  emptyAwardsMessage: "No awards listed yet.",
  emptyCertificationsMessage: "No certifications listed yet.",
};

/**
 * Add awards here.
 * Example: { title: "Best Paper Award", organization: "IEEE S&P 2025" }
 */
const awards: Award[] = [
  {
    title: "Merit based scholarship",
    organization: "Daffodil International University",
  },
];

/**
 * Add certifications here.
 * Example: { title: "AWS Certified Solutions Architect", organization: "Amazon Web Services" }
 */
const certifications: Certification[] = [
  {
    title: "Training on PHP with Laravel Framework",
    organization: "June 2023",
  },
  {
    title: "Training on Professional English Communication Skills",
    organization: "BASIS SEIP, WSDA, May 2023",
  },
  {
    title: "Take Off Programming Contest, Position 20",
    organization: "Daffodil International University, Summer 2019",
  },
];

export { credentials, credentialsPageContent, awards, certifications };
