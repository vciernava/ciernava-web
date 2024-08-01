import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viktor Čierňava",
  description: "Software engineer building things on the web",
  keywords: [
    "software engineer",
    "developer",
    "viktor čierňava",
    "čierňava",
    "web developer",
    "typescript",
    "react",
    "elixir"
  ],
  icons: [
    {
      rel: "icon",
      url: "./assets/favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "./assets/favicon/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      url: "./assets/favicon/site.webmanifest",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  );
}
