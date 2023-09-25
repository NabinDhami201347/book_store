import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ThemeProvider from "@/components/providers/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Book Store",
  description: "Book Store website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex flex-col h-screen w-full">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
