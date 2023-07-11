import dynamic from "next/dynamic";
const Header =   dynamic(() => import("@/components/Header"));
const AboutusBanner =   dynamic(() => import("@/components/Aboutus/AboutusBaneer"));
const AboutUsContent =   dynamic(() => import("@/components/Aboutus/AboutUsContent"));
const MyGallery =   dynamic(() => import("@/components/Aboutus/MyGallery"));
const Footer =   dynamic(() => import("@/components/Footer"));


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
