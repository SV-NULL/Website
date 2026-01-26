import { siteConfig } from "@/config/site";
import { Metadata } from "next";

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.image,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [image],
      creator: siteConfig.author,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
