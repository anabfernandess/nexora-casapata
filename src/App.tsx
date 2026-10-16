import { siteConfig } from './config/site'
import { SectionHeading } from './components/SectionHeading'
import { ServiceIcon } from './components/ServiceIcon'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { WhatsAppButton } from './components/WhatsAppButton'

const testimonials = [
  { name: 'Depoimento de cliente', note: 'Substitua por um depoimento autorizado.' },
  { name: 'Depoimento de cliente', note: 'Substitua por um depoimento autorizado.' },
  { name: 'Depoimento de cliente', note: 'Substitua por um depoimento autorizado.' },
]

function App() {
  const address = siteConfig.address.trim()
  const hasConfiguredAddress = Boolean(address)
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
  const displayedAddress = hasConfiguredAddress
    ? siteConfig.addressIsDemo
      ? `Endereço demonstrativo: ${address}`
      : address
    : 'Endereço demonstrativo — configure uma localização real.'

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <section className="hero section-shell" id="inicio" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow"><span aria-hidden="true">✳</span> Um cantinho feito pra eles</p>
              <h1 id="hero-title">Um dia de cuidado. <span>Um rabo abanando.</span></h1>
              <p className="hero__description">{siteConfig.slogan} Um espaço acolhedor para o seu melhor amigo se sentir em casa.</p>
              <div className="hero__actions">
                <a className="button" href="#contato">
                  Agende uma visita <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#servicos">Conheça nossos serviços <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero__note">
                <span className="hero__note-icon" aria-hidden="true">♡</span>
                <p>Respeito ao tempo e ao jeitinho de cada pet.</p>
              </div>
            </div>
            <div className="hero__visual">
              <img
                className="hero__image"
                src={siteConfig.images.hero.src}
                alt={siteConfig.images.hero.alt}
                fetchPriority="high"
                width="1200"
                height="1000"
              />
              <div className="hero__image-caption">
                <span aria-hidden="true">✳</span>
                <p>Carinho em cada detalhe</p>
              </div>
              <div className="hero__image-stamp" aria-hidden="true">
                <span>feitos para</span>
                <strong>eles</strong>
                <span>com amor ♡</span>
              </div>
            </div>
          </div>
          <div className="container hero__bottom">
            <span>Um cuidado mais leve começa aqui</span>
            <span className="hero__bottom-line" />
            <span>Deslize para conhecer <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <section className="about section-shell" id="sobre" aria-labelledby="about-title">
          <div className="container about__grid">
            <div className="about__visual">
              <img
                src={siteConfig.images.gallery[1].src}
                alt={siteConfig.images.gallery[1].alt}
                loading="lazy"
                width="720"
                height="800"
              />
              <div className="about__seal" aria-label="Um lugar para se sentir em casa">
                <span aria-hidden="true">♡</span>
                <span>um lugar<br />para se sentir<br />em casa</span>
              </div>
            </div>
            <div className="about__content">
              <p className="eyebrow">Prazer, somos a {siteConfig.name}</p>
              <h2 id="about-title">Mais do que um banho. <span>Um momento feliz.</span></h2>
              <p>{siteConfig.description}</p>
              <p>Acreditamos que cuidado de verdade começa com calma, atenção e respeito. Cada visita é pensada para que os pets — e suas famílias — se sintam à vontade.</p>
              <a className="text-link text-link--accent" href="#contato">Venha conhecer a gente <span aria-hidden="true">↗</span></a>
              <div className="about__signature">
                <span aria-hidden="true">♡</span>
                <p>Com carinho, <strong>time {siteConfig.name}</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading
              id="services-title"
              eyebrow="Cuidado do focinho ao rabinho"
              title="Tudo o que eles precisam, com carinho."
              description="Serviços pensados para fazer bem — e deixar a rotina mais gostosa para todo mundo."
            />
            <div className="services__grid">
              {siteConfig.services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top">
                    <ServiceIcon name={service.icon} />
                    <span className="service-card__number">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contato" aria-label={`Saiba mais sobre ${service.title}`}>
                    Saiba mais <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="difference section-shell" aria-labelledby="difference-title">
          <div className="container difference__grid">
            <div className="difference__content">
              <p className="eyebrow">Jeito Casa Pata</p>
              <h2 id="difference-title">Aqui, cada pet é <span>único.</span></h2>
              <p>Sem pressa e sem receita pronta. Nosso jeito de cuidar respeita a personalidade, as necessidades e o tempo de cada companheiro.</p>
              <ul className="difference__list">
                <li><span aria-hidden="true">✓</span> Atendimento atencioso, de verdade</li>
                <li><span aria-hidden="true">✓</span> Ambiente calmo e acolhedor</li>
                <li><span aria-hidden="true">✓</span> Cuidado respeitoso em cada etapa</li>
              </ul>
              <a className="button button--light" href="#contato">Conheça nosso espaço <span aria-hidden="true">↗</span></a>
            </div>
            <div className="difference__image-wrap">
              <img
                src={siteConfig.images.gallery[2].src}
                alt={siteConfig.images.gallery[2].alt}
                loading="lazy"
                width="720"
                height="820"
              />
              <div className="difference__image-note"><span aria-hidden="true">✳</span> Um carinho que faz diferença</div>
            </div>
          </div>
        </section>

        <section className="gallery section-shell" id="galeria" aria-labelledby="gallery-title">
          <div className="container">
            <SectionHeading
              id="gallery-title"
              eyebrow="Um pouquinho da nossa casa"
              title="Momentos que dão vontade de apertar."
              description="Imagens ilustrativas para esta demonstração. Troque por fotos autorizadas da sua empresa."
            />
            <div className="gallery__grid">
              {siteConfig.images.gallery.map((image, index) => (
                <figure className={`gallery__item gallery__item--${index + 1}`} key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" width="720" height="620" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section-shell" aria-labelledby="testimonials-title">
          <div className="container">
            <SectionHeading
              id="testimonials-title"
              eyebrow="Quem ama, conta"
              title="Palavras de quem faz parte."
              description="Espaço reservado para depoimentos reais, publicados com autorização dos clientes."
            />
            <div className="testimonials__grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={index}>
                  <span className="testimonial-card__quote" aria-hidden="true">“</span>
                  <p className="testimonial-card__placeholder">Depoimento demonstrativo</p>
                  <p className="testimonial-card__note">{testimonial.note}</p>
                  <div className="testimonial-card__author">
                    <span className="testimonial-card__avatar" aria-hidden="true">♡</span>
                    <span><strong>{testimonial.name}</strong><small>Conteúdo a personalizar</small></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contato" aria-labelledby="contact-title">
          <div className="container contact__grid">
            <div className="contact__content">
              <p className="eyebrow">A casa está de portas abertas</p>
              <h2 id="contact-title">Vamos marcar um <span>oi?</span></h2>
              <p>Vai ser um prazer conhecer vocês. Entre em contato para conversar e saber mais sobre a Casa Pata.</p>
              <div className="contact__details">
                <div>
                  <span className="contact__icon" aria-hidden="true">⌖</span>
                  <p>
                    <strong>Onde estamos</strong>
                    <span>{displayedAddress}</span>
                  </p>
                </div>
                <div>
                  <span className="contact__icon" aria-hidden="true">◷</span>
                  <p><strong>Horários</strong>{siteConfig.hours.map((hour) => <span key={hour}>{hour}</span>)}</p>
                </div>
                <div>
                  <span className="contact__icon" aria-hidden="true">↗</span>
                  <p><strong>Telefone</strong><span>{siteConfig.phone}</span></p>
                </div>
              </div>
              {siteConfig.email ? (
                <a
                  className="button"
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Olá, ${siteConfig.name}`)}`}
                >
                  Escreva para a gente <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <button
                  className="button button--disabled"
                  type="button"
                  disabled
                  aria-label="Configure um e-mail de contato antes de publicar"
                >
                  Configure o contato antes de publicar
                </button>
              )}
              <p className="contact__demo-note">Contato demonstrativo: configure seus dados antes de publicar.</p>
            </div>
            <div className="contact__visual">
              <img
                src={siteConfig.images.gallery[3].src}
                alt={siteConfig.images.gallery[3].alt}
                loading="lazy"
                width="720"
                height="820"
              />
              <div className="contact__card">
                <span aria-hidden="true">♡</span>
                <p>Estamos esperando<br />por vocês.</p>
              </div>
            </div>
            <div className="contact__map">
              <div className="contact__map-heading">
                <h3>Encontre a gente</h3>
                {hasConfiguredAddress ? (
                  <a
                    className="button button--small"
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Como chegar <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <button
                    className="button button--small button--disabled"
                    type="button"
                    disabled
                    aria-label="Configure um endereço para ver como chegar"
                  >
                    Como chegar <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
              {hasConfiguredAddress ? (
                <iframe
                  src={mapsEmbedUrl}
                  title={`${siteConfig.addressIsDemo ? 'Mapa de endereço demonstrativo' : 'Mapa de localização'}: ${address}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div
                  className="contact__map-placeholder"
                  role="img"
                  aria-label="Mapa aguardando a configuração de um endereço"
                >
                  <span aria-hidden="true">⌖</span>
                  <p>O mapa aparecerá aqui quando um endereço for configurado.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}

export default App
