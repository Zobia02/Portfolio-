import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syeda Zobia Irshad | AI Engineer & Software Developer",
  description:
    "Portfolio of Syeda Zobia Irshad — AI master's student and software engineer building reliable intelligent products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
