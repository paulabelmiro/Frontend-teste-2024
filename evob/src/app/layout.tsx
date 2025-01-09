import { ReactNode } from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from 'next/font/google';
import Providers from "@/providers/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "EVOB - Teste técnico",
  description: "Site gerado para o teste técnico do processo seletivo da EVOB - Paula Belmiro",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}