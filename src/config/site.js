// ============================================================
// TUDO O QUE VOCÊ PRECISA EDITAR ESTÁ NESTE ARQUIVO
// ============================================================

export const site = {
  name: "Miguel Americo",
  role: "Editor de Vídeo",
  tagline: "Transformando ideias em histórias visuais.",
  intro:
    "Edito vídeos para games, YouTube, Shorts, Reels, TikTok e vlogs, com qualidade, atenção aos detalhes e compromisso com a visão de cada cliente.",
  about: [
    "Tenho 18 anos e trabalho com edição de vídeo há mais de um ano. Nesse período, venho aprimorando minhas habilidades e desenvolvendo um olhar criativo para transformar ideias em conteúdos envolventes e visualmente impactantes.",
    "Sou apaixonado por criar conteúdos dinâmicos, sempre buscando qualidade, atenção aos detalhes e compromisso com a visão de cada cliente.",
  ],
  facts: [
    { label: "Idade", value: "18 anos" },
    { label: "Experiência", value: "+1 ano em edição de vídeo" },
  ],
  formats: ["Games", "YouTube", "Shorts", "Reels", "TikTok", "Vlogs"],
};

// Para usar o logo oficial, coloque o arquivo em public/images e preencha "logo".
// Exemplo: logo: "/images/premiere.svg"
export const tools = [
  { name: "Adobe After Effects", short: "Ae", bg: "#00005b", color: "#9999ff", logo: "" },
  { name: "Adobe Premiere Pro", short: "Pr", bg: "#00005b", color: "#9999ff", logo: "" },
  { name: "CapCut", short: "", bg: "#000000", color: "#ffffff", logo: "" },
];

// ---- VÍDEO DE DEMONSTRAÇÃO ----
// Opção 1 (arquivo): coloque o vídeo em public/videos/ e preencha src: "/videos/demo.mp4"
// Opção 2 (YouTube): preencha youtubeId com o código do vídeo
// Capa: coloque a imagem em public/images/ e preencha poster: "/images/capa.jpg"
// Deixe src e youtubeId vazios para mostrar "Vídeo em breve".
export const video = {
  title: "Vídeo de demonstração",
  description: "",
  src: "",
  youtubeId: "",
  poster: "",
};

// ---- CONTATO ----
// Deixe vazio ("") para esconder o item. E-mail e telefone vieram do seu PDF.
export const contact = {
  email: "Miguelalexandrino04@gmail.com",
  whatsapp: "5541988091062", // só números, com código do país (55) e DDD
  whatsappDisplay: "(41) 98809-1062",
  instagram: "", // só o usuário, sem @. Exemplo: "miguel.edits"
};
