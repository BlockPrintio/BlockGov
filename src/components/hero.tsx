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
          <div className="text-left max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              <span className="block text-foreground animate-slide-in">Cardano</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent animate-slide-in" style={{ animationDelay: '200ms' }}>
                Governance, reimagined.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Unlock the power of Cardano governance. Discover, interact, and participate in one seamless tool designed for an empowered community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explorer" passHref>
                <Button variant="hero" size="xl" className="text-base md:text-lg">
                  Start Exploring
                </Button>
              </Link>
              <Button size="xl" variant="outline" className="text-base md:text-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Gradient Flower */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-hero opacity-80 blur-2xl" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-2xl bg-card/40 backdrop-blur-xl border border-border/60 shadow-elegant animate-float">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="/"
                        className="w-130 h-130"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-40 animate-float [animation-delay:300ms]"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-accent rounded-full opacity-50 animate-float [animation-delay:600ms]"></div>
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