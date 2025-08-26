import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyBoost - Blog",
  description: "Tech blog by MyBoost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mavenPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
