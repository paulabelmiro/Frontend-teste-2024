import { Course } from "@/@types/course";
import { requestOptions } from "./requestOptions";

// Retorna da API os detalhes de um curso
export async function getCourseDetails(courseSlug: string): Promise<Course> {
    const URL = process.env.NEXT_PUBLIC_API_URL + "courses/" + courseSlug;

    const res = await fetch(URL, requestOptions);

    if (!res.ok) {
        const errorDetails = await res.text();
        throw new Error(`Erro na API: ${res.status} - ${errorDetails}`);
    }

    const data = await res.json();
    return data;
};