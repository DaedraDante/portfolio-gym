import { useState } from 'react'
import HeroSection from './HeroSection'
import QuoteSection from './QuoteSection'
import FeaturesSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
function App() {
  
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
      }else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <>
      <HeroSection />
      <QuoteSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  )
}

export default App
