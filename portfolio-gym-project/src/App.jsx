import { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import QuoteSection from './QuoteSection'
import FeaturesSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import Navbar from './Navbar'
function App() {
  
  useEffect(() => {
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

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    }


  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  )
}

export default App
