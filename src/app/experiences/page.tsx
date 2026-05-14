import { Column, Heading, Line, Row, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
  });
}

export default function Experiences() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        author={{
          name: person.name,
          url: `${baseURL}${work.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column border="neutral-alpha-weak" radius="l" shadow="l" overflow="hidden" fillWidth className="page-card">

        {/* ── Educational Background ── */}
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
            Educational Background
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-section-items card-body" gap="0">
          {about.studies.institutions.map((inst, i) => (
            <Column key={inst.name} fillWidth>
              {i > 0 && <Line background="neutral-alpha-weak" className="card-divider" />}
              <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                <Text variant="body-default-m" onBackground="neutral-weak" className="exp-bullet">·</Text>
                <Column flex={1} gap="4">
                  <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                    <Text variant="body-strong-s" className="exp-company">{inst.name}</Text>
                    {inst.timeframe && (
                      <Text variant="body-default-s" onBackground="neutral-weak" className="exp-timeframe">
                        {inst.timeframe}
                      </Text>
                    )}
                  </Row>
                  {inst.courses && (
                    <Text variant="body-default-s" onBackground="neutral-weak" className="exp-role">
                      {inst.courses}
                    </Text>
                  )}
                </Column>
              </Row>
            </Column>
          ))}
        </Column>

        {/* ── Research Experience ── */}
        <Line background="neutral-alpha-weak" />
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
            Research Experience
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-section-items card-body" gap="0">
          {about.work.experiences.map((exp) => (
            <Column key={exp.role} fillWidth>
              <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                <Text variant="body-default-m" onBackground="neutral-weak" className="exp-bullet">·</Text>
                <Text variant="body-default-s" className="exp-company">
                  <strong>{exp.role}</strong>{exp.achievements.length > 0 && <> – {exp.achievements[0]}</>}
                </Text>
              </Row>
            </Column>
          ))}
        </Column>

        {/* ── Services ── */}
        <Line background="neutral-alpha-weak" />
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
            Services
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-section-items card-body" gap="0">
          {about.services.items.map((svc) => (
            <Column key={`${svc.role}-${svc.organization}`} fillWidth>
              <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                <Text variant="body-default-m" onBackground="neutral-weak" className="exp-bullet">·</Text>
                <Text variant="body-default-s" className="exp-company">
                  <strong>{svc.role}</strong>, {svc.organization}
                </Text>
              </Row>
            </Column>
          ))}
        </Column>

      </Column>
    </Column>
  );
}
