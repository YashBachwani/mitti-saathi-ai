import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Mic, Volume2, Languages } from "lucide-react";
import { useState } from "react";
import chatbotImage from "@/assets/ai-chatbot.jpg";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  language: 'hi' | 'en';
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "नमस्ते! मैं आपका कृषि सहायक हूं। मैं आपकी खेती संबंधी किसी भी समस्या में मदद कर सकता हूं।",
      isUser: false,
      language: 'hi'
    },
    {
      id: 2,
      text: "Hello! I'm your farming assistant. How can I help you today?",
      isUser: false,
      language: 'en'
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState<'hi' | 'en'>('hi');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        hi: [
          "यह एक बहुत अच्छा सवाल है। आपकी मिट्टी के लिए जैविक खाद सबसे अच्छी है।",
          "मौसम के अनुसार, अभी धान की बुआई का सही समय है।",
          "आपके क्षेत्र में कपास की खेती बहुत फायदेमंद हो सकती है।",
          "पानी की कमी के लिए ड्रिप सिंचाई का उपयोग करें।"
        ],
        en: [
          "Based on your soil type, I recommend using organic fertilizers.",
          "For your region, the best planting time is during monsoon season.",
          "Cotton farming can be very profitable in your area.",
          "Consider drip irrigation to conserve water."
        ]
      };

      const randomResponse = responses[currentLanguage][Math.floor(Math.random() * responses[currentLanguage].length)];
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        language: currentLanguage
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputText("");
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'hi' ? 'en' : 'hi');
  };

  return (
    <div className="p-4 pb-20 h-screen flex flex-col">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">कृषि सहायक</h1>
        <p className="text-muted-foreground">AI Farming Assistant</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-sky/20 relative">
          <img 
            src={chatbotImage} 
            alt="AI Assistant" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-sky/30" />
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">AI सहायक</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={toggleLanguage}
              >
                <Languages className="h-4 w-4" />
                {currentLanguage === 'hi' ? 'हिं' : 'EN'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleVoice}
                className={isListening ? 'bg-red-100' : ''}
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-4 gap-4">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {!message.isUser && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="mt-2 h-6 px-2"
                        onClick={() => {
                          // Text-to-speech functionality
                        }}
                      >
                        <Volume2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              placeholder={currentLanguage === 'hi' ? 
                "अपना सवाल यहां लिखें..." : 
                "Type your question here..."
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} variant="growth">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm">
          <MessageCircle className="h-4 w-4 mr-2" />
          रोग की पहचान / Disease ID
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="h-4 w-4 mr-2" />
          बाजार दर / Market Rates
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;