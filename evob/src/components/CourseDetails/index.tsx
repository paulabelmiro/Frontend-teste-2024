"use client"
import { useFavorites } from "@/contexts/favoritesContext";
import { CourseBanner, CourseDetailsContainer, CourseDetailsSection, CourseDetailsText, CourseDetailsTitle, CourseMenuButton, CourseMenuButtonBorder, CourseMenuButtonContainer, CourseMenuContainer, CoursePage } from "./styles";
import { Course } from "@/@types/course";
import { FilledHeartIcon } from "../Icons/FilledHeart";
import { HeartIcon } from "../Icons/Heart";
import { defaultTheme } from "@/styles/theme/default";

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
                                {isFavorite ? <FilledHeartIcon width={12} height={12} color={defaultTheme["gray-850"]} /> : <HeartIcon width={12} height={12} color={defaultTheme.black} />}
                                {isFavorite ? "Remover" : "Favoritar"}
                            </CourseMenuButton>
                        </CourseMenuButtonContainer>
                    </CourseMenuButtonBorder>
                </CourseMenuContainer>
            </CourseDetailsSection>
        </CoursePage>
    )
}