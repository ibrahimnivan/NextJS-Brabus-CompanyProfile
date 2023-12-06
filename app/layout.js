import { Barlow } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'brabus company profile',
  description: 'brabus company profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
