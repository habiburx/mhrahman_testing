import type React from "react";

export type NewsCategory =
  | "PAPER"
  | "AWARD"
  | "MILESTONE"
  | "TALK"
  | "RECOGNITION"
  | "SERVICE";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  content: React.ReactNode;
};
