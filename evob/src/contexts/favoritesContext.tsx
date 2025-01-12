"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Course } from "@/@types/course";

interface FavoritesContextType {
  favorites: Course[];
  toggleFavorite: (course: Course) => void;
}

const FAVORITES_KEY = "favorite_courses";

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Course[]>([]);

  // Carrega os favoritos do localStorage na inicialização
  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    try {
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch {
      console.error("Erro ao carregar favoritos do localStorage");
    }
  }, []);

  // Atualiza o localStorage sempre que os favoritos mudarem
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (course: Course) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav.id === course.id);
      return isFavorited
        ? prevFavorites.filter((fav) => fav.id !== course.id)
        : [...prevFavorites, course];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites deve ser utilizado com o FavoritesProvider");
  }
  return context;
}