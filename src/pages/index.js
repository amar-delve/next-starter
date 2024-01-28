import Image from "next/image";
import Navbar from '../../components/layouts/Navbar'
import { Alert } from "flowbite-react";
import HomeBanner from "../../components/home/HomeBanner"
import WhyChooseUsSection from "../../components/home/WhyChooseUsSection";
import OurProducts from "../../components/home/OurProducts"
import ContactSection from "../../components/extra/ContactSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import Footer from "../../components/layouts/Footer";
import ContactHome from "../../components/extra/ContactHome"
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page | Next Js</title>
    </Head>
      <div className="bg-white dark:bg-gray-800">
        <Navbar />
        <HomeBanner />
        <WhyChooseUsSection />
        <ContactSection />
        <OurProducts />
        <TestimonialSection/>
        <ContactHome />
        <Footer />
      </div>
    </>
  );
}
