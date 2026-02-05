import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower farmers with technology-driven insights for sustainable and profitable agriculture.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description: "Farmers, agricultural consultants, and cooperatives looking to optimize their crop yields.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description: "Combining IoT sensors, AI analytics, and local agricultural knowledge for actionable insights.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            About SoilSense
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Growing the Future of Agriculture
          </h1>
          <p className="text-lg text-muted-foreground">
            SoilSense is a smart soil monitoring platform that helps farmers make 
            data-driven decisions for better crop yields and sustainable farming practices.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((item) => (
            <Card key={item.title} className="glass-card text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full nature-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Description */}
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground">Real-time Soil Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Track moisture, temperature, pH, and nutrient levels continuously.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground">Crop Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-powered suggestions based on your specific soil conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground">Disease Prediction</h4>
                    <p className="text-sm text-muted-foreground">
                      Early warning system for potential crop diseases and pests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground">Market Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Current prices and trends to help you sell at the right time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
