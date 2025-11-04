import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio - Computer Science Student & Web Developer",
  },
  description: "Personal portfolio showcasing projects, experience, and skills in web development and computer science.",
  keywords: ["portfolio", "web developer", "computer science", "react", "next.js", "typescript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio - Computer Science Student & Web Developer",
    description: "Personal portfolio showcasing projects, experience, and skills in web development and computer science.",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Computer Science Student & Web Developer",
    description: "Personal portfolio showcasing projects, experience, and skills in web development and computer science.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
