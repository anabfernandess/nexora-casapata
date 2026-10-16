import { siteConfig } from '../config/site'
import { Brand } from './Brand'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Brand compact />
          <p>{siteConfig.slogan}</p>
        </div>
        <div className="site-footer__contact">
          <p className="site-footer__label">Vamos conversar?</p>
          <a href="#contato">Entre em contato <span aria-hidden="true">↗</span></a>
          <p>{siteConfig.phone}</p>
        </div>
        {siteConfig.socialLinks.length > 0 && (
          <div className="site-footer__social" aria-label="Redes sociais">
            {siteConfig.socialLinks.map((social) => (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Feito com carinho.</p>
        <p className="site-footer__credit">Desenvolvido por Beatriz Fernandes · NEXORA</p>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  )
}
