import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the Mitra.net landing page and all internet packages', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Internet cepat.')
    expect(wrapper.text()).toContain('Standar')
    expect(wrapper.text()).toContain('5 Mbps')
    expect(wrapper.text()).toContain('Rp 150.000')
    expect(wrapper.text()).toContain('Basis')
    expect(wrapper.text()).toContain('10 Mbps')
    expect(wrapper.text()).toContain('Rp 210.000')
    expect(wrapper.text()).toContain('Premium')
    expect(wrapper.text()).toContain('20 Mbps')
    expect(wrapper.text()).toContain('Rp 350.000')

    const packageLinks = wrapper.findAll('.plan-cta')
    expect(packageLinks).toHaveLength(3)
    expect(packageLinks.every((link) => link.text().includes('Hubungi kami'))).toBe(true)
    expect(
      packageLinks.every((link) => link.attributes('href')?.startsWith('https://wa.me/6285345881705')),
    ).toBe(true)
    expect(wrapper.find('.plans-scroll-hint').text()).toContain('Geser ke samping')
    expect(wrapper.find('.plans-grid').attributes('aria-label')).toContain('Geser ke samping')

    expect(wrapper.find('#faq-title').text()).toContain('Yang sering')
    expect(wrapper.findAll('.faq-item')).toHaveLength(5)
    expect(wrapper.find('a[href="#faq"]').exists()).toBe(true)
    expect(wrapper.find('#about-title').text()).toContain('Berawal dari koneksi.')
    expect(
      wrapper.find('#tentang').element.compareDocumentPosition(wrapper.find('#faq').element) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(wrapper.find('#tentang').text()).toContain('layanan internet voucheran')
    expect(wrapper.find('#tentang').text()).toContain('2019')
    expect(wrapper.find('#tentang').text()).toContain('2026')

    const contact = wrapper.find('#kontak')
    expect(contact.find('a[href="mailto:ptmultimedianetwork@gmail.com"]').exists()).toBe(true)
    expect(contact.find('a[href="tel:+6285345881705"]').exists()).toBe(true)
    expect(contact.text()).toContain('Perumahan Permata Hijau Lima')
    expect(contact.find('iframe[title]').exists()).toBe(true)
    expect(
      wrapper.find('#closing-title').element.compareDocumentPosition(contact.element) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(wrapper.find('.hero-komdigi').attributes('src')).toBe('/img/komdigi.png')
    expect(wrapper.find('.hero-proof').text()).toContain('Resmi & berizin')
    expect(wrapper.find('.site-footer .hero-komdigi').exists()).toBe(false)
  })
})
