import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import "@/components/Profile/Profile.css";
import NextTopLoader from "nextjs-toploader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader color="#FFF" showSpinner={false} />
        <Header />
        {children}</body>
    </html>
  );
}
