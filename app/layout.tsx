import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Define a CSS variable name
});


export const metadata: Metadata = {
  title: "Exam Stack",
  description: "Search past questions. Understand them instantly. Stack your A’s.",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[#0B1120]`}
      >
        {children}
      </body>
    </html>
  );
}
