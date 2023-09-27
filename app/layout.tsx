import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ThemeProvider from "@/components/providers/theme-provider";
import ToastProvider from "@/components/providers/toaster-provider";
import NextAuthProvider from "@/components/providers/session-provider";

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
          <NextAuthProvider>
            <main className="flex flex-col h-screen w-full">
              <SiteHeader />
              <ToastProvider />
              <div className="flex-1 mt-16">{children}</div>
              <SiteFooter />
            </main>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
