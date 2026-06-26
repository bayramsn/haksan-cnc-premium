import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import VideoHero from '../components/VideoHero';
import Showcase from '../components/Showcase';
import Stats3D from '../components/Stats3D';
import HowItWorks from '../components/HowItWorks';
import Technologies from '../components/Technologies';
import WhyHaksan from '../components/WhyHaksan';
import VideoSection from '../components/VideoSection';
import Products3D from '../components/Products3D';
import Services from '../components/Services';
import Brands from '../components/Brands';
import CustomerStories from '../components/CustomerStories';
import SocialMedia from '../components/SocialMedia';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import ContactBanner from '../components/ContactBanner';
import Newsletter from '../components/Newsletter';
import FinalCTA from '../components/FinalCta';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <VideoHero />
      <Showcase />
      <Stats3D />
      <HowItWorks />
      <Technologies />
      <WhyHaksan />
      <VideoSection />
      <Products3D />
      <Services />
      <Brands />
      <CustomerStories />
      <SocialMedia />
      <Events />
      <Testimonials />
      <BlogPreview />
      <ContactBanner />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
