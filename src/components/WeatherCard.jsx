import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Droplets, Wind } from "lucide-react";

const WeatherCard = ({ temperature, humidity, windSpeed, condition }) => {
  return (
    <Card className="glass-card animate-grow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Sun className="h-5 w-5 text-accent" />
          Weather Today
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-3xl font-semibold text-foreground">{temperature}°C</p>
            <p className="text-sm text-muted-foreground">{condition}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Droplets className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Humidity:</span>
              <span className="font-medium">{humidity}%</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Wind className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Wind:</span>
              <span className="font-medium">{windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
