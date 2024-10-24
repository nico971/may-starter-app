import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Anek_Telugu, Roboto_Mono } from "next/font/google";
import "./globals.css";


const RobotoMono = Roboto_Mono({
  subsets:["latin"],
  variable : "--font-mono"
})
const AnekTelugu = Anek_Telugu({
  subsets:["latin"],
  variable : "--font-caption"
})
export const metadata: Metadata = {
  title: "Nico . software Engineer",
  description: "Developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable,AnekTelugu.variable,RobotoMono.variable,"font-sans h-full bg-background text-foreground")} >
        {children}
      </body>
    </html>
  );
}
