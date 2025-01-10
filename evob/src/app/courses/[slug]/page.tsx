import CourseDetails from "@/components/CourseDetails";
import ShareButton from "@/components/ShareButton";
import { getCourseDetails } from "@/services/getCourseDetails";
import { notFound } from "next/navigation";

export default async function Course({ params }: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const course = await getCourseDetails(slug);

    return (
      <>
        <CourseDetails course={course} />
        <ShareButton />
      </>
    )
  } catch (error) {
    console.log(error);
    return notFound();
  }
}