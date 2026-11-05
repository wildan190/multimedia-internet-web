<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

defineEmits<{
  contact: [messageTemplate: string]
}>()
</script>

<template>
  <section class="closing-banner" aria-labelledby="closing-title">
    <div class="closing-orbit" aria-hidden="true"></div>
    <div class="closing-copy">
      <div class="closing-eyebrow"><span class="live-dot"></span> INTERNET UNTUK HARI INI &amp; ESOK</div>
      <h2 id="closing-title">Yuk, berlangganan<br />sekarang!</h2>
      <p>Mulai langkah Anda menuju koneksi yang lebih nyaman. Tim Mitra.net siap membantu.</p>
    </div>
    <button
      class="button button-light"
      type="button"
      @click="$emit('contact', 'Halo Mitra.net, saya ingin berlangganan internet. Mohon informasikan ketersediaan layanan di area saya.')"
    >
      Hubungi kami <ArrowRight :size="17" aria-hidden="true" />
    </button>
    <div class="closing-caption">PT MULTIMEDIA INTERNET NETWORK <span>•</span> RESMI &amp; BERIZIN</div>
  </section>
</template>
