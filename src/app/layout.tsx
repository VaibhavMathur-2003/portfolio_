import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vaibhav",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en w-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden w-full`}
      >
        <header className="fixed top-0 z-50 w-full bg-transparent shadow-lg shadow-purple-500 text-white px-4 py-2 backdrop-blur transition-all duration-300 dark:bg-muted/80 md:px-6">
          <div className="container mx-auto flex h-12 max-w-7xl items-center md:justify-between justify-center">
            <Link
              href="/"
              className="hidden md:flex items-center gap-2"
              prefetch={false}
            >
              <span className="text-lg font-semibold">Portfolio</span>
            </Link>
            <nav className="flex justify-around max-[768px]:w-full items-center gap-6 bg-black p-3 px-6 border border-white rounded-full text-sm font-medium">
              <Link
                href="/"
                className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                prefetch={false}
              >
                Work
              </Link>
              <Link
                href="/experience"
                className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                prefetch={false}
              >
                Experience
              </Link>
              <Link
                href="/info"
                className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                prefetch={false}
              >
                Info
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-4 ">
              <Link
                href="https://www.linkedin.com/in/vaibhav-mathur-a63940231/"
                className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                prefetch={false}
              >
                LinkedIn
              </Link>
              <Link
                href="https://drive.google.com/file/d/1Qm9HLHcSn25Vl24zywiy4U8Xo8QkViz2/view?usp=drive_link"
                className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                prefetch={false}
              >
                Resume
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
