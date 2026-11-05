<script setup lang="ts">
import { X } from '@lucide/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  messageTemplate: string
}>()

const emit = defineEmits<{
  close: []
  submit: [message: string]
}>()

const name = ref('')
const address = ref('')
const message = ref(props.messageTemplate)

function submitForm() {
  emit(
    'submit',
    `Halo Mitra.net,\n\nNama: ${name.value.trim()}\nAlamat: ${address.value.trim()}\nPesan: ${message.value.trim()}`,
  )
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => {
  document.body.classList.add('contact-modal-open')
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.classList.remove('contact-modal-open')
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="contact-modal-backdrop" @click.self="emit('close')">
    <section
      class="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button class="contact-modal-close" type="button" aria-label="Tutup formulir" @click="emit('close')">
        <X :size="19" aria-hidden="true" />
      </button>
      <div class="eyebrow"><span>HUBUNGI MITRA.NET</span><span class="eyebrow-line"></span></div>
      <h2 id="contact-modal-title">Mari mulai<br /><span>dari sini.</span></h2>
      <p class="contact-modal-intro">Isi data berikut. Pesan akan disiapkan untuk dikirim langsung ke WhatsApp kami.</p>

      <form class="contact-form" @submit.prevent="submitForm">
        <label for="contact-name">Nama</label>
        <input
          id="contact-name"
          v-model="name"
          name="name"
          type="text"
          autocomplete="name"
          placeholder="Contoh: Budi Santoso"
          required
        >

        <label for="contact-address">Alamat</label>
        <textarea
          id="contact-address"
          v-model="address"
          name="address"
          autocomplete="street-address"
          placeholder="Contoh: Jl. Ki Hajar Dewantara, Tungkal Ilir"
          rows="2"
          required
        ></textarea>

        <label for="contact-message">Isi pesan</label>
        <textarea
          id="contact-message"
          v-model="message"
          name="message"
          placeholder="Tulis pesan Anda untuk Mitra.net"
          rows="4"
          required
        ></textarea>

        <button class="contact-form-submit" type="submit">
          Kirim ke WhatsApp <span aria-hidden="true">→</span>
        </button>
      </form>
    </section>
  </div>
</template>
