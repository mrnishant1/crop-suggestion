import { Button } from "@/components/ui/button";
import { Sprout, BarChart3, Zap } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultural fields with modern farming technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nature-green/80 to-earth-brown/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Crop Suggestions for 
            <span className="text-harvest-gold"> Maximum Yield</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Analyze your soil composition, pH levels, and nutrition to get personalized crop recommendations powered by agricultural science.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg">
              <Sprout className="h-5 w-5" />
              Start Soil Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
              <BarChart3 className="h-5 w-5" />
              View Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-white/20">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Instant Analysis</h3>
                <p className="text-sm text-white/80">Quick soil assessment</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-white/20">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Data-Driven</h3>
                <p className="text-sm text-white/80">Science-based recommendations</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-white/20">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Crop Optimization</h3>
                <p className="text-sm text-white/80">Maximize your harvest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;