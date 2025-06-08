import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import HomepageTestimonialSection from "./HomepageTestimonialSection";
import HomepageForm from "../../components/HomepageForm";
import LogoScrollSection1 from "./LogoScrollSection1";
import HomepageFeatureSection from "./HomepageFeatureSection";
import BootcampSection from "../../components/BootcampSection";
import LogoScrollSection2 from "./LogoScrollSection2";
import BlogSection from "./BlogSection";
import WebinarAndEventSection from "./WebinarAndEventSection";
import FAQSection from "./HomepageFAQSection";
import ImageFooterAnimation from "../../components/ImageFooterAnimation";
import BottomNav from "../../components/BottomNav";
function Home() {
  return (
    <div className="home-page pt-[70px]">
      <Navbar />
      <HeroSection />
      <HomepageTestimonialSection />
      <LogoScrollSection1 />
      <HomepageForm />
      <HomepageFeatureSection />
      <BootcampSection />
      <LogoScrollSection2 />
      <BlogSection />
      <WebinarAndEventSection />
      <FAQSection />
      <ImageFooterAnimation />
    </div>
  );
}

export default Home;
