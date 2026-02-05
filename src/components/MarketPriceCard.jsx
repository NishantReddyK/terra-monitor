import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const MarketPriceCard = ({ cropName, price, unit, change, market }) => {
  const getTrendIcon = () => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-primary" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColor = () => {
    if (change > 0) return "text-primary";
    if (change < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card className="glass-card hover:shadow-md transition-shadow animate-grow">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">{cropName}</h3>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {market}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">₹{price}</span>
            <span className="text-sm text-muted-foreground">/{unit}</span>
          </div>
          <div className={`flex items-center gap-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">
              {change > 0 ? "+" : ""}{change}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketPriceCard;
