import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "atropos/atropos.min.css";
import type { Metadata } from "next";
import { Alumni_Sans_Pinstripe } from "next/font/google";
import "./globals.css";

const alumniSansPinstripe = Alumni_Sans_Pinstripe({
  weight: "400"
})

export const metadata: Metadata = {
  title: "Boda M&M",
  description: "Aquesta és la nostra boda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cat">
      <body
        className={`${alumniSansPinstripe.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
