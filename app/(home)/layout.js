import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import connectMongoDB from "@/service";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await connectMongoDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar menu={true} />
        <main>{children}</main>
      </body>
    </html>
  );
}