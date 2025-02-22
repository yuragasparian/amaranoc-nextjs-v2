import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css";
import Header from './../components/Header/index';
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import Footer from './../components/Footer/index';

const montserrat = Montserrat({
  weight: '500',
})

export const metadata: Metadata = {
  title: "Amaranoc - NEXT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <NuqsAdapter>
        <Header />
        {children}
        </NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
