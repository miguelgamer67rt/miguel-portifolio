# Portfólio — Miguel Americo

React + Vite + CSS. Sem banco de dados e sem painel admin.

## Rodar no computador
    npm install
    npm run dev        # desenvolvimento
    npm run build      # gera a pasta dist/ para publicar

## O que editar
Tudo em `src/config/site.js`: textos, ferramentas, vídeo e contatos.

## Adicionar o vídeo
1. Copie o arquivo para `public/videos/demo.mp4`
2. (Opcional) copie a capa para `public/images/capa.jpg`
3. Em `site.js`, preencha `video.src: "/videos/demo.mp4"` e `video.poster: "/images/capa.jpg"`
   Ou use `video.youtubeId` para um vídeo do YouTube.

## Publicar
Envie a pasta `dist/` para Netlify, Vercel ou Cloudflare Pages.
