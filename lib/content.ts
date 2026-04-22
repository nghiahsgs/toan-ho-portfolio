export const PROFILE = {
  name: "Toan Ho",
  title: "Full-Stack Developer",
  email: "toanho@example.com",
  // TODO: replace with real profile URLs when available
  github: "#",
  linkedin: "#",
};

export const BIO =
  "Tôi là một lập trình viên full-stack với niềm đam mê xây dựng ứng dụng web hiện đại. Tôi thích làm việc với React, Next.js và Node.js để tạo ra những sản phẩm có trải nghiệm người dùng tốt.";

export const SKILLS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Tailwind CSS",
];

export type Project = {
  name: string;
  desc: string;
  stack: string[];
  linkType: "demo" | "source";
};

export const PROJECTS: Project[] = [
  {
    name: "Portfolio Website",
    desc: "Trang web portfolio cá nhân được xây dựng với Next.js và Tailwind CSS.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    linkType: "demo",
  },
  {
    name: "Task Manager App",
    desc: "Ứng dụng quản lý công việc fullstack với xác thực và cập nhật real-time.",
    stack: ["React", "Node.js", "PostgreSQL"],
    linkType: "source",
  },
  {
    name: "E-commerce Store",
    desc: "Cửa hàng trực tuyến với danh sách sản phẩm, giỏ hàng và thanh toán.",
    stack: ["Next.js", "Supabase", "Stripe"],
    linkType: "demo",
  },
  {
    name: "Weather Dashboard",
    desc: "Bảng điều khiển thời tiết với dữ liệu real-time và biểu đồ trực quan.",
    stack: ["React", "Chart.js", "OpenWeather API"],
    linkType: "source",
  },
];
