import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Favorites from "@/components/Favorites";
import { getBanner } from "@/services/getBanner";
import { getCourses } from "@/services/getCourses";

export default async function Home() {
  //Busca as informações do banner na API.
  const banners = await getBanner();
  //Verifica se existe mais que um banner, se sim sorteia a exibição de um deles.
  const bannerIndex = banners.length > 1 ? Math.floor(Math.random() * (banners.length - 0) + 0) : 0;
  
  //Busca as informações dos cursos na API.
  const courses = await getCourses();

  return (
    <div>
      <Banner
        title={banners[bannerIndex].description}
        desktop={banners[bannerIndex].desktop}
        mobile={banners[bannerIndex].mobile}
      />
      <Courses title="Meus cursos" courses={courses} />
      <Favorites />
    </div>
  );
}