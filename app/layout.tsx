import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreakBeacon - Track Your Progress",
  description: "Shine a light on your progress. Stay consistent, stay unstoppable!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold inline-block">🌟 StreakBeacon</span>
                  </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/" className="transition-colors hover:text-foreground/80">Home</Link>
                  <Link href="/dashboard" className="transition-colors hover:text-foreground/80">Dashboard</Link>
                  <Link href="/settings" className="transition-colors hover:text-foreground/80">Settings</Link>
                </nav>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <nav className="flex items-center space-x-2">
                    <ModeToggle />
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <div className="container">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
