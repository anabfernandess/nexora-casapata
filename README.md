# SiteFactory — Template para pet shop

Template demonstrativo responsivo para pet shops brasileiros, feito com React, TypeScript e Vite. O conteúdo da empresa fica separado da apresentação para facilitar a personalização por cliente.

> **Demonstração NEXORA:** este site é uma apresentação comercial do template. O endereço atual é um placeholder explicitamente demonstrativo; não é enviado ao Google Maps. Os depoimentos também são placeholders. Antes de publicar para um cliente, configure somente informações fornecidas e autorizadas.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal. Para verificar testes, tipos e build de produção:

```bash
npm test
npm run typecheck
npm run build
```

Para visualizar localmente a build gerada:

```bash
npm run preview
```

## Personalização

Edite [`src/config/site.ts`](./src/config/site.ts) para alterar nome, slogan, descrição, telefone, e-mail, WhatsApp, endereço, horários, serviços, cores, fotografias e redes sociais. Os componentes e seções consomem essa configuração, sem exigir alterações na estrutura da página.

- **Telefone e endereço:** substitua os valores demonstrativos por informações públicas autorizadas. Para habilitar o mapa e o botão "Como chegar", altere `address` para o endereço real e `addressIsDemo` para `false`. Enquanto `addressIsDemo` for `true`, o endereço não será enviado ao Google Maps.
- **E-mail:** preencha `email` com o endereço validado do cliente. Sem endereço configurado, o botão de contato permanece desativado.
- **WhatsApp:** informe o número internacional com DDI e DDD, apenas com dígitos, por exemplo `5511999999999`. Com o campo vazio, o botão flutuante aparece desativado e informa que precisa ser configurado.
- **Serviços:** atualize a lista `services`; os ícones aceitos são `bath`, `scissors`, `heart` e `basket`.
- **Cores:** altere os valores de `colors`; a aplicação os disponibiliza como propriedades CSS globais.
- **Imagens:** use URLs HTTPS de imagens otimizadas e autorizadas. Atualize o texto alternativo de cada imagem junto com sua URL.
- **Redes sociais:** adicione links válidos à lista `socialLinks`. A área de redes sociais só aparece quando houver links configurados.
- **SEO e favicon:** atualize título, descrição e metadados Open Graph em `index.html`; substitua `public/favicon.svg` se a marca do cliente exigir outro ícone.
- **Depoimentos:** substitua os placeholders no componente `src/App.tsx` apenas por conteúdo real e autorizado.
- **Contato:** configure um endereço de e-mail confirmado antes da publicação. As fontes e fotografias demonstrativas são carregadas de Google Fonts e Unsplash; confirme a autorização/licença e a disponibilidade das imagens antes de usar comercialmente.

## Publicação

1. Confirme com o cliente os dados, imagens autorizadas, endereço, links e depoimentos que serão publicados.
2. Execute `npm ci`, `npm test` e `npm run build`.
3. Publique o conteúdo de `dist/` em uma hospedagem estática compatível com Vite (por exemplo, Netlify, Vercel ou Cloudflare Pages). Use `npm run build` como comando de build e `dist` como diretório de saída.
4. Configure o domínio e HTTPS na hospedagem e verifique a página publicada em desktop e celular.

Este repositório não contém configuração de hospedagem, credenciais nem automação de publicação. Nenhuma publicação é feita por esses comandos.

## Estrutura

```text
src/
  components/    Componentes reutilizáveis de navegação, marca e rodapé
  config/        Conteúdo, imagens e identidade personalizáveis do site
  styles/        Estilos globais e regras responsivas
  test/          Configuração dos testes
  App.tsx        Composição das seções do template
  main.tsx       Inicialização da aplicação
index.html       Idioma, metadados SEO e fontes
vite.config.ts   Configuração do Vite e Vitest
```
