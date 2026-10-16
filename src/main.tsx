import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { siteConfig } from './config/site'
import './styles/global.css'

document.documentElement.style.setProperty('--color-primary', siteConfig.colors.primary)
document.documentElement.style.setProperty('--color-primary-dark', siteConfig.colors.primaryDark)
document.documentElement.style.setProperty('--color-accent', siteConfig.colors.accent)
document.documentElement.style.setProperty('--color-highlight', siteConfig.colors.highlight)
document.documentElement.style.setProperty('--color-background', siteConfig.colors.background)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
