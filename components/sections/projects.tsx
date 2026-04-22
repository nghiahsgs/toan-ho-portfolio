import { EditorialTile } from "@/components/editorial-tile";

const PROJECTS = [
  {
    index: "01",
    name: "Nova Banking",
    kind: "MOBILE APP · REDESIGN",
    desc: "Thiết kế lại trải nghiệm ngân hàng số cho thế hệ Gen Z — flow mở thẻ dưới 2 phút.",
    year: "2025",
  },
  {
    index: "02",
    name: "Kafe Identity",
    kind: "BRAND · IDENTITY SYSTEM",
    desc: "Xây hệ thống thương hiệu cho chuỗi cafe 12 chi nhánh — logo, bao bì, điểm chạm số.",
    year: "2024",
  },
  {
    index: "03",
    name: "Lumen Editorial",
    kind: "WEB · EDITORIAL",
    desc: "Trang tạp chí dài hơi về kiến trúc đương đại — typography dẫn lối câu chuyện.",
    year: "2024",
  },
  {
    index: "04",
    name: "Orbit Design System",
    kind: "SYSTEM · COMPONENTS",
    desc: "Design system 120+ component cho nền tảng SaaS nội bộ — hướng đến nhất quán đa đội.",
    year: "2023",
  },
];

export function Projects() {
  return (
    <div className="px-6 md:px-10 lg:px-16">
      {/* heading row — mono labels + year range */}
      <div className="flex items-baseline justify-between border-b border-hairline pb-6">
        <p
          id="du-an-title"
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          SELECTED WORK / 02
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          2023 — 2025
        </p>
      </div>

      {/* tiles */}
      <div className="flex flex-col">
        {PROJECTS.map((p) => (
          <EditorialTile
            key={p.index}
            index={p.index}
            name={p.name}
            kind={p.kind}
            desc={p.desc}
            year={p.year}
          />
        ))}
      </div>
    </div>
  );
}
