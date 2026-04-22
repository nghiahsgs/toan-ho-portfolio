"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#gioi-thieu", label: "Giới thiệu", index: "01" },
  { href: "#du-an", label: "Dự án", index: "02" },
  { href: "#lien-he", label: "Liên hệ", index: "03" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-[backdrop-filter,background-color,border-color] duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-noir/70 border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Điều hướng chính"
        className="flex h-16 items-center justify-between px-6 md:px-10 lg:px-16"
      >
        <Link
          href="#hero"
          className="font-display text-lg font-extrabold tracking-[0.15em] text-ink hover:text-neon transition-colors focus:outline-none focus-visible:text-neon"
          aria-label="Toan Ho — trang chủ"
        >
          TH
        </Link>
        <ul className="flex items-center gap-6 sm:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-block font-mono text-xs uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors focus:outline-none focus-visible:text-ink"
              >
                <span className="text-muted mr-1">{link.index}</span>
                <span className="text-muted mr-1">·</span>
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-neon transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
