import AboutusBanner from "@/components/Aboutus/AboutusBaneer";
import AboutUsContent from "@/components/Aboutus/AboutUsContent";
import MyGallery from "@/components/Aboutus/MyGallery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
      <div className='w-full flex items-center justify-center flex-col'>

      <Header />
      <div className="w-full flex items-center justify-center flex-col"></div>
      <AboutusBanner />
      <AboutUsContent />
      <MyGallery />
      <Footer />
    </div>
  );
}
