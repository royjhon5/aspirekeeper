import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import ServiceComponent from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <>
    <Layout>
      <HeroSection />
      <ServiceComponent />
      <TestimonialSection />
      <ContactUs />
    </Layout>
    </>
  );
}
