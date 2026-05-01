import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Improve your front-end skills by building projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
