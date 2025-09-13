import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sprout, MessageCircle, BookOpen, Droplets, Thermometer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import farmingHero from "@/assets/farming-hero.jpg";

const Index = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={farmingHero} 
          alt="Smart farming landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">स्मार्ट कृषि सहायक</h1>
            <p className="text-lg mb-1">Smart AI Farming Assistant</p>
            <p className="text-sm opacity-90">मौसम पूर्वानुमान • फसल सुझाव • AI सहायक</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <Thermometer className="h-6 w-6 mx-auto mb-1 text-red-500" />
              <p className="text-xs text-muted-foreground">आज का तापमान</p>
              <p className="text-lg font-bold">28°C</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <Droplets className="h-6 w-6 mx-auto mb-1 text-blue-500" />
              <p className="text-xs text-muted-foreground">वर्षा संभावना</p>
              <p className="text-lg font-bold">75%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-1 text-green-500" />
              <p className="text-xs text-muted-foreground">फसल स्वास्थ्य</p>
              <p className="text-lg font-bold">अच्छा</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">मुख्य सुविधाएं / Main Features</h2>
          
          <div className="grid gap-4">
            <Link to="/weather">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-sky/20 rounded-lg">
                      <Cloud className="h-8 w-8 text-sky" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">मौसम पूर्वानुमान</h3>
                      <p className="text-sm text-muted-foreground">Weather Prediction</p>
                      <p className="text-xs mt-1">सटीक मौसम की जानकारी और पूर्वानुमान</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/crops">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-growth/20 rounded-lg">
                      <Sprout className="h-8 w-8 text-growth" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">फसल सुझाव</h3>
                      <p className="text-sm text-muted-foreground">Crop Recommendations</p>
                      <p className="text-xs mt-1">मिट्टी और मौसम के अनुसार सर्वोत्तम फसल</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/chatbot">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">AI कृषि सहायक</h3>
                      <p className="text-sm text-muted-foreground">AI Farming Assistant</p>
                      <p className="text-xs mt-1">हिंदी और गुजराती में तुरंत सहायता</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/schemes">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-earth/20 rounded-lg">
                      <BookOpen className="h-8 w-8 text-earth" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">सरकारी योजनाएं</h3>
                      <p className="text-sm text-muted-foreground">Government Schemes</p>
                      <p className="text-xs mt-1">किसानों के लिए योजनाओं की जानकारी</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-destructive/10 to-red-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-destructive text-lg">आपातकालीन सहायता</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">कृषि संबंधी आपातकालीन समस्या के लिए</p>
            <Button variant="destructive" size="sm">
              किसान हेल्पलाइन: 1800-180-1551
            </Button>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">आज के सुझाव / Today's Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• मौसम साफ है, सिंचाई के लिए उत्तम समय</p>
              <p>• धान की फसल में खरपतवार नियंत्रण करें</p>
              <p>• जैविक खाद का छिड़काव करने का समय</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
