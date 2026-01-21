import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: {
    default: `${site.siteName} | ${site.tagline}`,
    template: `%s | ${site.siteName}`,
  },
  description: site.tagline,
  metadataBase: new URL("https://theaiguides.co"),
  openGraph: {
    title: site.siteName,
    description: site.tagline,
    url: "https://theaiguides.co",
    siteName: site.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.siteName,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans"> 
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
