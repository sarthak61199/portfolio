import Nav from "@/components/nav";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Agarwal",
  description:
    "Sarthak Agarwal's personal website. I'm a software engineer based in India. I love building things for the web. Proficient in React, TypeScript, Node.js and SQL. Currently working at Incedo as a Senior Software Engineer working on both Frontend and Backend technologies. I have around 3 years of experience. in the software industry. Taking complete ownership from Design to Deployment is what I strive for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.className, "min-h-[100svh] flex flex-col")}
      >
        <Nav />
        <div className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28 flex flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
