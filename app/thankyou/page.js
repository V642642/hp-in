import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignupForm from "@/components/thankyou/SignupForm";
import ThankyouPageLayout from "@/components/thankyou/ThankyouPageLayout";

export default function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Header />
      <div className="w-full flex items-start mt-[90px] pb-10 sm:pb-[60px] gap-10 sm:gap-20 justify-center flex-col sm:flex-row">
        <ThankyouPageLayout />
        <SignupForm />
      </div>

      <Clients />
      <Footer />
    </div>
  );
}
