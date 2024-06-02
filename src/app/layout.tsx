import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const inter = Courier_Prime({ style: "normal", weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Himanshu",
  description: "Himanshu is available here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-general-background bg-cover bg-no-repeat">{children}</body>
    </html>
  );
}
