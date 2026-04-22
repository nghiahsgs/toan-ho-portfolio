export function About() {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 md:px-10 lg:px-16">
      {/* LEFT — mono label column */}
      <div className="col-span-12 md:col-span-3">
        <div className="flex items-start gap-4 md:flex-col md:gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            ABOUT / 01
          </p>
          <div className="hidden md:block h-40 w-px bg-hairline" />
        </div>
      </div>

      {/* RIGHT — display serif + body */}
      <div className="col-span-12 md:col-span-8">
        <h2
          id="gioi-thieu-title"
          className="font-display italic text-ink"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 96, "SOFT" 50, "WONK" 1',
          }}
        >
          Tạo ra những thứ có chiều sâu.
        </h2>

        <div className="mt-10 grid max-w-2xl gap-6 font-sans text-[17px] leading-[1.65] text-ink-muted">
          <p>
            Mình là Toan — product designer làm việc giữa typography, brand và
            interface. Bắt đầu từ editorial design cho các tạp chí độc lập, rồi chuyển dần
            sang sản phẩm số khi thấy màn hình cũng cần nhịp điệu như trang giấy.
          </p>
          <p>
            Mình tin rằng thiết kế tốt là thứ mở được cánh cửa — giữa người dùng và
            thương hiệu, giữa đội ngũ và hệ thống, giữa ý tưởng và hiện thực. Không hào
            nhoáng. Có chủ đích.
          </p>
          <p>
            Hiện đang ở Sài Gòn, cộng tác với các team fintech, SaaS và studio branding
            ở Việt Nam và Đông Nam Á.
          </p>
        </div>
      </div>
    </div>
  );
}
