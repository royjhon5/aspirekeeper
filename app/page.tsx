import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import ServiceComponent from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import ServiceList from "@/components/ServiceList";
import AboutUs from "@/components/AboutUs";
import BlogList from "@/components/Blog";



export default function Home() {
  return (
    <>
    <Layout>
      <HeroSection />
      <ServiceComponent />
      <ServiceList />
      <AboutUs />
      <TestimonialSection />  
      <BlogList />
      <ContactUs />   
    </Layout>
    </>
  );
}
