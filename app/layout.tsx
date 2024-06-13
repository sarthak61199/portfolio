import Nav from "@/components/nav";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Agarwal",
  description:
    "Sarthak Agarwal's personal website. I'm a software engineer based in India. I love building things for the web. Proficient in React.js, Next.js, TypeScript, Node.js and SQL. Currently working at Incedo as a Senior Software Engineer working on both Frontend and Backend technologies. I have around 3 years of experience. in the software industry. Taking complete ownership from Design to Deployment is what I strive for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/icons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/icons/android-chrome-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icons/android-chrome-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={cn(
          montserrat.className,
          "min-h-[100svh] flex flex-col font-base"
        )}
      >
        <Nav />
        <div className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28 flex flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
