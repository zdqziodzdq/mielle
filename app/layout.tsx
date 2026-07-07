import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mielle – Râpe Électrique Anti-Callosités HoneyGlow",
  description:
    "Mielle : découvrez la râpe électrique HoneyGlow™ pour des pieds doux en 2 minutes. Livraison gratuite, 30j satisfait ou remboursé.",
  openGraph: {
    title: "Mielle – Râpe Électrique Anti-Callosités HoneyGlow",
    description:
      "Mielle : découvrez la râpe électrique HoneyGlow™ pour des pieds doux en 2 minutes.",
    url: "https://getmielle.com",
    siteName: "Mielle",
    images: [
      {
        url: "https://getmielle.com/cdn/shop/files/banniere_rs_3.png?v=1754438366",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="bg-cream scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://getmielle.com/cdn/shop/files/logo_1.png?v=1754303122&width=64"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
