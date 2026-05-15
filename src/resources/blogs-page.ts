import type { Blogs } from "@/types";
import { person } from "./profile-card";

const blogs: Blogs = {
  path: "/blogs",
  label: "Blogs",
  title: `Notes & Updates – ${person.name}`,
  description: `Notes, updates, project reflections, and technical writing by ${person.name}`,
};

const blogsPageContent = {
  heading: "Notes & Updates",
  emptyMessage: "No posts yet.",
  postsDirectory: ["src", "content", "blogs"],
};

export { blogs, blogsPageContent };
