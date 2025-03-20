import type { Metadata } from "next";
import { Montserrat, Roboto_Mono } from "next/font/google";
import "./slick.css"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Aspire Keeper Solutions",
  description:
    "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency.",
  robots: "index, follow",
  keywords: [
    "virtual assistant",
    "productivity",
    "task management",
    "remote work",
    "automation",
    "AI assistant",
  ],
  openGraph: {
    url: "https://aspirekeeper.vercel.app/",
    type: "website",
    title: "Aspire Keeper Solutions",
    description:
      "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency.",
    siteName: "Aspire Keeper Solutions",
    images: [
      {
        url: "https://aspirekeeper.vercel.app/thumbnail/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aspire Keeper Solutions Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Keeper Solutions",
    description:
      "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency.",
    creator: "@rjdev",
    site: "@rjdev",
    images: [
      {
        url: "https://aspirekeeper.vercel.app/thumbnail/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aspire Keeper Thumbnail",
      },
    ],
  },
  alternates: {
    canonical: "https://aspirekeeper.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="n2nGFT_84o6GIzBOBmVYbeu42xfdaRrpsit-llx3vNo" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://aspirekeeper.vercel.app/favicon.ico" sizes="32x32" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD Structured Data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aspire Keeper Solutions",
              "url": "https://aspirekeeper.vercel.app/",
              "description":
                "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency.",
              "publisher": {
                "@type": "Organization",
                "name": "Aspire Keeper",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aspirekeeper.vercel.app/thumbnail/thumbnail.png",
                },
              },
              "image": "https://aspirekeeper.vercel.app/thumbnail/thumbnail.png",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aspirekeeper.vercel.app/search?q={search_term}",
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${robotoMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
