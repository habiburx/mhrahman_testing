import { PublicationsView } from "@/features/publications";
import { baseURL, blog, person, sameAs } from "@/resources";
import { Column, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    path: blog.path,
  });
}

export default function PublicationsPage() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        sameAs={Object.values(sameAs)}
        author={{
          name: person.name,
          url: `${baseURL}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PublicationsView />
    </Column>
  );
}
