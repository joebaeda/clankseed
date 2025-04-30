import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "coming soon | clankseed",
  description: "we are working on something exciting! Stay tuned for our launch.",
  openGraph: {
    title: "coming soon | clankseed",
    description: "we are working on something exciting! Stay tuned for our launch.",
    url: "https://www.clankseed.com",
    siteName: "clankseed",
    images: [
      {
        url: "https://www.clankseed.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "clankseed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "coming soon | clankeseed",
    description: "we are working on something exciting! Stay tuned for our launch.",
    images: ["https://www.clankseed.com/og-image.png"],
  },
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
