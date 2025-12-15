import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/segments/Navbar/page";
import Footer from "@/segments/Footer/page";

// Configure Montserrat font (with multiple weights for flexibility)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"], // optional: include weights you need
});

export const metadata: Metadata = {
  title: "Neunorth",
  description: "Innovative Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-gray-900 text-gray-100 min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}