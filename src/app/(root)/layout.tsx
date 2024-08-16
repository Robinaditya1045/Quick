import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSideBar";
import {Providers} from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Quick auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1 flex`}>
          <Providers >
          <LeftSidebar />
          {children}
          </Providers>
          </body>
      </html>
  );
}