import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
// import { Navbar } from "@/components/floating-navbar";
import { NavbarDemo } from "@/components/navbar";
import { HoverBorderGradientDemo } from "@/components/border-gradient";

import Head from 'next/head'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html className="dark">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Portfolio</title>
      </head>
      <body>
        {/* header */}
        <div>
          <NavbarDemo />
        </div>
        {children}
      </body>
    </html>
  );
}


