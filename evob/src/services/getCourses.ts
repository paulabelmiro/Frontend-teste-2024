import { Course } from "@/@types/course";
import { requestOptions } from "./requestOptions";

// Retorna a lista de cursos da API
export async function getCourses(): Promise<Course[]> {
  const URL = process.env.NEXT_PUBLIC_API_URL + "courses/";

  const res = await fetch(URL, requestOptions);

  if (!res.ok) {
    throw new Error("Não foi possível carregar os cursos!");
  }

  const data = await res.json();
  return data.courses;
};