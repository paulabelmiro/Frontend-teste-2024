import { ReactNode } from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "@/providers/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EVOB - Cursos Online",
  description: "A melhor plataforma de cursos online",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
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