import { useState } from 'react'
import { Brand } from './Brand'

const links = [
  { href: '#sobre', label: 'A casa' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a
              className="site-nav__link"
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="button button--small site-nav__cta"
            href="#contato"
            onClick={() => setMenuOpen(false)}
          >
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
