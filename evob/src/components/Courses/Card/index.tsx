import { useFavorites } from "@/contexts/favoritesContext";
import { CardButton, CardContent, CardDescription, CardFavoriteButton, CardFavoriteContainer, CardImage, CardTag, CardTagsContainer, CardTagsMark, CardTagText, CardTitle, CardTitleContent, CourseCard } from "./styles";
import { useRouter } from 'next/navigation'
import { Course } from "@/@types/course";
import { FilledHeartIcon } from "@/components/Icons/FilledHeart";
import { HeartIcon } from "@/components/Icons/Heart";
import { FireIcon } from "@/components/Icons/Fire";

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
                        {isFavorite ?
                            <FilledHeartIcon />
                            : <HeartIcon />
                        }
                    </CardFavoriteButton>
                </CardFavoriteContainer>
                {
                    course.settings.course_types.live || course.settings.course_types.online || course.settings.course_types.presential ?
                        <CardTagsContainer>
                            <CardTagsMark>
                                <FireIcon />
                            </CardTagsMark>
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