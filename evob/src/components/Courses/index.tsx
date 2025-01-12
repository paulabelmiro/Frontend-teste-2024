"use client";
import { Course } from "@/@types/course";
import { CardsContainer, CoursesSection, CoursesTitle, CoursesTopbar } from "./styles";
import Card from "./Card";
import Empty from "./Empty";

interface CoursesProps {
    title: string
    courses: Course[]
}

export default function Courses({ title, courses }: CoursesProps) {
    return (
        <CoursesSection id={title.replace(/\s/g, "-")}>
            <CoursesTopbar>
                <CoursesTitle>{title}</CoursesTitle>
            </CoursesTopbar>
            {
                courses.length === 0 ?
                    <Empty />
                    : <CardsContainer>
                        {
                            courses.map((course) => (
                                <Card
                                    key={course.id}
                                    course={course}
                                />
                            ))
                        }
                    </CardsContainer>
            }
        </CoursesSection>
    );
}