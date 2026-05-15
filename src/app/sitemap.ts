import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/utils/utils";

export default async function sitemap() {
  const blogs = getPosts(["src", "content", "blogs"]).map((post) => ({
    url: `${baseURL}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const works = getPosts(["src", "content", "publications"]).map((post) => ({
    url: `${baseURL}/publications/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.8,
  }));

  return [...routes, ...blogs, ...works];
}
