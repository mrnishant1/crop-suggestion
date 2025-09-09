import { Button } from "@/components/ui/button";
import { Sprout, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-nature-green to-leaf-light">
            <Sprout className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Harvester</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#analyze" className="text-muted-foreground hover:text-foreground transition-colors">
            Soil Analysis
          </a>
          <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
            Results
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="nature" className="hidden md:flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;