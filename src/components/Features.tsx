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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Empowering Innovation Through
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Collaboration
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A platform for innovators, entrepreneurs, and changemakers to share ideas and build the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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