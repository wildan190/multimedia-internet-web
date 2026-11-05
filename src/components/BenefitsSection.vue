<script setup lang="ts">
import { Clock3, ShieldCheck, Zap } from '@lucide/vue'
</script>

<template>
  <section id="keunggulan" class="benefits" aria-label="Keunggulan layanan Mitra.net">
    <article class="benefit-item">
      <span class="benefit-icon"><Zap :size="19" aria-hidden="true" /></span>
      <div><h2>Instalasi cepat</h2><p>Mulai terhubung tanpa menunggu lama.</p></div>
    </article>
    <article class="benefit-item">
      <span class="benefit-icon"><ShieldCheck :size="19" aria-hidden="true" /></span>
      <div><h2>Resmi &amp; berizin</h2><p>Layanan dari PT Multimedia Internet Network.</p></div>
    </article>
    <article class="benefit-item">
      <span class="benefit-icon"><Clock3 :size="19" aria-hidden="true" /></span>
      <div><h2>Teknisi 24 jam</h2><p>Bantuan teknis siaga setiap saat.</p></div>
    </article>
  </section>
</template>
