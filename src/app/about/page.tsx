import { Column, Heading, Line, Row, Tag, Text, SmartLink, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: "/",
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
        path="/"
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column border="neutral-alpha-weak" radius="l" shadow="l" overflow="hidden" fillWidth className="page-card">
        <Column className="card-body-padded">
          <Text variant="body-default-m" onBackground="neutral-medium" className="bio-text">
            Welcome to my homepage! I&apos;m Md Habibur Rahman, a first year PhD
            student at{" "}
            <SmartLink href="https://www.odu.edu/">Old Dominion University</SmartLink>
            . I have completed my Master of Science in Computer Science from{" "}
            <SmartLink href="https://juniv.edu/department/cse">Jahangirnagar University</SmartLink>{" "}
            and pursued a Bachelor of Science in Computer Science and Engineering from{" "}
            <SmartLink href="https://daffodilvarsity.edu.bd/">Daffodil International University</SmartLink>
            .
            <br />
            Previously I have worked with{" "}
            <SmartLink href="https://juniv.edu/teachers/makazad">Prof. Md Abul Kalam Azad</SmartLink>{" "}
            and{" "}
            <SmartLink href="https://www.researchgate.net/profile/Md-Ismail-Jabiullah">Prof. Md Ismail Jabiullah</SmartLink>
            . I also had the opportunity to collaborate with{" "}
            <SmartLink href="https://taminulislam.github.io/">Md Taminul Islam</SmartLink>{" "}
            in a project. Outside of my academic pursuits, you&apos;ll find me immersed in a good book,
            exploring the unknown via travelling, or enjoying my leisure time with video games such as{" "}
            <SmartLink href="https://www.fortnite.com/">Fortnite</SmartLink> and{" "}
            <SmartLink href="https://playvalorant.com/en-gb/">Valorant</SmartLink>.
            Thanks for visiting!
          </Text>
        </Column>
        <Line background="neutral-alpha-weak" />
        <Column className="card-body-padded" gap="12">
          <Heading as="h2" variant="heading-strong-l" className="research-heading">Research Interests</Heading>
          <Row gap="8" wrap>
            <Tag size="l">Agentic AI Security & Privacy</Tag>
            <Tag size="l">Trustworthy AI</Tag>
            <Tag size="l">Applied Cryptography</Tag>
            <Tag size="l">Adversarial Machine Learning</Tag>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
