import HeroSection from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import PricingComponent from "@/components/Pricing";
import ServiceComponent from "@/components/Services";


export default function Home() {
  return (
    <>
    <Layout>
      <HeroSection />
      <ServiceComponent />
      <PricingComponent />
    </Layout>
    </>
  );
}
