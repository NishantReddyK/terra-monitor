import { Card, CardContent } from "@/components/ui/card";

const SensorCard = ({ title, value, unit, icon: Icon, status = "good" }) => {
  const statusColors = {
    good: "text-primary",
    warning: "text-yellow-600",
    alert: "text-destructive",
  };

  return (
    <Card className="glass-card hover:shadow-md transition-shadow animate-grow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl font-semibold ${statusColors[status]}`}>
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{unit}</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-muted">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorCard;
