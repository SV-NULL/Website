// pages/index.tsx
import { GetStaticProps } from "next";
import { getMarkdownContent } from "@/lib/markdown";

interface Metadata {
  title: string;
}

interface Props {
  metadata: Metadata;
  contentHtml: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { metadata, contentHtml } = await getMarkdownContent("content/home.md");

  if (!metadata || !metadata.title) {
    throw new Error("Metadata is missing the 'title' property.");
  }

  return {
    props: {
      metadata: metadata as Metadata,
      contentHtml,
    },
  };
};

export default function Home({ metadata, contentHtml }: Props) {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-yellow-500">{metadata.title}</h1>
      <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
