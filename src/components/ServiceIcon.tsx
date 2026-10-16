import type { Service } from '../config/site'

const paths: Record<Service['icon'], React.ReactNode> = {
  bath: (
    <>
      <path d="M5 12h14l-1.2 6.2a2 2 0 0 1-2 1.6H8.2a2 2 0 0 1-2-1.6L5 12Z" />
      <path d="M7 12V7.5a2.5 2.5 0 0 1 5 0V9m2-1.5a2 2 0 1 1 4 0V12M8 22v-2m8 2v-2" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m8 8 12 12M8 16l6-6m2-2 4-4m-7 10 3 3" />
    </>
  ),
  heart: (
    <>
      <path d="M20.8 8.7c0 5.3-8.8 11-8.8 11s-8.8-5.7-8.8-11a4.7 4.7 0 0 1 8.8-2.3 4.7 4.7 0 0 1 8.8 2.3Z" />
      <path d="M4 4 2.5 2.5m17.5 0L18.5 4M12 2V1" />
    </>
  ),
  basket: (
    <>
      <path d="m4 10 2 10h12l2-10H4Z" />
      <path d="m8 10 4-7 4 7M8 14v3m8-3v3" />
    </>
  ),
}

interface ServiceIconProps {
  name: Service['icon']
}

export function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <span className="service-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  )
}
