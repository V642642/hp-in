import ABanner from "@/components/Agencies/ABanner";
import Abenifits from "@/components/Agencies/Abenifits";
import ANextSteps from "@/components/Agencies/ANextSteps";
import AProductBanner from "@/components/Agencies/AProductBanner";
import CustomerSpeak from "@/components/Agencies/CustomerSpeak";
import Agency from "@/components/Agency";
import Request from "@/components/Employers/Request";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <ABanner />
      <AProductBanner />
      <Abenifits />
      <CustomerSpeak />
      <Agency/>
      <ANextSteps />
      <Request />
      <Footer />
    </>
  );
}
