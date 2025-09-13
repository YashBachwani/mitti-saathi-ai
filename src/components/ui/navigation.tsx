import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sprout, Cloud, MessageCircle, BookOpen, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "होम", path: "/", labelEn: "Home" },
    { icon: Cloud, label: "मौसम", path: "/weather", labelEn: "Weather" },
    { icon: Sprout, label: "फसल", path: "/crops", labelEn: "Crops" },
    { icon: MessageCircle, label: "सहायक", path: "/chatbot", labelEn: "Assistant" },
    { icon: BookOpen, label: "योजनाएं", path: "/schemes", labelEn: "Schemes" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors",
                isActive 
                  ? "text-primary bg-accent/50" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              <span className="text-[10px] opacity-70">{item.labelEn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;