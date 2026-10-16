import { describe, expect, it } from 'vitest'
import { siteConfig } from './site'

describe('siteConfig', () => {
  it('contains the required customizable business details', () => {
    expect(siteConfig.name).toBeTruthy()
    expect(siteConfig.slogan).toBeTruthy()
    expect(siteConfig.description).toBeTruthy()
    expect(siteConfig.phone).toContain('demonstrativo')
    expect(siteConfig.email).toBe('')
    expect(siteConfig.whatsapp).toBe('')
    expect(siteConfig.address).toBe('Av. das Américas, 19019 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-703')
    expect(siteConfig.addressIsDemo).toBe(true)
    expect(siteConfig.hours.length).toBeGreaterThan(0)
    expect(siteConfig.services).toHaveLength(4)
    expect(siteConfig.colors.primary).toMatch(/^#[\da-f]{6}$/i)
    expect(siteConfig.colors.primary).toBe('#16705F')
    expect(siteConfig.colors.highlight).toBe('#F4A340')
    expect(siteConfig.colors.background).toBe('#FFFFFF')
    expect(siteConfig.images.hero.src).toMatch(/^https:\/\//)
    expect(siteConfig.images.gallery.length).toBeGreaterThanOrEqual(4)
    expect(siteConfig.socialLinks).toEqual([])
  })

  it('provides descriptive alternative text for every configured photo', () => {
    const images = [siteConfig.images.hero, ...siteConfig.images.gallery]

    expect(images.every((image) => image.alt.trim().length > 0)).toBe(true)
  })
})
