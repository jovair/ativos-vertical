import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { AuthProvider } from '@/contexts/AuthContext'
import { SearchProvider } from '@/contexts/SearchContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertical Loto - Documentação",
  description: "Documentação técnica e ativos da Vertical Loto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <SearchProvider>
            <div className="min-h-screen bg-white">
              <Header />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                  {children}
                </main>
              </div>
            </div>
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
