import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanka De Silva | Full Stack Developer",
  description: "Portfolio website of Sanka De Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-textMain`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
