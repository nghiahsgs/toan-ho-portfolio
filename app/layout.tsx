import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { fraunces, jetbrainsMono } from "./fonts";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/skip-link";
import { CursorSpot } from "@/components/cursor-spot";

export const metadata: Metadata = {
  metadataBase: new URL("https://toanho.example.com"),
  title: {
    default: "Toan Ho — Product Designer",
    template: "%s | Toan Ho",
  },
  description: "Product designer dựng trải nghiệm số ở Sài Gòn.",
  keywords: [
    "Toan Ho",
    "Product Designer",
    "UI UX",
    "Brand Identity",
    "Design System",
    "Editorial",
    "Portfolio",
    "Saigon",
  ],
  authors: [{ name: "Toan Ho" }],
  creator: "Toan Ho",
  openGraph: {
    title: "Toan Ho — Product Designer",
    description: "Product designer dựng trải nghiệm số ở Sài Gòn.",
    url: "/",
    siteName: "Toan Ho",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/icon.svg", width: 512, height: 512, alt: "Toan Ho" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toan Ho — Product Designer",
    description: "Product designer dựng trải nghiệm số ở Sài Gòn.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`dark ${fraunces.variable} ${jetbrainsMono.variable} ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-noir text-ink font-sans antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden />
        <CursorSpot />
        <SkipLink />
        <SiteNav />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
