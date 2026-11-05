<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from '@lucide/vue'

defineEmits<{
  contact: [messageTemplate: string]
}>()
</script>

<template>
  <div class="announcement">
    <span class="announcement-dot" aria-hidden="true"></span>
    <span>Internet cepat, stabil, &amp; terpercaya, untuk Anda</span>
    <a href="#paket">Temukan paket Anda <ArrowRight :size="14" aria-hidden="true" /></a>
  </div>

  <header class="site-header">
    <a class="brand-mark" href="#" aria-label="Mitra.net — beranda">
      <img src="/img/logo.png" alt="PT Multimedia Internet Network — Mitra.net" />
    </a>

    <nav class="main-nav" aria-label="Navigasi utama">
      <a href="#keunggulan">Keunggulan</a>
      <a href="#paket">Paket internet</a>
      <a href="#faq">FAQ</a>
      <a href="#tentang">Tentang kami</a>
    </nav>

    <button
      class="header-cta"
      type="button"
      @click="$emit('contact', 'Halo Mitra.net, saya ingin bertanya tentang layanan internet.')"
    >
      Hubungi kami <ArrowUpRight :size="16" aria-hidden="true" />
    </button>
  </header>
</template>
