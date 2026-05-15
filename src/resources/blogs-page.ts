import type { Blogs } from "@/types";
import { person } from "./profile-card";

const blogs: Blogs = {
  path: "/blogs",
  label: "Blogs",
  title: `Blogs – ${person.name}`,
  description: `Blog posts and articles by ${person.name}`,
};

const blogsPageContent = {
  heading: "Writing",
  emptyMessage: "No posts yet.",
  postsDirectory: ["src", "content", "blogs"],
};

export { blogs, blogsPageContent };
