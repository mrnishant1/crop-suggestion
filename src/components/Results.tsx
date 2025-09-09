import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sprout, TrendingUp, Calendar, AlertTriangle } from "lucide-react";

interface SoilData {
  location: string;
  soilType: string;
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  moisture: number;
}

interface CropRecommendation {
  name: string;
  suitability: "excellent" | "good" | "fair";
  yield: string;
  season: string;
  description: string;
  tips: string[];
}

interface ResultsProps {
  soilData: SoilData;
  onReset: () => void;
}

const Results = ({ soilData, onReset }: ResultsProps) => {
  // Mock crop recommendations based on soil data
  const getCropRecommendations = (data: SoilData): CropRecommendation[] => {
    const recommendations: CropRecommendation[] = [];
    
    // Simple logic for demonstration
    if (data.pH >= 6 && data.pH <= 7.5) {
      recommendations.push({
        name: "Corn",
        suitability: "excellent",
        yield: "High",
        season: "Spring-Summer",
        description: "Ideal pH range for optimal corn growth",
        tips: ["Plant after soil temperature reaches 60°F", "Ensure adequate nitrogen supply"]
      });
    }

    if (data.soilType === "loam" || data.soilType === "sandy") {
      recommendations.push({
        name: "Tomatoes",
        suitability: "good",
        yield: "Medium-High",
        season: "Spring-Fall",
        description: "Well-draining soil supports healthy root development",
        tips: ["Maintain consistent moisture", "Support with stakes or cages"]
      });
    }

    if (data.phosphorus > 30) {
      recommendations.push({
        name: "Soybeans",
        suitability: "excellent",
        yield: "High",
        season: "Late Spring-Fall",
        description: "High phosphorus content promotes strong root development",
        tips: ["No-till planting recommended", "Rotate with corn for best results"]
      });
    }

    if (data.nitrogen < 40) {
      recommendations.push({
        name: "Beans",
        suitability: "good",
        yield: "Medium",
        season: "Spring-Summer",
        description: "Nitrogen-fixing properties improve soil fertility",
        tips: ["Plant after last frost", "Good for soil improvement"]
      });
    }

    // Ensure we have at least 3 recommendations
    if (recommendations.length < 3) {
      recommendations.push({
        name: "Wheat",
        suitability: "fair",
        yield: "Medium",
        season: "Fall-Spring",
        description: "Adaptable to various soil conditions",
        tips: ["Winter variety recommended", "Monitor for pest issues"]
      });
    }

    return recommendations.slice(0, 4);
  };

  const recommendations = getCropRecommendations(soilData);

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case "excellent": return "bg-nature-green text-white";
      case "good": return "bg-soil-orange text-white";
      case "fair": return "bg-earth-brown text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getSoilHealthScore = (data: SoilData) => {
    let score = 0;
    // pH score (ideal: 6-7.5)
    if (data.pH >= 6 && data.pH <= 7.5) score += 25;
    else if (data.pH >= 5.5 && data.pH <= 8) score += 15;
    else score += 5;

    // Nutrient scores
    score += Math.min(data.nitrogen / 4, 25);
    score += Math.min(data.phosphorus / 4, 25);
    score += Math.min(data.potassium / 4, 25);

    return Math.round(score);
  };

  const healthScore = getSoilHealthScore(soilData);

  return (
    <section className="py-16" id="results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Soil Analysis Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Based on your soil parameters from {soilData.location}
          </p>
        </div>

        {/* Soil Health Score */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-nature-green" />
              Soil Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-nature-green">{healthScore}/100</div>
              <div className="flex-1">
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-nature-green to-soil-orange transition-all duration-1000"
                    style={{ width: `${healthScore}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {healthScore >= 80 ? "Excellent" : healthScore >= 60 ? "Good" : "Needs Improvement"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crop Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {recommendations.map((crop, index) => (
            <Card key={index} className="shadow-card hover:shadow-nature/20 transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-nature-green" />
                    {crop.name}
                  </CardTitle>
                  <Badge className={getSuitabilityColor(crop.suitability)}>
                    {crop.suitability}
                  </Badge>
                </div>
                <CardDescription>{crop.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expected Yield:</span>
                    <span className="font-medium">{crop.yield}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Growing Season:</span>
                    <span className="font-medium flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {crop.season}
                    </span>
                  </div>
                  <div className="pt-3">
                    <h4 className="font-semibold mb-2 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-soil-orange" />
                      Growing Tips:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {crop.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button onClick={onReset} variant="outline" size="lg">
            Analyze Another Soil Sample
          </Button>
          <div className="text-sm text-muted-foreground">
            Results are based on general agricultural guidelines. Consult local experts for specific advice.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;