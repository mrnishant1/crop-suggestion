import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SoilAnalysisForm from "@/components/SoilAnalysisForm";
import Results from "@/components/Results";

interface SoilData {
  location: string;
  soilType: string;
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  moisture: number;
}

const Index = () => {
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSoilAnalysis = (data: SoilData) => {
    setSoilData(data);
    setShowResults(true);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSoilData(null);
    setShowResults(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SoilAnalysisForm onSubmit={handleSoilAnalysis} />
        {showResults && soilData && (
          <Results soilData={soilData} onReset={handleReset} />
        )}
      </main>
    </div>
  );
};

export default Index;
