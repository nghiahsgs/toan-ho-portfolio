import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SkipLink } from "@/components/skip-link";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toanho.example.com"),
  title: {
    default: "Toan Ho — Full-Stack Developer",
    template: "%s | Toan Ho",
  },
  description:
    "Tôi là một lập trình viên full-stack với niềm đam mê xây dựng ứng dụng web hiện đại.",
  keywords: [
    "Toan Ho",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Toan Ho" }],
  creator: "Toan Ho",
  openGraph: {
    title: "Toan Ho — Full-Stack Developer",
    description:
      "Tôi là một lập trình viên full-stack với niềm đam mê xây dựng ứng dụng web hiện đại.",
    url: "/",
    siteName: "Toan Ho",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toan Ho — Full-Stack Developer",
    description:
      "Tôi là một lập trình viên full-stack với niềm đam mê xây dựng ứng dụng web hiện đại.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`dark ${geistSans.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SkipLink />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
