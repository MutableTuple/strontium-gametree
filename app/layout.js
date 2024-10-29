import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import { Afacad } from "next/font/google";

const afacad = Afacad({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.className} ${afacad.className} antialiased `}>
        {children}
      </body>
    </html>
  );
}
