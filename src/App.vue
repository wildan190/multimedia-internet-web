<script setup lang="ts">
import { ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import ContactSection from './components/ContactSection.vue'
import ContactFormModal from './components/ContactFormModal.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeroSection from './components/HeroSection.vue'
import PlansSection from './components/PlansSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import { whatsappUrl } from './utils/whatsapp'
import './landing.css'

const isContactFormOpen = ref(false)
const messageTemplate = ref('')

function openContactForm(template: string) {
  messageTemplate.value = template
  isContactFormOpen.value = true
}

function sendWhatsAppMessage(message: string) {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  isContactFormOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <SiteHeader @contact="openContactForm" />
    <main>
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <AboutSection />
      <FaqSection />
      <ClosingSection @contact="openContactForm" />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
  <ContactFormModal
    v-if="isContactFormOpen"
    :message-template="messageTemplate"
    @close="isContactFormOpen = false"
    @submit="sendWhatsAppMessage"
  />
</template>
