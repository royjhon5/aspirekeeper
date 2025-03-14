import type { Metadata } from "next";
import { Montserrat, Roboto_Mono } from "next/font/google";
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
  description: "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
  robots: "index, follow",
  keywords: [
    "elastic",
    "python",
    "javascript",
    "react",
    "machine learning",
    "data science"
  ],
  openGraph: {
    url: "https://aspirekeeper-demo.vercel.app/",
    type: "website",
    title: "Aspire Keeper Solutions",
    description:
      "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
    images: [
      {
        url: "https://dminhvu.com/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aspire Keeper Solutions Thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Keeper Solutions",
    description:
      "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
    creator: "rjdev",
    site: "rjdev.space",
    images: [
      {
        url: "https://aspirekeeper-demo.vercel.app/thumbnail/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aspire Keeper Thumbnail"
      }
    ]
  },
  alternates: {
    canonical: "https://aspirekeeper-demo.vercel.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body
        className={`${montserrat.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
