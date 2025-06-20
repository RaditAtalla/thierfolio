import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
    },
  ],
});

export const metadata: Metadata = {
  title: "Fathir | UI/UX Designer",
  description: "Website portofolio fathir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
