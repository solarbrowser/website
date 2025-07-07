import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solar Browser - The Future of Web Browsing",
  description: "Experience the next generation of web browsing with Solar - an AI-powered browser that learns, protects, and adapts to you.",
  keywords: ["browser", "AI", "artificial intelligence", "web browser", "privacy", "security", "extensions"],
  authors: [{ name: "Vertex Corporation" }],
  creator: "Vertex Corporation",
  openGraph: {
    title: "Solar Browser - The Future of Web Browsing",
    description: "Experience the next generation of web browsing with Solar - an AI-powered browser that learns, protects, and adapts to you.",
    url: "https://browser.solar",
    siteName: "Solar Browser",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Browser - The Future of Web Browsing",
    description: "Experience the next generation of web browsing with Solar - an AI-powered browser that learns, protects, and adapts to you.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
