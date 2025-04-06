// pages/activiteiten/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import path from "path";

type Props = {
  activiteit: {
    metadata: {
      titel: string;
      datum: string;
    };
    contentHtml: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require("fs");
  const files = fs.readdirSync("content/activiteiten");
  const paths = files.map((filename: string) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false, // Dit betekent dat andere slugs 404 geven
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const filePath = path.join("content/activiteiten", `${params?.slug}.md`);
  const activiteit = await getMarkdownContent(filePath) as Props["activiteit"];

  return {
    props: {
      activiteit,
    },
  };
};

export default function ActiviteitDetail({ activiteit }: Props) {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold">{activiteit.metadata.titel}</h1>
      <p className="text-sm text-yellow-500">{activiteit.metadata.datum}</p>
      <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: activiteit.contentHtml }} />
    </main>
  );
}
