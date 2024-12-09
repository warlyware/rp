import type { Metadata } from "next";
import { Gotu } from 'next/font/google'
import "./globals.css";

const gotu = Gotu({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: "RP",
  description: "RP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={gotu.className}
      >
        {children}
      </body>
    </html>
  );
}
