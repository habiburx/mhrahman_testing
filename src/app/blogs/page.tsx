import { Column, Heading, Line, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, blogs, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blogs.title,
    description: blogs.description,
    baseURL: baseURL,
    path: blogs.path,
  });
}

export default function BlogsPage() {
  const posts = getPosts(["src", "content", "blogs"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blogs.title}
        description={blogs.description}
        path={blogs.path}
        author={{
          name: person.name,
          url: `${baseURL}${blogs.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column border="neutral-alpha-weak" radius="l" shadow="l" overflow="hidden" fillWidth className="page-card">

        {/* Header */}
        <Column className="card-header">
          <Heading as="h1" variant="heading-strong-l" className="research-heading">Writing</Heading>
        </Column>

        <Line background="neutral-alpha-weak" />

        {/* Post list */}
        <Column fillWidth>
          {posts.length === 0 ? (
            <Column className="card-body-padded">
              <Text variant="body-default-m" onBackground="neutral-weak">No posts yet.</Text>
            </Column>
          ) : (
            posts.map((post) => (
              <Column key={post.slug} fillWidth>
                <SmartLink href={`/blogs/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", width: "100%" }}>
                  <Row fillWidth vertical="center" className="blog-list-row" style={{ justifyContent: "space-between" }}>
                    <Row gap="16" vertical="center" flex={1}>
                      <Text variant="body-default-m" onBackground="neutral-weak">·</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak" className="blog-list-date">
                        {post.metadata.publishedAt}
                      </Text>
                      <Text variant="body-strong-m">{post.metadata.title}</Text>
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ flexShrink: 0 }}>→</Text>
                  </Row>
                </SmartLink>
              </Column>
            ))
          )}
        </Column>

      </Column>
    </Column>
  );
}
