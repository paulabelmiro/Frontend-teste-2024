import { useFavorites } from "@/contexts/favoritesContext";
import Image from "next/image";
import { CardButton, CardContent, CardDescription, CardFavoriteButton, CardFavoriteContainer, CardImage, CardTag, CardTagsContainer, CardTagsMark, CardTagText, CardTitle, CardTitleContent, CourseCard } from "./styles";
import fire from "@/assets/fire.svg";
import heart from "@/assets/heart.svg";
import filledHeart from "@/assets/filled-heart.svg";
import { useRouter } from 'next/navigation'
import { Course } from "@/@types/course";

interface CardProps {
    course: Course
}

export default function Card({ course }: CardProps) {
    const { favorites, toggleFavorite } = useFavorites();
    const router = useRouter();

    const isFavorite = favorites.some((favorite) => favorite.id === course.id);

    return (
        <CourseCard>
            <CardImage $thumbnail={course.thumbnail}>
                <CardFavoriteContainer>
                    <CardFavoriteButton onClick={() => toggleFavorite(course)}>
                        <Image
                            src={isFavorite ? filledHeart : heart}
                            alt="Favorito"
                            width={20}
                            height={20}
                        />
                    </CardFavoriteButton>
                </CardFavoriteContainer>
                {
                    course.settings.course_types.live || course.settings.course_types.online || course.settings.course_types.presential ?
                        <CardTagsContainer>
                            <CardTagsMark><Image src={fire} alt="Destaques" width={10} height={12} /></CardTagsMark>
                            <CardTag>
                                {course.settings.course_types.live ? <CardTagText>Ao vivo</CardTagText> : null}
                                {course.settings.course_types.online ? <CardTagText>Online</CardTagText> : null}
                                {course.settings.course_types.presential ? <CardTagText>Presencial</CardTagText> : null}
                            </CardTag>
                        </CardTagsContainer>
                        : null
                }
            </CardImage>
            <CardContent>
                <CardTitleContent>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.short_description}</CardDescription>
                </CardTitleContent>
                <CardButton
                    $variantsize="lg"
                    $variantcolor="primary"
                    onClick={() => router.push(`/courses/${course.slug}`)}
                >
                    Acessar
                </CardButton>
            </CardContent>
        </CourseCard>
    )
}