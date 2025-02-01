import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import FirebaseProvider from "./(client)/FirebaseProvider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StreakBeacon",
  description: "Shine a light on your progress. Stay consistent, stay unstoppable!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirebaseProvider>
            {children}
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

