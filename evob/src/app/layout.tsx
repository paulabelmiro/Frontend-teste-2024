import { ReactNode } from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import ClientLayout from "@/lib/client-layout";
import { Inter } from 'next/font/google';

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
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}