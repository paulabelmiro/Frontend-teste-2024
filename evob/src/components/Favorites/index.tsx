"use client"
import { useFavorites } from "@/contexts/favoritesContext";
import Courses from "../Courses";

export default function FavoritesSection() {
    const { favorites } = useFavorites();

    return <Courses title="Meus favoritos" courses={favorites} />;
}