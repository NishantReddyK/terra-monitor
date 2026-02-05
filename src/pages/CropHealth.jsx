import DiseasePredictionCard from "@/components/DiseasePredictionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AlertCircle, Activity } from "lucide-react";

const diseases = [
  {
    diseaseName: "Wheat Rust",
    riskLevel: "low",
    affectedCrop: "Wheat",
    prevention: "Apply fungicide during early growth stages. Ensure proper spacing between plants.",
  },
  {
    diseaseName: "Rice Blast",
    riskLevel: "medium",
    affectedCrop: "Rice",
    prevention: "Use resistant varieties. Maintain balanced nitrogen fertilization.",
  },
  {
    diseaseName: "Maize Blight",
    riskLevel: "high",
    affectedCrop: "Maize",
    prevention: "Remove infected plants immediately. Apply copper-based fungicides.",
  },
  {
    diseaseName: "Root Rot",
    riskLevel: "low",
    affectedCrop: "Soybean",
    prevention: "Improve drainage. Avoid overwatering and ensure proper soil aeration.",
  },
];

const healthStats = [
  { icon: ShieldCheck, label: "Healthy Fields", value: "4", color: "text-primary" },
  { icon: AlertCircle, label: "Needs Attention", value: "1", color: "text-yellow-600" },
  { icon: Activity, label: "Active Monitoring", value: "5", color: "text-accent" },
];

const CropHealth = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg nature-gradient">
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Crop Health
            </h1>
          </div>
          <p className="text-muted-foreground">
            AI-powered disease prediction and prevention insights
          </p>
        </div>

        {/* Health Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {healthStats.map((stat) => (
            <Card key={stat.label} className="glass-card">
              <CardContent className="p-5 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disease Predictions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-xl">Disease Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {diseases.map((disease) => (
                <DiseasePredictionCard key={disease.diseaseName} {...disease} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropHealth;
