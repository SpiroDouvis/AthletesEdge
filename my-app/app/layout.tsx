import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hockey Heroes - Training App",
  description: "Hockey training app for underprivileged children",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-red-500 min-h-screen`}>
        <div className="flex flex-col h-screen">
          <main className="flex-1 overflow-auto pb-16">{children}</main>
          <Navigation />
        </div>
      </body>
    </html>
  )
}

