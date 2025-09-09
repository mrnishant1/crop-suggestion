import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { TestTube, MapPin, Droplets } from "lucide-react";

interface SoilData {
  location: string;
  soilType: string;
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  moisture: number;
}

interface SoilAnalysisFormProps {
  onSubmit: (data: SoilData) => void;
}

const SoilAnalysisForm = ({ onSubmit }: SoilAnalysisFormProps) => {
  const [formData, setFormData] = useState<SoilData>({
    location: "",
    soilType: "",
    pH: 7,
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    moisture: 50,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="py-16 bg-muted/30" id="analyze">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Analyze Your Soil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your soil parameters to receive personalized crop recommendations
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5 text-nature-green" />
              Soil Parameters
            </CardTitle>
            <CardDescription>
              Provide accurate measurements for the best crop suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="e.g., California, USA"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>

              {/* Soil Type */}
              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, soilType: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loam">Loam</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                    <SelectItem value="chalky">Chalky</SelectItem>
                    <SelectItem value="peaty">Peaty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* pH Level */}
              <div className="space-y-4">
                <Label>pH Level: {formData.pH}</Label>
                <Slider
                  value={[formData.pH]}
                  onValueChange={(value) => setFormData({ ...formData, pH: value[0] })}
                  max={14}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Acidic (0)</span>
                  <span>Neutral (7)</span>
                  <span>Alkaline (14)</span>
                </div>
              </div>

              {/* Nitrogen */}
              <div className="space-y-4">
                <Label>Nitrogen Level: {formData.nitrogen}%</Label>
                <Slider
                  value={[formData.nitrogen]}
                  onValueChange={(value) => setFormData({ ...formData, nitrogen: value[0] })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Phosphorus */}
              <div className="space-y-4">
                <Label>Phosphorus Level: {formData.phosphorus}%</Label>
                <Slider
                  value={[formData.phosphorus]}
                  onValueChange={(value) => setFormData({ ...formData, phosphorus: value[0] })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Potassium */}
              <div className="space-y-4">
                <Label>Potassium Level: {formData.potassium}%</Label>
                <Slider
                  value={[formData.potassium]}
                  onValueChange={(value) => setFormData({ ...formData, potassium: value[0] })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Moisture */}
              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Droplets className="h-4 w-4" />
                  Moisture Level: {formData.moisture}%
                </Label>
                <Slider
                  value={[formData.moisture]}
                  onValueChange={(value) => setFormData({ ...formData, moisture: value[0] })}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full" variant="nature" size="lg">
                Get Crop Recommendations
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SoilAnalysisForm;