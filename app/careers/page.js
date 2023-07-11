import dynamic from "next/dynamic";
const Careerbanner = dynamic(() => import("@/components/Career/Careerbanner"));
const Careerform = dynamic(() => import("@/components/Career/Careerform"));
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Header />
      <Careerbanner />
      <div className="w-full flex items-center mt-16 bg-white text-black justify-center flex-col">
        <p className="text-[#00a63f] text-[25px] font-semibold"> Careers</p>
        <p className="text-sm  md:w-6/12 text-center border-t border-gray-200 py-4">
          hiringplugTM is built on the pillars of innovation, integrity and
          relationships. As we shape the future of Talent acquisition industry
          by crafting a world-class product, we rely on People - our greatest
          asset in addressing arduous challenges to fulfil our Vision.If you
          believe to have the intelligence, loyalty and passion to write our
          next chapter, we’re ready to welcome you to our family. If this
          resonates with your aspirations, we’re eager to hear from you.
        </p>
      </div>
      <Careerform />
      <Footer />
    </div>
  );
}
