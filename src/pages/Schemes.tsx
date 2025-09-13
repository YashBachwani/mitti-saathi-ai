import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, IndianRupee, Calendar, Users } from "lucide-react";

const schemes = [
  {
    name: "प्रधानमंत्री किसान सम्मान निधि",
    nameEn: "PM-KISAN",
    description: "सभी किसानों को ₹6000 सालाना",
    descriptionEn: "₹6000 annual for all farmers",
    amount: "₹6,000",
    eligibility: "सभी किसान / All farmers",
    status: "Active",
    link: "https://pmkisan.gov.in"
  },
  {
    name: "फसल बीमा योजना",
    nameEn: "Crop Insurance Scheme", 
    description: "फसल नुकसान की सुरक्षा",
    descriptionEn: "Protection against crop loss",
    amount: "प्रीमियम का 2%",
    eligibility: "सभी किसान / All farmers",
    status: "Active",
    link: "https://pmfby.gov.in"
  },
  {
    name: "कृषि यंत्र अनुदान",
    nameEn: "Farm Equipment Subsidy",
    description: "कृषि उपकरण पर सब्सिडी",
    descriptionEn: "Subsidy on farm equipment",
    amount: "50% तक",
    eligibility: "छोटे किसान / Small farmers",
    status: "Active",
    link: "#"
  },
  {
    name: "जैविक खेती प्रोत्साहन",
    nameEn: "Organic Farming Incentive",
    description: "जैविक खेती को बढ़ावा",
    descriptionEn: "Promote organic farming",
    amount: "₹31,000/हेक्टेयर",
    eligibility: "प्रमाणित किसान / Certified farmers",
    status: "New",
    link: "#"
  }
];

const Schemes = () => {
  return (
    <div className="p-4 pb-20 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">सरकारी योजनाएं</h1>
        <p className="text-muted-foreground">Government Schemes for Farmers</p>
      </div>

      <Card className="bg-gradient-to-r from-primary/10 to-sky/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            नई योजनाएं / Latest Schemes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            किसानों के लिए नवीनतम सरकारी योजनाओं की जानकारी प्राप्त करें
          </p>
          <p className="text-xs text-muted-foreground">
            Get information about latest government schemes for farmers
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {schemes.map((scheme, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{scheme.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{scheme.nameEn}</p>
                  <p className="text-sm">{scheme.description}</p>
                  <p className="text-xs text-muted-foreground">{scheme.descriptionEn}</p>
                </div>
                <Badge variant={scheme.status === 'New' ? 'destructive' : 'secondary'}>
                  {scheme.status === 'New' ? 'नई' : 'सक्रिय'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-harvest" />
                  <div>
                    <p className="text-xs text-muted-foreground">राशि / Amount</p>
                    <p className="text-sm font-medium">{scheme.amount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-earth" />
                  <div>
                    <p className="text-xs text-muted-foreground">पात्रता / Eligibility</p>
                    <p className="text-sm font-medium">{scheme.eligibility}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  विवरण / Details
                </Button>
                <Button size="sm" variant="growth">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  आवेदन / Apply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-earth" />
            आवेदन की जानकारी / Application Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-harvest/10 rounded-lg">
            <h4 className="font-medium mb-2">आवेदन के लिए आवश्यक दस्तावेज:</h4>
            <ul className="text-sm space-y-1">
              <li>• आधार कार्ड / Aadhaar Card</li>
              <li>• बैंक पासबुक / Bank Passbook</li>
              <li>• भूमि के कागजात / Land Documents</li>
              <li>• पासपोर्ट साइज फोटो / Passport Size Photo</li>
            </ul>
          </div>
          
          <Button variant="farmer" className="w-full">
            <BookOpen className="h-4 w-4 mr-2" />
            आवेदन गाइड डाउनलोड करें / Download Application Guide
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schemes;