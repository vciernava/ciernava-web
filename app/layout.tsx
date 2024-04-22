import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import HrefLink from "./components/Link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

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
  ]
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
          <div className="styled-float left">
            <div className="styled-socials">
              <ul>
                <li><HrefLink href="https://github.com/vciernava" className="after:hidden"><GitHubLogoIcon /></HrefLink></li>
                <li><HrefLink href="https://cz.linkedin.com/in/vciernava" className="after:hidden"><LinkedInLogoIcon /></HrefLink></li>
              </ul>
            </div>
          </div>
          <div className="styled-float right">
            <div className="styled-email">
              <HrefLink href="mailto:kontakt@viktorciernava.eu" className="after:hidden">kontakt@viktorciernava.eu</HrefLink>
            </div>
          </div>
        {children}
        </body>
    </html>
  );
}
