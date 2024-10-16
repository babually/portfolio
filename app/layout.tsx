import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
  title: 
    "Mrisho Ally Mvungi Portfolio",
  description:
    "Explore portfolio of Mrisho Ally Mvungi, a skilled React/Next.js Developer and projecte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex justify-center items-center flex-col overflow-hidden sm:items-start">
            {children}
          </main>

          <footer className="py-4 text-center border-t">
            <p>&copy; 2024 Mrisho Ally Mvungi. All rights reserved.</p>
          </footer>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
