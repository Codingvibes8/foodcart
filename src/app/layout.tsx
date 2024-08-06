import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Provider from "@/src/app/Provider";
import React from "react";

export const metadata: Metadata = {
  title: "FoodCart",
  description: "Online Food Ordering App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
    <html lang="en">
      <body className={inter.className}>
     <Provider>{children}</Provider>
      </body>
    </html>
     </>
  );
}
