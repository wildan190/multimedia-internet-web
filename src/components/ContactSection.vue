<script setup lang="ts">
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from '@lucide/vue'
import { whatsappUrl } from '../utils/whatsapp'

const address =
  'Perumahan Permata Hijau Lima, Jl. Ki Hajar Dewantara, Parit 2, Tungkal Ilir, Blok A No. 31, Kabupaten Tanjung Jabung Barat, Jambi 36514, Indonesia'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
</script>

<template>
  <section id="kontak" class="contact-section" aria-labelledby="contact-title">
    <div class="contact-heading">
      <div class="eyebrow"><span>JANGKAU KAMI</span><span class="eyebrow-line"></span></div>
      <h2 id="contact-title">Mari terhubung<br /><span>dengan kami.</span></h2>
      <p>Ada pertanyaan atau ingin berlangganan? Hubungi tim Mitra.net atau kunjungi alamat kami.</p>

      <div class="contact-methods">
        <a
          class="contact-method"
          href="https://wa.me/6285345881705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-icon"><MessageCircle :size="17" aria-hidden="true" /></span>
          <span><small>WHATSAPP</small><strong>+62 853-4588-1705</strong></span>
          <ArrowUpRight :size="15" aria-hidden="true" />
        </a>
        <a class="contact-method" href="tel:+6285345881705">
          <span class="contact-icon"><Phone :size="17" aria-hidden="true" /></span>
          <span><small>TELEPON</small><strong>+62 853-4588-1705</strong></span>
          <ArrowUpRight :size="15" aria-hidden="true" />
        </a>
        <a class="contact-method" href="mailto:ptmultimedianetwork@gmail.com">
          <span class="contact-icon"><Mail :size="17" aria-hidden="true" /></span>
          <span><small>EMAIL</small><strong>ptmultimedianetwork@gmail.com</strong></span>
          <ArrowUpRight :size="15" aria-hidden="true" />
        </a>
      </div>

      <a class="contact-address" :href="mapUrl" target="_blank" rel="noopener noreferrer">
        <MapPin :size="18" aria-hidden="true" />
        <span><small>ALAMAT KANTOR</small><strong>{{ address }}</strong></span>
        <ArrowUpRight :size="15" aria-hidden="true" />
      </a>
    </div>

    <div class="contact-map">
      <iframe
        :src="mapEmbedUrl"
        title="Peta lokasi kantor PT Multimedia Internet Network di Tungkal Ilir, Jambi"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
      <a class="map-link" :href="mapUrl" target="_blank" rel="noopener noreferrer">
        Buka di Google Maps <ArrowUpRight :size="15" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
