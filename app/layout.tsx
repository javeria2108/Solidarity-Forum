import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight:['400','500','600','700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Solidarity Forum",
  description: "A platform for solidarity with the oppressed communities around the world",
  icons:{
    icon:'/assets/images/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Provider>
        {children}
        <Toaster/>
        </Provider>
        </body>
    </html>
  );
}
