import { aboutPageContent } from "@/features/about/about.config";
import { Column, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";

export function AboutContent() {
  return (
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
  );
}
