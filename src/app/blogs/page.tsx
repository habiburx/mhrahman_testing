import { baseURL, blogs, person, sameAs } from "@/resources";
import { blogsPageContent } from "@/resources/blogs-page";
import { formatShortDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Column, Heading, Line, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: blogs.title,
    description: blogs.description,
    baseURL: baseURL,
    path: blogs.path,
  });
}

export default function BlogsPage() {
  const posts = [...getPosts(blogsPageContent.postsDirectory)].sort((a, b) => {
    const newer = new Date(b.metadata.publishedAt).getTime();
    const older = new Date(a.metadata.publishedAt).getTime();
    return newer - older;
  });

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blogs.title}
        description={blogs.description}
        path={blogs.path}
        sameAs={Object.values(sameAs)}
        author={{
          name: person.name,
          url: `${baseURL}${blogs.path}`,
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
        {/* Header */}
        <Column className="card-header">
          <Heading as="h1" variant="heading-strong-l" className="research-heading">
            {blogsPageContent.heading}
          </Heading>
        </Column>

        <Line background="neutral-alpha-weak" />

        {/* Post list */}
        <Column fillWidth>
          {posts.length === 0 ? (
            <Column className="card-body-padded">
              <Text variant="body-default-m" onBackground="neutral-weak">
                {blogsPageContent.emptyMessage}
              </Text>
            </Column>
          ) : (
            posts.map((post) => (
              <Column key={post.slug} fillWidth>
                <SmartLink href={`/blogs/${post.slug}`} className="blog-list-link">
                  <Row fillWidth vertical="center" className="blog-list-row">
                    <Row gap="8" vertical="center" flex={1} className="blog-list-content">
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        className="blog-list-bullet"
                      >
                        ·
                      </Text>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        className="blog-list-date"
                      >
                        {formatShortDate(post.metadata.publishedAt)}
                      </Text>
                      <Text variant="body-default-m" className="blog-list-title">
                        {post.metadata.title}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      className="blog-list-arrow"
                    >
                      →
                    </Text>
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
