import Navbar from "~/components/Navbar";
import Hero from "~/components/hero";
import Features from "~/components/Features";
import Footer from "~/components/Footers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
