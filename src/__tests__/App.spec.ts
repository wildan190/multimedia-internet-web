import { describe, it, expect, vi } from 'vitest'

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

  it('opens the contact form from the navbar and sends the filled template to WhatsApp', async () => {
    const openWindow = vi.spyOn(window, 'open').mockImplementation(() => null)
    const wrapper = mount(App)

    await wrapper.find('.header-cta').trigger('click')

    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
    expect(wrapper.get<HTMLTextAreaElement>('#contact-message').element.value).toContain('Halo Mitra.net')

    await wrapper.find('#contact-name').setValue('Budi Santoso')
    await wrapper.find('#contact-address').setValue('Tungkal Ilir, Jambi')
    await wrapper.find('form.contact-form').trigger('submit')

    expect(openWindow).toHaveBeenCalledOnce()
    const sentUrlString = openWindow.mock.calls[0]?.[0]
    expect(sentUrlString).toBeDefined()
    if (!sentUrlString) throw new Error('WhatsApp window was not opened')
    const sentUrl = new URL(sentUrlString)
    expect(sentUrl.origin + sentUrl.pathname).toBe('https://wa.me/6285345881705')
    expect(sentUrl.searchParams.get('text')).toContain('Nama: Budi Santoso')
    expect(sentUrl.searchParams.get('text')).toContain('Alamat: Tungkal Ilir, Jambi')
    expect(sentUrl.searchParams.get('text')).toContain('Pesan: Halo Mitra.net')
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)

    openWindow.mockRestore()
    wrapper.unmount()
  })

  it('opens the same contact form from the subscription call to action', async () => {
    const wrapper = mount(App)

    await wrapper.find('.button-light').trigger('click')

    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
    expect(wrapper.get<HTMLTextAreaElement>('#contact-message').element.value).toContain('ingin berlangganan internet')

    await wrapper.find('.contact-modal-close').trigger('click')
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
    wrapper.unmount()
  })
})
