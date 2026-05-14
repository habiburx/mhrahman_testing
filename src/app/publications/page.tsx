import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { PublicationsView } from "@/features/publications";

export async function generateMetadata() {
  return Meta.generate({
    title: "Publications",
    description: "Research publications by Md Habibur Rahman",
    baseURL: baseURL,
    path: "/publications",
  });
}

export default function PublicationsPage() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Publications"
        description="Research publications by Md Habibur Rahman"
        path="/publications"
        author={{
          name: person.name,
          url: `${baseURL}/publications`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PublicationsView />
    </Column>
  );
}
