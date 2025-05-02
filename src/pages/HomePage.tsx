import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <CtaSection />
        <TestimonialsSection/>
      </main>
    </>
  );
};

export default HomePage;