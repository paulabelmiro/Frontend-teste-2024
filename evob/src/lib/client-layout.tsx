"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { FavoritesProvider } from "@/contexts/favoritesContext";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <FavoritesProvider>
                <Header />
                {children}
                <Footer />
            </FavoritesProvider>
        </ThemeProvider>
    );
}