import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montessori Academy | Paradise Valley, Arizona",
  description:
    "A public Montessori charter school in Paradise Valley, AZ serving toddlers through 8th grade. Where curiosity leads and excellence follows.",
  keywords: [
    "Montessori",
    "Paradise Valley",
    "Arizona",
    "charter school",
    "K-8",
    "education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
