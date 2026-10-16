import { siteConfig } from '../config/site'

export function WhatsAppButton() {
  const number = siteConfig.whatsapp.replace(/\D/g, '')
  const label = number ? 'Fale com a gente pelo WhatsApp' : 'Configure o WhatsApp antes de publicar'

  if (!number) {
    return (
      <button
        className="whatsapp-button whatsapp-button--disabled"
        type="button"
        disabled
        aria-label={label}
        title={label}
      >
        <WhatsAppMark />
      </button>
    )
  }

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <WhatsAppMark />
    </a>
  )
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.4 3.6A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 22Zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6L8.8 6.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.4 4.7.8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.2-.1-.4-.2-.7-.4Z" />
    </svg>
  )
}
