

import FeaturedBlogPosts from '@/components/FeaturedBlogPost2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Script from 'next/script';
import { Metadata } from 'next';

const domain = "https://kuaid.vercel.app"; // Use final domain once live

// Define metadata for the page
export const metadata: Metadata = {
  title: "Kuaid Cargo Blog - Insights on Freight Forwarding",
  description: "Explore insightful blog posts about freight forwarding and logistics services by Kuaid Cargo.",
  openGraph: {
    title: "Kuaid Cargo Blog - Insights on Freight Forwarding",
    description: "Get insights on logistics, supply chain, and freight forwarding services from Kuaid Cargo.",
    url: domain,
    images: [
      {
        url: `${domain}/img/service-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Kuaid Cargo Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kuaid-cargo", // Replace with actual Twitter handle if available
    title: "Kuaid Cargo Blog - Insights on Freight Forwarding",
    description: "Discover articles on freight and logistics by Kuaid Cargo.",
    images: [
      {
        url: `${domain}/images/logo.jpg`,
        alt: "Kuaid Cargo Blog",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-12">
      <Header />
      <main className="flex-1">
        <FeaturedBlogPosts />
      </main>
      <Footer />

      {/* JSON-LD Schema Markup for Home Page */}
      <Script
        id='blog-schema-markup'
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kuaid Cargo Blog",
            "url": domain,
            "description": "Explore insightful blog posts about freight forwarding and logistics services.",
            "publisher": {
              "@type": "Organization",
              "name": "Kuaid Cargo",
              "url": domain,
              "logo": {
                "@type": "ImageObject",
                "url": `${domain}/img/service-1jpg`,
                "width": 60,
                "height": 60,
              }
            },
            "mainEntity": {
              "@type": "Blog",
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "Air Freight",
                  "description": "Discover the best options for air freight.",
                  "url": `${domain}/service/1`,
                  "image": `${domain}/img/service-6.jpg`,
                  "datePublished": "2024-10-01",
                  "author": {
                    "@type": "Organization",
                    "name": "Kuaid Cargo"
                  }
                },
                // Additional blog posts go here
              ]
            }
          }),
        }}
      />
    </div>
  );
}
