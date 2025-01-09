"use client"
import { useFavorites } from "@/contexts/favoritesContext";
import Image from "next/image";
import { CourseBanner, CourseDetailsContainer, CourseDetailsSection, CourseDetailsText, CourseDetailsTitle, CourseMenuButton, CourseMenuButtonBorder, CourseMenuButtonContainer, CourseMenuContainer, CoursePage } from "./styles";
import heart from "@/assets/heart-black.svg"
import filledHeart from "@/assets/filled-heart-black.svg"
import { Course } from "@/@types/course";

interface CourseDetailsProps {
    course: Course
}

export default function CourseDetails({ course }: CourseDetailsProps) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.some((favorite) => favorite.id === course.id);

    return (
        <CoursePage>
            <CourseBanner $srcdesktop={course.banner} $srcmobile={course.banner_mobile} />
            <CourseDetailsSection>
                <CourseDetailsContainer>
                    <CourseDetailsTitle>{course.title}</CourseDetailsTitle>
                    <CourseDetailsText dangerouslySetInnerHTML={{ __html: course.long_description }} />
                </CourseDetailsContainer>
                <CourseMenuContainer>
                    <CourseMenuButtonBorder>
                        <CourseMenuButtonContainer>
                            <CourseMenuButton $variantsize="sm" $variantcolor="white" onClick={() => toggleFavorite(course)}>
                                <Image src={isFavorite ? filledHeart : heart} alt="Favorito" width={12} height={12} />
                                {isFavorite ? "Remover" : "Favoritar"}
                            </CourseMenuButton>
                        </CourseMenuButtonContainer>
                    </CourseMenuButtonBorder>
                </CourseMenuContainer>
            </CourseDetailsSection>
        </CoursePage>
    )
}