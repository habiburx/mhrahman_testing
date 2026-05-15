import { about, baseURL } from "@/resources";
import { Meta } from "@once-ui-system/core";

export { default } from "./about/page";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: "/",
  });
}
