import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";


const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar/>
      <Hero />
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
    
    </div>
  );
};

export default Landing;