export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-border py-6">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
        © {year} Toan Ho · Được xây dựng với Next.js
      </div>
    </footer>
  );
}
