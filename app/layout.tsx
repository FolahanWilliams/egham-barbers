import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const fontOswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Egham Barbers | Sharp Cuts. Classic Fades.",
  description: "Egham Barbers in Surrey, UK. Walk-ins welcome. Expert barbers. Est. in Egham. Call 01784 434222 to book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontOswald.variable} ${fontInter.variable} font-body antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
