import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cloud, Droplets, Thermometer, Wind, Sun, MapPin } from "lucide-react";
import { useState } from "react";
import weatherImage from "@/assets/weather-prediction.jpg";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: 28,
    humidity: 75,
    rainfall: 12,
    windSpeed: 15,
    sunlight: 8
  });

  const handlePredict = () => {
    // Simulate weather prediction
    setWeatherData({
      temperature: Math.floor(Math.random() * 15) + 20,
      humidity: Math.floor(Math.random() * 40) + 60,
      rainfall: Math.floor(Math.random() * 20),
      windSpeed: Math.floor(Math.random() * 20) + 5,
      sunlight: Math.floor(Math.random() * 4) + 6
    });
  };

  return (
    <div className="p-4 pb-20 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">मौसम पूर्वानुमान</h1>
        <p className="text-muted-foreground">Weather Prediction</p>
      </div>

      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-sky/20 to-primary/20 relative">
          <img 
            src={weatherImage} 
            alt="Weather monitoring" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky/30 to-primary/30" />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-sky" />
            आज का मौसम | Today's Weather
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="अपना स्थान दर्ज करें / Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button onClick={handlePredict} variant="sky" className="w-full">
            मौसम की भविष्यवाणी करें / Predict Weather
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Thermometer className="h-8 w-8 mx-auto mb-2 text-red-500" />
            <p className="text-sm text-muted-foreground">तापमान / Temp</p>
            <p className="text-xl font-bold">{weatherData.temperature}°C</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <p className="text-sm text-muted-foreground">नमी / Humidity</p>
            <p className="text-xl font-bold">{weatherData.humidity}%</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Cloud className="h-8 w-8 mx-auto mb-2 text-gray-500" />
            <p className="text-sm text-muted-foreground">वर्षा / Rainfall</p>
            <p className="text-xl font-bold">{weatherData.rainfall}mm</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Wind className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-sm text-muted-foreground">हवा / Wind</p>
            <p className="text-xl font-bold">{weatherData.windSpeed} km/h</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-harvest" />
            सप्ताह का पूर्वानुमान | Weekly Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {['सोमवार/Mon', 'मंगलवार/Tue', 'बुधवार/Wed', 'गुरुवार/Thu', 'शुक्रवार/Fri'].map((day, index) => (
              <div key={day} className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-sm">{day}</span>
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-sky" />
                  <span className="text-sm">{25 + index}°C</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Weather;