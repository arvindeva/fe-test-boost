import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
      <body className={`${mavenPro.variable} antialiased`}>
        <NextTopLoader color="#ffffff" showSpinner={false} height={3} />
        {children}
      </body>
    </html>
  );
}
