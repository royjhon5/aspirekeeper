import HeroSection from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import ServiceComponent from "@/components/Services";


export default function Home() {
  return (
    <>
    <Layout>
      <HeroSection />
      <ServiceComponent />
    </Layout>
    </>
  );
}
