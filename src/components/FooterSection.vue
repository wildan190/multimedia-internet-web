<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
</script>

<template>
  <footer class="site-footer">
    <a class="brand-mark footer-brand" href="#" aria-label="Mitra.net — kembali ke atas">
      <img src="/img/logo.png" alt="Mitra.net" />
    </a>
    <p>Internet cepat, stabil, &amp; terpercaya, untuk Anda.</p>
    <a class="domain-link" href="https://multimediainternetnetwork.com" target="_blank" rel="noopener noreferrer">
      multimediainternetnetwork.com <ArrowUpRight :size="14" aria-hidden="true" />
    </a>
    <span class="copyright">© {{ new Date().getFullYear() }} Mitra.net</span>
  </footer>
</template>
