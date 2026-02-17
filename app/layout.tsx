import type { Metadata } from "next";
import "../src/styles/globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export const metadata: Metadata = {
  title: "TRC Transition Services | Career Transition & Outplacement",
  description: "Professional career transition, outplacement services, and executive coaching. Your journey, our mission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
