import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";

// Fonts are declared as @font-face in globals.css and served from /public,
// so nothing here depends on a network fetch at build time.

const SITE = "https://browser.solar";
const DESCRIPTION =
  "Solar is a browser built from the ground up on today's standards, running on its own rendering engine and the Quanta JavaScript engine. In development, in the open.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Solar Browser -- A browser built from the ground up",
    template: "%s -- Solar Browser",
  },
  description: DESCRIPTION,
  applicationName: "Solar Browser",
  authors: [{ name: "Solar", url: "https://github.com/solarbrowser" }],
  creator: "Solar",
  publisher: "Solar",
  keywords: [
    "Solar Browser",
    "web browser",
    "browser engine",
    "rendering engine",
    "Quanta",
    "JavaScript engine",
    "ECMAScript engine",
    "open source browser",
    "privacy browser",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Solar Browser",
    title: "Solar Browser",
    description: DESCRIPTION,
    url: SITE,
    locale: "en",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Solar Browser -- a browser built from the ground up on today's standards.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solarbrowser",
    creator: "@solarbrowser",
    title: "Solar Browser",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons come from the app-directory file convention:
  // icon.svg (modern), favicon.ico (legacy), apple-icon.png -- all generated
  // from public/logo.svg, so there is one source of truth for the mark.
};

export const viewport: Viewport = {
  // The auto palette follows the clock, so the browser chrome colour can only
  // follow the coarse light/dark split. These are the day and night grounds.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning applies to this element only, not its children.
    // themeInitScript rewrites data-mode/data-band/data-theme before React
    // hydrates -- that is the whole point, it is what prevents the flash -- so
    // the server values below are always a placeholder the client corrects.
    // Without this, React reports a mismatch on every visit outside the
    // default band. Hydration warnings anywhere else are still reported.
    <html
      lang="en"
      data-mode="auto"
      data-band="night"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Only the latin subsets are preloaded: they carry almost every
            glyph on the site, and latin-ext is fetched on demand. */}
        <link
          rel="preload"
          href="/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jetbrains-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Applies the stored theme before first paint so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="solarbrowser"
          data-description="Support me on Buy me a coffee!"
          data-message="powering the future of browsing, support Solar's open-source light, thanks for even thinking!"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          async
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
