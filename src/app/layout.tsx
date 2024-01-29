import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals/globals.css";
import { layout } from "./app.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Week",
  description: "Check week weather by location",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <body className={inter.className}>
        <main className={layout}>{children}</main>
      </body>
    </html>
  );
}
