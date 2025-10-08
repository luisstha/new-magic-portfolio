import Hero from "@/components/Hero";
import SignatureStyle from "@/components/SignatureStyle";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Performances from "@/components/Performances";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SignatureStyle />
      <About />
      <Testimonial />
      <Performances />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
