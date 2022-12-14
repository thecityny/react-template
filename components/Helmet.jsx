import React from "react";
import Head from "next/head";
import { meta } from "../data/meta";
import { useRouter } from "next/router";

const SiteMetadata = () => {
  const router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const absoluteUrl = origin + router.asPath;
  const socialImageUrl = `${absoluteUrl}${meta.social_image}`;

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: meta.seo_headline,
    image: {
      "@type": "ImageObject",
      contentUrl: socialImageUrl,
      url: socialImageUrl,
      representativeOfPage: true,
    },
    dateCreated: meta.pub_date | new Date(),
    datePublished: meta.pub_date | new Date(),
    dateModified: meta.update_date | new Date(),
    mainEntityOfPage: absoluteUrl,
    description: meta.seo_description,
    publisher: {
      "@type": "Organization",
      name: meta.site_name,
      url: "https://www.thecity.nyc/",
    },
    author: meta.byline.map(
      (author) => `{
            "name": "${author.name}",
            "url": "${author.url}",
            "@type": "Person"
          }`
    ),
  };

  return (
    <Head>
      <title>{meta.seo_headline}</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={meta.seo_description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={absoluteUrl} />
      <meta property="og:title" content={meta.social_headline} />
      <meta property="og:description" content={meta.social_description} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:locale" content={meta.locale} />

      <meta property="twitter:title" content={meta.social_headline} />
      <meta property="twitter:description" content={meta.social_description} />
      <meta property="twitter:url" content={absoluteUrl} />
      <meta property="twitter:image" content={socialImageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SiteMetadata;
