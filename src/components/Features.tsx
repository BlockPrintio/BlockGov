import { Card, CardContent } from "~/components/ui/card";
import { Users, Vote, Shield, Zap, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Vote,
    title: "Democratic Voting",
    description: "Participate in transparent, on-chain governance decisions that shape the future of the ecosystem."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with like-minded individuals and collaborate on proposals that matter to the community."
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Built on Cardano's secure blockchain infrastructure, ensuring all votes and proposals are immutable."
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Efficient proposal processing and voting mechanisms that deliver results quickly and fairly."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Participate from anywhere in the world with just an internet connection and a Cardano wallet."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Comprehensive insights and analytics to track proposal outcomes and community engagement."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Powerful tools for
            <span className="block bg-gradient-hero bg-clip-text text-transparent">community governance</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover proposals, analyze impact, and participate with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border/60 bg-card/40 backdrop-blur-lg hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary shadow-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;