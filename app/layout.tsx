import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Guest Supply LLC",
  description: "Created With Minimalism",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
