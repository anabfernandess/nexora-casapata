import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { siteConfig } from './config/site'

describe('pet shop template', () => {
  it('renders the main sections and clearly identifies testimonial placeholders', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /um dia de cuidado/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tudo o que eles precisam/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /vamos marcar um oi/i })).toBeInTheDocument()
    expect(screen.getAllByText('Depoimento demonstrativo')).toHaveLength(3)
    expect(screen.getAllByText('Conteúdo a personalizar')).toHaveLength(3)
  })

  it('does not present the unconfigured WhatsApp demo button as working', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /configure o whatsapp/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /configure um e-mail de contato/i })).toBeDisabled()
  })

  it('shows the configured demonstrative address in the map and directions link', () => {
    render(<App />)

    const address = siteConfig.address
    const query = encodeURIComponent(address)

    expect(screen.getByText(`Endereço demonstrativo: ${address}`)).toBeInTheDocument()
    expect(screen.getByTitle(`Mapa de endereço demonstrativo: ${address}`))
      .toHaveAttribute('src', `https://www.google.com/maps?q=${query}&output=embed`)
    expect(screen.getByRole('link', { name: /como chegar/i }))
      .toHaveAttribute('href', `https://www.google.com/maps/search/?api=1&query=${query}`)
    expect(screen.queryByRole('img', { name: /mapa aguardando/i })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile navigation accessibly', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Abrir menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByRole('link', { name: 'Serviços' }))
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('supports keyboard navigation from the skip link into the page', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.tab()
    expect(screen.getByRole('link', { name: 'Pular para o conteúdo' })).toHaveFocus()
    await user.tab()
    expect(within(screen.getByRole('banner')).getByRole('link', { name: 'Casa Pata — início' }))
      .toHaveFocus()
  })

  it('creates a WhatsApp link when a client number is configured', () => {
    const originalNumber = siteConfig.whatsapp
    siteConfig.whatsapp = '+55 (11) 99999-9999'

    try {
      render(<App />)

      expect(screen.getByRole('link', { name: 'Fale com a gente pelo WhatsApp' }))
        .toHaveAttribute('href', 'https://wa.me/5511999999999')
    } finally {
      siteConfig.whatsapp = originalNumber
    }
  })

  it('shows a Google Maps embed and directions link for a configured address', () => {
    const originalAddress = siteConfig.address
    const originalAddressIsDemo = siteConfig.addressIsDemo
    siteConfig.address = 'Av. Paulista, 1000, São Paulo - SP'
    siteConfig.addressIsDemo = false

    try {
      render(<App />)

      const query = encodeURIComponent(siteConfig.address)
      expect(screen.getByTitle(`Mapa de localização: ${siteConfig.address}`))
        .toHaveAttribute('src', `https://www.google.com/maps?q=${query}&output=embed`)
      expect(screen.getByRole('link', { name: /como chegar/i }))
        .toHaveAttribute(
          'href',
          `https://www.google.com/maps/search/?api=1&query=${query}`,
        )
    } finally {
      siteConfig.address = originalAddress
      siteConfig.addressIsDemo = originalAddressIsDemo
    }
  })

  it('renders the requested NEXORA credit in the footer', () => {
    render(<App />)

    expect(screen.getByText('Desenvolvido por Beatriz Fernandes · NEXORA')).toBeInTheDocument()
  })

  it('resolves every internal link to an element on the page', () => {
    render(<App />)

    const internalLinks = screen.getAllByRole('link').filter((link) => {
      const href = link.getAttribute('href')
      return href?.startsWith('#')
    })

    for (const link of internalLinks) {
      const target = link.getAttribute('href')?.slice(1)
      expect(target && document.getElementById(target), `${link.textContent} target`).toBeTruthy()
    }
  })
})
