import CropRecommendationCard from "@/components/CropRecommendationCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Calendar, CloudRain, Sun } from "lucide-react";

const allCrops = [
  { cropName: "Wheat", suitability: 92, season: "Rabi", waterNeeds: "Moderate" },
  { cropName: "Rice", suitability: 85, season: "Kharif", waterNeeds: "High" },
  { cropName: "Maize", suitability: 78, season: "Kharif", waterNeeds: "Moderate" },
  { cropName: "Soybean", suitability: 88, season: "Kharif", waterNeeds: "Moderate" },
  { cropName: "Cotton", suitability: 72, season: "Kharif", waterNeeds: "Low" },
  { cropName: "Mustard", suitability: 90, season: "Rabi", waterNeeds: "Low" },
  { cropName: "Groundnut", suitability: 82, season: "Kharif", waterNeeds: "Moderate" },
  { cropName: "Chickpea", suitability: 86, season: "Rabi", waterNeeds: "Low" },
];

const tips = [
  { icon: Calendar, title: "Seasonal Planning", description: "Plan your crops according to Rabi (Oct-Mar) and Kharif (Jun-Sep) seasons." },
  { icon: CloudRain, title: "Water Management", description: "Match crop water needs with your irrigation capacity and rainfall patterns." },
  { icon: Sun, title: "Soil Suitability", description: "Higher suitability scores mean better yield potential for your soil type." },
];

const CropAdvisor = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg nature-gradient">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Crop Advisor
            </h1>
          </div>
          <p className="text-muted-foreground">
            Personalized crop recommendations based on your soil analysis
          </p>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {tips.map((tip) => (
            <Card key={tip.title} className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Crop Recommendations */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-xl">All Crop Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allCrops.map((crop) => (
                <CropRecommendationCard key={crop.cropName} {...crop} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropAdvisor;
