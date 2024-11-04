import type { Metadata } from "next";
import { Roboto_Flex, Space_Mono } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import Script from "next/script";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100", "400", "700", "900"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Freight Forwarding Solutions | Reliable & Efficient",
  description: "Explore top-notch freight forwarding services designed to streamline your logistics and supply chain needs.",
  openGraph: {
    title: "Freight Forwarding Solutions | Reliable & Efficient",
    description: "Streamline your logistics and supply chain with top-notch freight forwarding services.",
    url: "https://kuaid.vercel.app", // use "https://kuaid-cargo.com" once live
    siteName: "Kuaid Cargo",
    images: [
      {
        url: "https://kuaid.vercel.app/images/service-2.jpg",
        width: 1200,
        height: 630,
        alt: "Kuaid Cargo - Freight Forwarding Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kuaid-cargo", // Replace with your Twitter handle
    title: "Freight Forwarding Solutions | Reliable & Efficient",
    description: "Top-notch freight forwarding services to streamline logistics and supply chain needs.",
    images: [
      {
        url: "https://kuaid.vercel.app/img/service-1.jpg",
        alt: "Kuaid Cargo - Freight Forwarding Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup for Organization */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kuaid Cargo",
              "url": "https://kuaid.vercel.app",
              "logo": "https://kuaid.vercel.app/service.jpg",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+255745787370",
                  "contactType": "Customer Service",
                  "areaServed": "TZ",
                  "availableLanguage": ["English", "Swahili"]
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${robotoFlex.variable} ${spaceMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
