import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, BarChart3, Sprout, ShoppingCart, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Monitoring",
    description: "Track soil moisture, pH levels, and nutrients in real-time with our advanced sensors.",
  },
  {
    icon: Sprout,
    title: "Crop Advisory",
    description: "Get personalized crop recommendations based on your soil conditions and local climate.",
  },
  {
    icon: Leaf,
    title: "Disease Prediction",
    description: "AI-powered early detection of potential crop diseases to protect your harvest.",
  },
  {
    icon: ShoppingCart,
    title: "Market Insights",
    description: "Stay updated with current market prices and make informed selling decisions.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 earth-gradient opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              Smart Agriculture Solutions
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Grow Smarter with{" "}
              <span className="text-primary">SoilSense</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Monitor your soil health, get crop recommendations, and maximize your yield 
              with our intelligent soil monitoring platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="nature-gradient border-0 hover:opacity-90">
                <Link to="/dashboard">
                  View Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to help you make data-driven decisions for your farm.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg nature-gradient flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-8 lg:p-12 rounded-2xl nature-gradient">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Start monitoring your soil today and take the first step towards smarter agriculture.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
