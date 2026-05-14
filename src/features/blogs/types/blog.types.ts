export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    subtitle?: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tag?: string;
  };
  content: string;
};
