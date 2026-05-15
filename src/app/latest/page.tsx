import { NewsTimeline } from "@/features/latest";
import { baseURL, latest, person, sameAs } from "@/resources";
import { latestPageContent } from "@/resources/latest-page";
import { Column, Heading, Line, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: latest.title,
    description: latest.description,
    baseURL: baseURL,
    path: latest.path,
  });
}

export default function LatestPage() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={latest.title}
        description={latest.description}
        path={latest.path}
        sameAs={Object.values(sameAs)}
        author={{
          name: person.name,
          url: `${baseURL}${latest.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column
        border="neutral-alpha-weak"
        radius="l"
        shadow="l"
        overflow="hidden"
        fillWidth
        className="page-card"
      >
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="research-heading">
            {latestPageContent.heading}
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <NewsTimeline />
      </Column>
    </Column>
  );
}
