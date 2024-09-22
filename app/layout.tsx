import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ThemeProvider from "./Providers";
import Footer from "./_components/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Car Doctor Pro",
  description: "Car Reaper Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body data-theme="carDoctorTheme" className={inter.className}>
          <AuthProvider>
            <div>
              <Navbar />
              <main className="container mx-auto">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
