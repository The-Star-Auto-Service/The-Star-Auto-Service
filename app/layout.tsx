import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Star Auto Service - Premier Auto Repair in Richardson, TX",
  description: "Excellence in every mile. ASE-certified technicians, honest pricing, bilingual service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 80 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
