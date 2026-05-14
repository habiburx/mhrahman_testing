import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, credentials, person } from "@/resources";
import { CredentialsList } from "@/features/credentials";

export async function generateMetadata() {
  return Meta.generate({
    title: credentials.title,
    description: credentials.description,
    baseURL: baseURL,
    path: credentials.path,
  });
}

export default function CredentialsPage() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={credentials.title}
        description={credentials.description}
        path={credentials.path}
        author={{
          name: person.name,
          url: `${baseURL}${credentials.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column border="neutral-alpha-weak" radius="l" shadow="l" overflow="hidden" fillWidth className="page-card">
        <CredentialsList />
      </Column>
    </Column>
  );
}
