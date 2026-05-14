import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sammeske.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sam Meske | AI Product Strategist, Innovation Leader & Consultant",
    template: "%s | Sam Meske",
  },
  description:
    "Systems-oriented AI product strategist with a background in healthcare research and production AI systems.",
  applicationName: "Sam Meske Portfolio",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sam Meske | AI Product Strategist, Innovation Leader & Consultant",
    description:
      "Systems-oriented AI product strategist with a background in healthcare research and production AI systems.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sam Meske",
    url: siteUrl,
    jobTitle:
      "AI Product Strategist, Innovation Leader & Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Breastcancer.org",
    },
    sameAs: [
      "https://www.linkedin.com/in/sam-meske-ms-mba/",
      "https://github.com/smeske10",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sam Meske Portfolio",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

