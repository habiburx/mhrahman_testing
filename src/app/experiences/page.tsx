import { baseURL, person, sameAs, work } from "@/resources";
import { experiencesPageContent } from "@/resources/experiences-page";
import { Column, Heading, Line, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";

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
        sameAs={Object.values(sameAs)}
        author={{
          name: person.name,
          url: `${baseURL}${work.path}`,
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
        {/* ── Services ── */}
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
            {experiencesPageContent.services.title}
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <div className="card-section-items card-body two-col-items">
          {experiencesPageContent.services.items.map((svc) => (
            <Column key={`${svc.role}-${svc.organization}`} fillWidth>
              <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                <Text variant="body-default-m" onBackground="neutral-weak" className="exp-bullet">
                  ·
                </Text>
                <Text variant="body-default-s" className="exp-company">
                  <strong>{svc.role}</strong>,{" "}
                  {svc.link ? (
                    <SmartLink href={svc.link}>{svc.organization}</SmartLink>
                  ) : (
                    svc.organization
                  )}
                </Text>
              </Row>
            </Column>
          ))}
        </div>

        {/* ── Teaching ── */}
        {experiencesPageContent.teaching.display && (
          <>
            <Line background="neutral-alpha-weak" />
            <Column className="card-header">
              <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
                {experiencesPageContent.teaching.title}
              </Heading>
            </Column>
            <Line background="neutral-alpha-weak" />
            <div className="card-section-items card-body two-col-items">
              {experiencesPageContent.teaching.courses.map((course) => (
                <Column key={`${course.name}-${course.session}`} fillWidth>
                  <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      className="exp-bullet"
                    >
                      ·
                    </Text>
                    <Text variant="body-default-s" className="exp-company">
                      <strong>{course.name}</strong> — {course.session}
                      {course.note && <> ({course.note})</>}
                    </Text>
                  </Row>
                </Column>
              ))}
            </div>
          </>
        )}

        {/* ── Student Mentored ── */}
        {experiencesPageContent.studentMentored.display && (
          <>
            <Line background="neutral-alpha-weak" />
            <Column className="card-header">
              <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
                {experiencesPageContent.studentMentored.title}
              </Heading>
            </Column>
            <Line background="neutral-alpha-weak" />
            <div className="card-section-items card-body two-col-items">
              {experiencesPageContent.studentMentored.items.map((item) => (
                <Column key={item} fillWidth>
                  <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      className="exp-bullet"
                    >
                      ·
                    </Text>
                    <Text variant="body-default-s" className="exp-company">
                      {item}
                    </Text>
                  </Row>
                </Column>
              ))}
            </div>
          </>
        )}

        {/* ── Educational Background ── */}
        <Line background="neutral-alpha-weak" />
        <Column className="card-header">
          <Heading as="h2" variant="heading-strong-l" className="exp-section-heading">
            {experiencesPageContent.studies.title}
          </Heading>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-section-items card-body" gap="0">
          {experiencesPageContent.studies.institutions.map((inst, i) => (
            <Column key={inst.name} fillWidth>
              {i > 0 && <Line background="neutral-alpha-weak" className="card-divider" />}
              <Row fillWidth gap="16" vertical="start" className="card-item-inner exp-item">
                <Text variant="body-default-m" onBackground="neutral-weak" className="exp-bullet">
                  ·
                </Text>
                <Column flex={1} gap="4">
                  <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                    <Text variant="body-strong-s" className="exp-company">
                      {inst.name}
                    </Text>
                    {inst.timeframe && (
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        className="exp-timeframe"
                      >
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
      </Column>
    </Column>
  );
}
