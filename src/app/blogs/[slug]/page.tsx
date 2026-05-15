import { CustomMDX, ScrollToHash } from "@/components";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { baseURL, blogs, person, sameAs } from "@/resources";
import { extractHeadings } from "@/utils/extractHeadings";
import { formatDateParts } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import {
  Column,
  Heading,
  Icon,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function estimateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[#*_`>\-[\]()]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return Math.max(1, Math.ceil(words.length / 220));
}

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
  const readingTime = estimateReadingTime(post.content);
  const dateParts = post.metadata.publishedAt ? formatDateParts(post.metadata.publishedAt) : null;

  return (
    <Column fillWidth horizontal="center" paddingTop="0" paddingBottom="xl">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${blogs.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
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
        className="blog-post-layout page-card"
      >
        <Column gap="16" horizontal="center" marginBottom="40" className="blog-post-header">
          <Row gap="8" wrap horizontal="center" vertical="center" className="blog-post-meta-row">
            {post.metadata.tag && (
              <Tag label={post.metadata.tag} variant="neutral" size="s" className="blog-post-tag" />
            )}
            {dateParts && (
              <span
                className="blog-post-date-chip"
                aria-label={`${dateParts.month} ${dateParts.day}, ${dateParts.year}`}
              >
                <span className="blog-post-date-month">{dateParts.month}</span>
                <span className="blog-post-date-day">{dateParts.day}</span>
                <span className="blog-post-date-year">{dateParts.year}</span>
              </span>
            )}
            <Text variant="label-default-xs" onBackground="neutral-weak" className="blog-post-meta">
              {readingTime} min read
            </Text>
          </Row>
          <Heading variant="display-strong-m" align="center" className="blog-post-title">
            {post.metadata.title}
          </Heading>
          {post.metadata.subtitle && (
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              className="blog-post-subtitle"
            >
              {post.metadata.subtitle}
            </Text>
          )}
        </Column>

        <Line background="neutral-alpha-weak" />

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
            className="blog-post-hero"
          />
        )}

        <div className="blog-post-body">
          <div className="blog-post-article">
            <Column as="article" fillWidth className="mdx-content">
              <CustomMDX source={post.content} />
            </Column>
            <Column marginTop="48">
              <Line />
            </Column>
          </div>

          <div className="blog-post-toc">
            <SmartLink href="/blogs" className="blog-post-back-link">
              <Row
                gap="8"
                vertical="center"
                paddingX="12"
                paddingY="8"
                radius="m"
                marginBottom="16"
              >
                <Icon name="chevronLeft" size="xs" onBackground="neutral-medium" />
                <Text variant="label-default-s" onBackground="neutral-medium">
                  All posts
                </Text>
              </Row>
            </SmartLink>
            {headings.length >= 2 && <BlogTOC headings={headings} />}
          </div>
        </div>
      </Column>

      <ScrollToHash />
    </Column>
  );
}
