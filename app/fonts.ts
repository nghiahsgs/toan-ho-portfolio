import { Fraunces, JetBrains_Mono } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  preload: true,
  style: ["normal", "italic"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  preload: true,
});
