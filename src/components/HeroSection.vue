<script setup lang="ts">
import { ArrowDown, Headset, ShieldCheck, Sparkles, Wifi } from '@lucide/vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="eyebrow"><span>MITRA KONEKTIVITAS ANDA</span><span class="eyebrow-line"></span></div>
      <h1 id="hero-title">Internet cepat.<br /><span>Hidup tetap</span> bergerak.</h1>
      <p class="hero-description">
        Internet cepat, stabil, &amp; terpercaya, untuk Anda. Nikmati koneksi yang mendukung setiap
        aktivitas, dari rumah hingga ruang kerja.
      </p>

      <div class="hero-actions">
        <a class="button button-primary" href="#paket">
          Lihat pilihan paket <ArrowDown :size="17" aria-hidden="true" />
        </a>
        <div class="service-note">
          <span class="service-icon"><Headset :size="16" aria-hidden="true" /></span>
          <span><strong>Teknisi siaga 24 jam</strong><small>Siap membantu saat dibutuhkan</small></span>
        </div>
      </div>

      <div class="hero-proof">
        <span class="proof-icon"><ShieldCheck :size="18" aria-hidden="true" /></span>
        <span>Resmi &amp; berizin</span>
        <img class="hero-komdigi" src="/img/komdigi.png" alt="Komdigi" />
        <span class="proof-separator"></span>
        <span>PT Multimedia Internet Network</span>
      </div>
    </div>

    <div class="hero-visual" aria-label="Ilustrasi jaringan internet Mitra.net">
      <div class="visual-topline">
        <span><span class="live-dot"></span> NETWORK READY</span>
        <span class="visual-coordinate">01 / ID</span>
      </div>
      <div class="signal-art" aria-hidden="true">
        <div class="signal-grid"></div>
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <div class="signal-center"><Wifi :size="54" :stroke-width="1.25" /></div>
        <span class="signal-node node-one"></span>
        <span class="signal-node node-two"></span>
        <span class="signal-node node-three"></span>
        <span class="signal-node node-four"></span>
        <span class="signal-cross cross-one">+</span>
        <span class="signal-cross cross-two">+</span>
      </div>
      <div class="visual-bottomline">
        <span>TERHUBUNG DENGAN LEBIH BAIK</span>
        <span class="visual-index">MITRA.NET <span>—</span> 24/7</span>
      </div>
      <div class="visual-stamp"><Sparkles :size="18" aria-hidden="true" /></div>
    </div>

    <div class="hero-side-label" aria-hidden="true">CONNECTING YOUR WORLD</div>
  </section>
</template>
