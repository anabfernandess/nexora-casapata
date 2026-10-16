import { siteConfig } from '../config/site'

interface BrandProps {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <a
      className={`brand${compact ? ' brand--compact' : ''}`}
      href="#inicio"
      aria-label={`${siteConfig.name} — início`}
    >
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="11" cy="12" r="4" fill="currentColor" />
          <circle cx="20" cy="8" r="4" fill="currentColor" />
          <circle cx="29" cy="12" r="4" fill="currentColor" />
          <circle cx="34" cy="20" r="3.5" fill="currentColor" />
          <path
            d="M20 17c-6.3 0-12 7.7-12 12.2 0 3.2 2.4 4.8 5.6 4.8 2.1 0 4.2-1.1 6.4-1.1s4.3 1.1 6.4 1.1c3.2 0 5.6-1.6 5.6-4.8C32 24.7 26.3 17 20 17Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="brand__name">{siteConfig.name}</span>
    </a>
  )
}
