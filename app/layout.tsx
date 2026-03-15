import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Serendale - Advanced Blockchain Technology with AI-Powered Security",
    template: "%s | Serendale"
  },
  description: "High-performance blockchain platform (120K TPS) with guaranteed AI-based data security. Proof of Stake consensus algorithm enables unlimited speeds and scalability.",
  keywords: ["blockchain", "AI", "cryptocurrency", "blockchain technology", "smart contracts", "decentralized", "Proof of Stake"],
  authors: [{ name: "Serendale Team" }],
  creator: "Serendale",
  publisher: "Serendale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Serendale",
    title: "Serendale - Advanced Blockchain Technology with AI-Powered Security",
    description: "High-performance blockchain platform (120K TPS) with guaranteed AI-based data security. Proof of Stake consensus algorithm enables unlimited speeds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendale - Advanced Blockchain Technology",
    description: "High-performance blockchain platform with AI-powered security and unlimited scalability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
