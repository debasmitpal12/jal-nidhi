import React, { useState } from "react";
import Header from "./header";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

export default function LandingPage() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleShowHowItWorks = (e) => {
    if (e?.preventDefault) e.preventDefault();

    setShowHowItWorks((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          document
            .getElementById("how-it-works-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return next;
    });
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Header onHowItWorksClick={handleShowHowItWorks} />
      <div>
        <Hero />
        <Features />

        {showHowItWorks && (
          <div id="how-it-works-section" className="animate-fadeIn">
            <HowItWorks onClose={() => setShowHowItWorks(false)} />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
