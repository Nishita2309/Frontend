import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';
import TechStack from '../components/home/TechStack';
import StatsSection from '../components/home/StatsSection';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <StatsSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </>
  );
}