import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Sprout, Droplets, Thermometer, TestTube, Calendar } from "lucide-react";
import { useState } from "react";
import cropImage from "@/assets/crop-recommendation.jpg";

const Crops = () => {
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleAnalyze = () => {
    // Mock crop recommendations based on soil and season
    const mockRecommendations = [
      {
        name: "धान / Rice",
        suitability: "उत्तम / Excellent",
        waterNeed: "अधिक / High",
        season: "खरीफ / Kharif",
        profit: "₹45,000/एकड़"
      },
      {
        name: "गेहूं / Wheat", 
        suitability: "अच्छा / Good",
        waterNeed: "मध्यम / Medium",
        season: "रबी / Rabi",
        profit: "₹38,000/एकड़"
      },
      {
        name: "मक्का / Maize",
        suitability: "उत्तम / Excellent", 
        waterNeed: "मध्यम / Medium",
        season: "खरीफ / Kharif",
        profit: "₹42,000/एकड़"
      }
    ];
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="p-4 pb-20 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">फसल सुझाव</h1>
        <p className="text-muted-foreground">Crop Recommendations</p>
      </div>

      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-growth/20 to-earth/20 relative">
          <img 
            src={cropImage} 
            alt="Crop analysis" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-growth/30 to-earth/30" />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5 text-earth" />
            मिट्टी विश्लेषण | Soil Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>मिट्टी का प्रकार / Soil Type</Label>
            <Select value={soilType} onValueChange={setSoilType}>
              <SelectTrigger>
                <SelectValue placeholder="मिट्टी चुनें / Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">चिकनी मिट्टी / Clay Soil</SelectItem>
                <SelectItem value="sandy">रेतीली मिट्टी / Sandy Soil</SelectItem>
                <SelectItem value="loamy">दोमट मिट्टी / Loamy Soil</SelectItem>
                <SelectItem value="red">लाल मिट्टी / Red Soil</SelectItem>
                <SelectItem value="black">काली मिट्टी / Black Soil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>मौसम / Season</Label>
            <Select value={season} onValueChange={setSeason}>
              <SelectTrigger>
                <SelectValue placeholder="मौसम चुनें / Select season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharif">खरीफ / Kharif (जून-अक्टूबर)</SelectItem>
                <SelectItem value="rabi">रबी / Rabi (नवंबर-मार्च)</SelectItem>
                <SelectItem value="zaid">जायद / Zaid (अप्रैल-जून)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleAnalyze} variant="growth" className="w-full">
            <Sprout className="h-4 w-4 mr-2" />
            फसल सुझाव पाएं / Get Crop Recommendations
          </Button>
        </CardContent>
      </Card>

      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">सुझावित फसलें / Recommended Crops</h2>
          {recommendations.map((crop, index) => (
            <Card key={index} className="border-growth/20">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-growth">{crop.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    crop.suitability.includes('उत्तम') ? 'bg-growth/20 text-growth' : 'bg-harvest/20 text-harvest'
                  }`}>
                    {crop.suitability}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span>{crop.waterNeed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-earth" />
                    <span>{crop.season}</span>
                  </div>
                </div>
                
                <div className="mt-3 p-2 bg-harvest/10 rounded">
                  <p className="text-sm font-medium text-earth">
                    अनुमानित लाभ / Estimated Profit: {crop.profit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>मिट्टी स्वास्थ्य सुझाव / Soil Health Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <TestTube className="h-4 w-4 text-earth mt-1" />
              <p>नियमित मिट्टी जांच कराएं / Regular soil testing recommended</p>
            </div>
            <div className="flex items-start gap-3">
              <Sprout className="h-4 w-4 text-growth mt-1" />
              <p>जैविक खाद का उपयोग करें / Use organic fertilizers</p>
            </div>
            <div className="flex items-start gap-3">
              <Droplets className="h-4 w-4 text-sky mt-1" />
              <p>पानी की बचत करें / Practice water conservation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Crops;