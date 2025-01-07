import { Course } from "@/@types/course";

export async function getCourses(): Promise<Course[]> {
  const url = "https://api.evob.dev/content/courses";

  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      Origin: "http://localhost:3024",
    },
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);

  if (!res.ok) {
    throw new Error("Não foi possível carregar os cursos!");
  }

  const data = await res.json();
  return data.courses;
};