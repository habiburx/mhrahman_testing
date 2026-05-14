import type React from "react";

export type Institution = {
  name: string;
  timeframe?: string;
  courses?: React.ReactNode;
};

export type ExperienceItem = {
  role: string;
  achievements: React.ReactNode[];
};

export type ServiceItem = {
  role: string;
  organization: string;
};
