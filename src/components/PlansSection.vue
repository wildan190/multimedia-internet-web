<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Check, Sparkles, Wifi } from '@lucide/vue'
import { whatsappUrl } from '../utils/whatsapp'

const plans = [
  {
    name: 'Standar',
    speed: '5',
    price: '150.000',
    description: 'Internet praktis untuk kebutuhan esensial.',
    features: ['Browsing dan komunikasi', 'Koneksi untuk kebutuhan harian'],
  },
  {
    name: 'Basis',
    speed: '10',
    price: '210.000',
    description: 'Lebih leluasa untuk rutinitas digital keluarga.',
    features: ['Belajar dan bekerja dari rumah', 'Nyaman untuk banyak perangkat'],
    featured: true,
  },
  {
    name: 'Premium',
    speed: '20',
    price: '350.000',
    description: 'Koneksi ekstra untuk aktivitas yang lebih intens.',
    features: ['Streaming dan hiburan', 'Lebih leluasa untuk aktivitas online'],
  },
]
</script>

<template>
  <section id="paket" class="plans-section" aria-labelledby="plans-title">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span>PILIH KONEKSI ANDA</span><span class="eyebrow-line"></span></div>
        <h2 id="plans-title">Satu koneksi.<br /><span>Banyak kemungkinan.</span></h2>
      </div>
      <p>Harga terjangkau, pemasangan cepat, dan dukungan teknisi siaga 24 jam. Pilih paket yang pas untuk keseharian Anda.</p>
    </div>

    <p class="plans-scroll-hint">
      Geser ke samping untuk melihat paket lainnya
      <ArrowRight :size="15" aria-hidden="true" />
    </p>
    <div
      class="plans-grid"
      role="region"
      aria-label="Daftar paket internet. Geser ke samping untuk melihat semua paket."
      tabindex="0"
    >
      <article
        v-for="(plan, index) in plans"
        :key="plan.name"
        class="plan-card"
        :class="{ 'plan-card-featured': plan.featured }"
      >
        <div class="plan-card-top">
          <div class="plan-number">0{{ index + 1 }} <span>/ 03</span></div>
          <span v-if="plan.featured" class="popular-label"><Sparkles :size="13" aria-hidden="true" /> PILIHAN FAVORIT</span>
          <span v-else class="plan-signal"><Wifi :size="18" aria-hidden="true" /></span>
        </div>
        <h3>{{ plan.name }}</h3>
        <p class="plan-description">{{ plan.description }}</p>
        <div class="plan-speed">{{ plan.speed }} <span>Mbps</span></div>
        <div class="plan-price"><span>Rp</span> {{ plan.price }}<small>/ bulan</small></div>
        <div class="plan-divider"></div>
        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature">
            <Check :size="15" aria-hidden="true" /> {{ feature }}
          </li>
        </ul>
        <a
          class="plan-cta"
          :class="{ 'plan-cta-featured': plan.featured }"
          :href="whatsappUrl(`Halo Mitra.net, saya tertarik berlangganan paket ${plan.name} ${plan.speed} Mbps seharga Rp${plan.price}.000.`)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi kami <ArrowUpRight :size="17" aria-hidden="true" />
        </a>
      </article>
    </div>
    <p class="plan-footnote">* Hubungi tim kami untuk informasi ketersediaan layanan di area Anda.</p>
  </section>
</template>
