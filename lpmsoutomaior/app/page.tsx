"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

export default function Page() {
  // Scroll Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased selection:bg-[#0ABAB5]/30 selection:text-[#1E2235]">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
