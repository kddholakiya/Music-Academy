import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import UpcomigWebinars from "@/components/UpcomigWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MovingCards />
      <UpcomigWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
