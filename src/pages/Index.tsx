import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { useFragmentScroll } from "@/utils/fragmentScroll";

const Index = () => {
  const initializeFragmentScroll = useFragmentScroll();
  
  useEffect(() => {
    return initializeFragmentScroll();
  }, [initializeFragmentScroll]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
