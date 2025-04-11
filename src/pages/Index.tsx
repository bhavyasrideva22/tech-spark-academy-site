
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CoursesPreview from '@/components/home/CoursesPreview';
import HackathonsSection from '@/components/home/HackathonsSection';
import CorporateSection from '@/components/home/CorporateSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LeaderboardPreview from '@/components/home/LeaderboardPreview';
import NewsletterSection from '@/components/home/NewsletterSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesPreview />
        <HackathonsSection />
        <CorporateSection />
        <TestimonialsSection />
        <LeaderboardPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
