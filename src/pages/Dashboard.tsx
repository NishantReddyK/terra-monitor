import SensorCard from "@/components/SensorCard";
import WeatherCard from "@/components/WeatherCard";
import CropRecommendationCard from "@/components/CropRecommendationCard";
import { Droplets, Thermometer, Gauge, Zap, Leaf } from "lucide-react";

const sensorData = [
  { title: "Soil Moisture", value: "42", unit: "%", icon: Droplets, status: "good" as const },
  { title: "Soil Temperature", value: "24", unit: "°C", icon: Thermometer, status: "good" as const },
  { title: "pH Level", value: "6.8", unit: "pH", icon: Gauge, status: "good" as const },
  { title: "Nitrogen (N)", value: "180", unit: "kg/ha", icon: Leaf, status: "good" as const },
  { title: "Phosphorus (P)", value: "45", unit: "kg/ha", icon: Zap, status: "warning" as const },
  { title: "Potassium (K)", value: "210", unit: "kg/ha", icon: Leaf, status: "good" as const },
];

const cropRecommendations = [
  { cropName: "Wheat", suitability: 92, season: "Rabi", waterNeeds: "Moderate" },
  { cropName: "Rice", suitability: 85, season: "Kharif", waterNeeds: "High" },
  { cropName: "Maize", suitability: 78, season: "Kharif", waterNeeds: "Moderate" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Soil Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time monitoring of your field's soil conditions
          </p>
        </div>

        {/* Sensor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sensorData.map((sensor) => (
            <SensorCard key={sensor.title} {...sensor} />
          ))}
        </div>

        {/* Weather & Recommendations */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <WeatherCard
              temperature={28}
              humidity={65}
              windSpeed={12}
              condition="Partly Cloudy"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Recommended Crops
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cropRecommendations.map((crop) => (
                <CropRecommendationCard key={crop.cropName} {...crop} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
