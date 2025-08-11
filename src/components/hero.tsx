import { Button } from "~/components/ui/button";
import Link from "next/link";
// import gradientFlower from "~/assets/gradient-flower.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_50%,transparent_75%)] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">Block</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent" style={{ WebkitTextFillColor: "initial", color: "inherit" }}>
                Governance.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A place to explore Cardano Governance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore" passHref>
                <Button variant="hero" size="xl" className="text-lg">
                  Start Exploring
                </Button>
              </Link>
              <Button size="xl" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Gradient Flower */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                // src={gradientFlower.src}
                alt="Governance Illustration"
                className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain animate-pulse"
              />
              {/* Additional floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-30 animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;