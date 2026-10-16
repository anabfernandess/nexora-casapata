export interface SiteImage {
  src: string
  alt: string
}

export interface Service {
  title: string
  description: string
  icon: 'bath' | 'scissors' | 'heart' | 'basket'
}

export interface SocialLink {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  slogan: string
  description: string
  phone: string
  email: string
  whatsapp: string
  address: string
  addressIsDemo: boolean
  hours: string[]
  services: Service[]
  colors: {
    primary: string
    primaryDark: string
    accent: string
    highlight: string
    background: string
  }
  images: {
    hero: SiteImage
    gallery: SiteImage[]
  }
  socialLinks: SocialLink[]
}

export const siteConfig: SiteConfig = {
  name: 'Casa Pata',
  slogan: 'Um cuidado tranquilo, com carinho de casa.',
  description:
    'Um espaço pensado para o bem-estar do seu melhor amigo, com cuidado gentil, atenção aos detalhes e muito carinho em cada visita.',
  phone: '(11) 0000-0000 — número demonstrativo',
  email: '',
  whatsapp: '',
  address: 'Av. das Américas, 19019 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-703',
  addressIsDemo: true,
  hours: ['Segunda a sexta, das 9h às 18h', 'Sábado, das 9h às 14h'],
  services: [
    {
      title: 'Banho com carinho',
      description:
        'Um banho tranquilo, com produtos adequados e cuidado respeitoso do começo ao fim.',
      icon: 'bath',
    },
    {
      title: 'Tosa sem pressa',
      description:
        'Tosa higiênica ou no estilo que combina com a rotina e o conforto do seu pet.',
      icon: 'scissors',
    },
    {
      title: 'Cuidado de verdade',
      description:
        'Atenção ao bem-estar em cada detalhe, respeitando o tempo e as necessidades de cada um.',
      icon: 'heart',
    },
    {
      title: 'Achadinhos da loja',
      description:
        'Uma seleção demonstrativa de itens para deixar a rotina do seu companheiro ainda melhor.',
      icon: 'basket',
    },
  ],
  colors: {
    primary: '#16705F',
    primaryDark: '#105447',
    accent: '#e8f2e9',
    highlight: '#F4A340',
    background: '#FFFFFF',
  },
  images: {
    hero: {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=82',
      alt: 'Dois cachorros aproveitando um passeio ao ar livre',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=720&q=78',
        alt: 'Cachorro recebendo cuidado durante a tosa',
      },
      {
        src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=720&q=78',
        alt: 'Cachorro de pequeno porte olhando para a câmera',
      },
      {
        src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=720&q=78',
        alt: 'Cachorro descansando confortavelmente',
      },
      {
        src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=720&q=78',
        alt: 'Cachorro feliz em um passeio ao ar livre',
      },
    ],
  },
  socialLinks: [],
}
