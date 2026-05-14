import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import { BlogTOC } from "@/components/blog/BlogTOC";
import {
  Meta,
  Schema,
  Column,
  Heading,
  Row,
  Text,
  SmartLink,
  Media,
  Tag,
  Icon,
  Line,
} from "@once-ui-system/core";
import { baseURL, blogs, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { extractHeadings } from "@/utils/extractHeadings";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "content", "blogs"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = getPosts(["src", "content", "blogs"]);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blogs.path}/${post.slug}`,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts(["src", "content", "blogs"]).find((p) => p.slug === slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <Column fillWidth horizontal="center" paddingTop="32" paddingBottom="xl">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${blogs.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className="blog-post-layout">

        {/* Back button */}
        <Row marginBottom="32">
          <SmartLink href="/blogs" style={{ textDecoration: "none" }}>
            <Row
              gap="8"
              vertical="center"
              paddingX="12"
              paddingY="8"
              radius="m"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
            >
              <Icon name="chevronLeft" size="xs" onBackground="neutral-medium" />
              <Text variant="label-default-s" onBackground="neutral-medium">All posts</Text>
            </Row>
          </SmartLink>
        </Row>

        {/* Post header — full width, centered */}
        <Column gap="12" horizontal="center" marginBottom="40">
          <Text variant="label-default-xs" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
          <Heading variant="display-strong-l" align="center">
            {post.metadata.title}
          </Heading>
          {post.metadata.subtitle && (
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              style={{ fontStyle: "italic" }}
            >
              {post.metadata.subtitle}
            </Text>
          )}
          {post.metadata.tag && (
            <Tag label={post.metadata.tag} variant="neutral" size="s" />
          )}
        </Column>

        {/* Hero image — full width */}
        {post.metadata.image && (
          <Media
            src={post.metadata.image}
            alt={post.metadata.title}
            aspectRatio="16/9"
            priority
            sizes="(min-width: 768px) 80vw, 100vw"
            border="neutral-alpha-weak"
            radius="l"
            marginBottom="40"
          />
        )}

        {/* 70 / 30 body */}
        <div className="blog-post-body">

          {/* Article — 70% */}
          <div className="blog-post-article">
            <Column as="article" fillWidth>
              <CustomMDX source={post.content} />
            </Column>
            <Column marginTop="48">
              <Line />
            </Column>
          </div>

          {/* TOC sidebar — 30% */}
          {headings.length >= 2 && (
            <div className="blog-post-toc">
              <BlogTOC headings={headings} />
            </div>
          )}

        </div>
      </div>

      <ScrollToHash />
    </Column>
  );
}
