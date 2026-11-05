<script setup lang="ts">
import { ArrowUpRight, Plus } from '@lucide/vue'
import { whatsappUrl } from '../utils/whatsapp'
</script>

<template>
  <section id="faq" class="faq-section" aria-labelledby="faq-title">
    <div class="faq-heading">
      <div class="eyebrow"><span>BUTUH INFORMASI?</span><span class="eyebrow-line"></span></div>
      <h2 id="faq-title">Yang sering<br /><span>ditanyakan.</span></h2>
      <p>Belum menemukan jawabannya? Tim kami siap membantu Anda.</p>
      <a
        class="faq-contact"
        :href="whatsappUrl('Halo Mitra.net, saya ingin bertanya tentang layanan internet.')"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tanya tim Mitra.net <ArrowUpRight :size="15" aria-hidden="true" />
      </a>
    </div>
    <div class="faq-list">
      <details class="faq-item">
        <summary><span>Bagaimana cara memilih paket yang sesuai?</span><Plus :size="18" aria-hidden="true" /></summary>
        <p>Pilih berdasarkan kebutuhan internet Anda: Standar 5 Mbps untuk kebutuhan esensial, Basis 10 Mbps untuk rutinitas harian keluarga, atau Premium 20 Mbps untuk aktivitas online yang lebih intens.</p>
      </details>
      <details class="faq-item">
        <summary><span>Apakah layanan Mitra.net tersedia di area saya?</span><Plus :size="18" aria-hidden="true" /></summary>
        <p>Ketersediaan layanan bergantung pada area. Hubungi tim kami melalui WhatsApp dan sertakan lokasi Anda untuk memastikan jangkauan layanan.</p>
      </details>
      <details class="faq-item">
        <summary><span>Bagaimana cara berlangganan dan melakukan pemasangan?</span><Plus :size="18" aria-hidden="true" /></summary>
        <p>Pilih paket, tekan tombol “Hubungi kami”, lalu sampaikan alamat dan paket pilihan Anda melalui WhatsApp. Tim kami akan membantu mengecek ketersediaan serta informasi pemasangan.</p>
      </details>
      <details class="faq-item">
        <summary><span>Apakah harga paket dibayar per bulan?</span><Plus :size="18" aria-hidden="true" /></summary>
        <p>Harga yang tercantum adalah harga per bulan. Untuk detail biaya atau ketentuan lainnya, silakan konfirmasi kepada tim Mitra.net sebelum berlangganan.</p>
      </details>
      <details class="faq-item">
        <summary><span>Ke mana saya menghubungi teknisi jika butuh bantuan?</span><Plus :size="18" aria-hidden="true" /></summary>
        <p>Teknisi siaga 24 jam. Hubungi tim Mitra.net melalui WhatsApp agar kami dapat membantu menindaklanjuti kendala Anda.</p>
      </details>
    </div>
  </section>
</template>
