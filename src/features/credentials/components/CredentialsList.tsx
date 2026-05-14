import { Column, Heading, Line, Row, Text } from "@once-ui-system/core";
import { awards, certifications } from "../data/credentials.data";
import type { Award, Certification } from "../types/credentials.types";

function BulletRow({ title, organization }: Award | Certification) {
  return (
    <Row fillWidth gap="16" vertical="start" className="card-item-inner">
      <Text variant="body-default-m" onBackground="neutral-weak">·</Text>
      <Text variant="body-default-s">
        <strong>{title}</strong>, {organization}
      </Text>
    </Row>
  );
}

function EmptyRow({ message }: { message: string }) {
  return (
    <Row fillWidth gap="16" vertical="start" className="card-item-inner">
      <Text variant="body-default-m" onBackground="neutral-weak">·</Text>
      <Text variant="body-default-s" onBackground="neutral-weak">{message}</Text>
    </Row>
  );
}

/** Renders Awards and Certifications sections. Edit data in credentials.data.ts. */
export function CredentialsList() {
  return (
    <>
      {/* Awards */}
      <Column className="card-header">
        <Heading as="h2" variant="heading-strong-l">Awards</Heading>
      </Column>
      <Line background="neutral-alpha-weak" />
      <Column className="card-section-items card-body" gap="0">
        {awards.length === 0
          ? <EmptyRow message="No awards listed yet." />
          : awards.map((a) => (
              <Column key={`${a.title}-${a.organization}`} fillWidth>
                <BulletRow {...a} />
              </Column>
            ))}
      </Column>

      {/* Certifications */}
      <Line background="neutral-alpha-weak" />
      <Column className="card-header">
        <Heading as="h2" variant="heading-strong-l">Certifications</Heading>
      </Column>
      <Line background="neutral-alpha-weak" />
      <Column className="card-section-items card-body" gap="0">
        {certifications.length === 0
          ? <EmptyRow message="No certifications listed yet." />
          : certifications.map((c) => (
              <Column key={`${c.title}-${c.organization}`} fillWidth>
                <BulletRow {...c} />
              </Column>
            ))}
      </Column>
    </>
  );
}
