import { about, baseURL, person, sameAs } from "@/resources";
import { aboutPageContent } from "@/resources/about-page";
import { Column, Heading, Line, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        sameAs={Object.values(sameAs)}
        author={{
          name: person.name,
          url: `${baseURL}/`,
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
        <Column className="card-body-padded">
          <Text variant="body-default-m" onBackground="neutral-medium" className="bio-text">
            {aboutPageContent.bio}
          </Text>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-body-padded" gap="12">
          <Heading as="h2" variant="heading-strong-l" className="research-heading">
            {aboutPageContent.researchTitle}
          </Heading>
          <Row gap="8" wrap>
            {aboutPageContent.researchInterests.map((interest) => (
              <Tag key={interest} size="l">
                {interest}
              </Tag>
            ))}
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
