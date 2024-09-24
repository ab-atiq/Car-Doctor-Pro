export const dynamic = "force-dynamic";
import HomeAbout from "./_components/Home/HomeAbout";
import HomeBanner from "./_components/Home/HomeBanner";
import HomeFeatures from "./_components/Home/HomeFeatures";
import HomeProducts from "./_components/Home/HomeProducts";
import HomeSchedule from "./_components/Home/HomeSchedule";
import HomeService from "./_components/Home/HomeService";
import HomeTeam from "./_components/Home/HomeTeam";
import HomeTestimonial from "./_components/Home/HomeTestimonial";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomeSchedule />
      <HomeProducts />
      <HomeTeam />
      <HomeFeatures />
      <HomeTestimonial />
    </div>
  );
}
