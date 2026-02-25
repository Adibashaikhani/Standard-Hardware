import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
