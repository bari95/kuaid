import type { Metadata } from "next";
import { Roboto_Flex, Space_Mono } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100", "400", "700", "900"], // Specify weights you need
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400"], // Regular weight for technical contexts
});

export const metadata: Metadata = {
  title: "Freight Forwarding Solutions | Reliable & Efficient",
  description: "Explore top-notch freight forwarding services designed to streamline your logistics and supply chain needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoFlex.variable} ${spaceMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
           <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

{children}
        </ThemeProvider>
       
      </body>
    </html>
  );
}
