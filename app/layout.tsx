import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Samarth Parekh | Portfolio",
  description: "Computer Science and Mathematics student passionate about building real-world AI, ML, and quantum solutions.",
  icons: {
    icon: "/s-icon.png",
    apple: "/s-icon.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/s-icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/s-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
