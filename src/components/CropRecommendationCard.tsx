import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from "lucide-react";

interface CropRecommendationCardProps {
  cropName: string;
  suitability: number;
  season: string;
  waterNeeds: string;
}

const CropRecommendationCard = ({ cropName, suitability, season, waterNeeds }: CropRecommendationCardProps) => {
  return (
    <Card className="glass-card hover:shadow-md transition-all hover:-translate-y-1 animate-grow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{cropName}</CardTitle>
          <div className="p-2 rounded-full nature-gradient">
            <Sprout className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Suitability</span>
              <span className="font-medium text-primary">{suitability}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full nature-gradient rounded-full transition-all"
                style={{ width: `${suitability}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Season</span>
            <span className="font-medium">{season}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Water Needs</span>
            <span className="font-medium">{waterNeeds}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropRecommendationCard;
