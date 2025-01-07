import { Course } from "@/@types/course";

export async function getCourseDetails(courseSlug: string): Promise<Course> {
    const url = `https://api.evob.dev/content/courses/${courseSlug}`

    const requestOptions: RequestInit = {
        method: "GET",
        headers: {
            Origin: "http://localhost:3024",
        },
        redirect: "follow",
    };

    const res = await fetch(url, requestOptions);

    if (!res.ok) {
        const errorDetails = await res.text();
        throw new Error(`Erro na API: ${res.status} - ${errorDetails}`);
    }

    const data = await res.json();
    return data;
};