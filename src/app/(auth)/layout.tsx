import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

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
          {children}
          </body>
      </html>
  );
}