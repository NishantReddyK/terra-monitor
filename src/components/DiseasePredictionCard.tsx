import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, ShieldAlert } from "lucide-react";

interface DiseasePredictionCardProps {
  diseaseName: string;
  riskLevel: "low" | "medium" | "high";
  affectedCrop: string;
  prevention: string;
}

const DiseasePredictionCard = ({ diseaseName, riskLevel, affectedCrop, prevention }: DiseasePredictionCardProps) => {
  const riskConfig = {
    low: { color: "text-primary", bg: "bg-primary/10", icon: CheckCircle, label: "Low Risk" },
    medium: { color: "text-yellow-600", bg: "bg-yellow-100", icon: AlertTriangle, label: "Medium Risk" },
    high: { color: "text-destructive", bg: "bg-destructive/10", icon: ShieldAlert, label: "High Risk" },
  };

  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <Card className="glass-card animate-grow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{diseaseName}</CardTitle>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
            {config.label}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${config.color}`} />
            <span className="text-sm text-muted-foreground">
              Affects: <span className="font-medium text-foreground">{affectedCrop}</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Prevention: </span>
            {prevention}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiseasePredictionCard;
