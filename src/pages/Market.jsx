import MarketPriceCard from "@/components/MarketPriceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Store, Calendar } from "lucide-react";

const marketPrices = [
  { cropName: "Wheat", price: 2250, unit: "quintal", change: 2.5, market: "Mandi" },
  { cropName: "Rice (Basmati)", price: 3800, unit: "quintal", change: -1.2, market: "APMC" },
  { cropName: "Maize", price: 1850, unit: "quintal", change: 4.1, market: "Mandi" },
  { cropName: "Soybean", price: 4200, unit: "quintal", change: 0, market: "APMC" },
  { cropName: "Cotton", price: 6500, unit: "quintal", change: 3.2, market: "Mandi" },
  { cropName: "Mustard", price: 5100, unit: "quintal", change: -0.8, market: "APMC" },
  { cropName: "Groundnut", price: 5600, unit: "quintal", change: 1.5, market: "Mandi" },
  { cropName: "Chickpea", price: 4800, unit: "quintal", change: 2.0, market: "APMC" },
];

const Market = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg nature-gradient">
              <Store className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Market Prices
            </h1>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{today}</span>
          </div>
        </div>

        {/* Market Summary */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Market Overview</h3>
                <p className="text-sm text-muted-foreground">
                  Overall market trend is positive. Wheat and Cotton showing good gains this week.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Grid */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-xl">Current Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketPrices.map((item) => (
                <MarketPriceCard key={item.cropName} {...item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Market;
