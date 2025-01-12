import type { Metadata, ResolvingMetadata } from "next";
import CourseDetails from "@/components/CourseDetails";
import ShareButton from "@/components/ShareButton";
import { getCourseDetails } from "@/services/getCourseDetails";
import { notFound } from "next/navigation";

type CourseProps = {
  params: Promise<{ slug: string }>
}

// Variável para armazenar os dados do curso em cache durante a execução.
const courseCache = new Map<string, Awaited<ReturnType<typeof getCourseDetails>>>();

// Gera metadata dinâmico para a página do curso
export async function generateMetadata(
  { params }: CourseProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  // Busca os detalhes do curso, armazenando no cache
  if (!courseCache.has(slug)) {
    const course = await getCourseDetails(slug);
    courseCache.set(slug, course);
  }

  const course = courseCache.get(slug)!;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: course.title,
    openGraph: {
      images: [course.thumbnail, ...previousImages],
    },
  };
}

export default async function Course({ params }: CourseProps) {
  const slug = (await params).slug;

  // Recupera o curso do cache
  let course = courseCache.get(slug);
  if (!course) {
    try {
      course = await getCourseDetails(slug);
    } catch (error) {
      console.log(error);
      // Se não encontrar o curso retorna a página 404
      return notFound();
    }
  }

  return (
    <>
      <CourseDetails course={course} />
      <ShareButton />
    </>
  );
} 