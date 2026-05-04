import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Protection from "./components/Protection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HabitFlow",
  description:
    "Track your daily routines, stay consistent, and achieve your goals with ease. HabitFlow is the premium habit tracking dashboard for serious goal-setters.",
  icons: {
    icon: "/images/icon.png",
  },
  keywords: [
    "habit tracker",
    "productivity",
    "goal setting",
    "daily routines",
    "streak tracker",
  ],
  openGraph: {
    title: "HabitFlow",
    description:
      "Track your daily routines, stay consistent, and achieve your goals with ease.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen antialiased`}>
        <Protection />
        <CustomCursor />
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
