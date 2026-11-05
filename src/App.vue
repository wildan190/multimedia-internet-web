<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import ContactSection from './components/ContactSection.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeroSection from './components/HeroSection.vue'
import PlansSection from './components/PlansSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import './landing.css'
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <AboutSection />
      <FaqSection />
      <ClosingSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
