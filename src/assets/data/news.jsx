

const newsTypes = [
  { id: 1, text: "Novidade", color: "#42baff" },
  { id: 2, text: "Aviso", color: "#ff6e42" },
  { id: 3, text: "Evento", color: "#e94ff7" },
];

const news = [
  {
    image: "/assets/images/news/2025-02-18_siri.png",
    title: "Últimos dias de siris",
    type: newsTypes[2],
    date: "18/02/2025",
    endDate: "28/02/2025",
    description:
      "A coleta de siris nas praias de Henesys está acabando! Consiga o máximo que conseguir e troque as especiarias marinhas por itens muuuito legais usando /verao. Você tem até o final de fevereiro, aproveita que tá quente!",
  },
  {
    image: "/assets/images/news/2025-02-06_capa_3_anos.png",
    title: "Capa lendária",
    type: newsTypes[2],
    date: "08/02/2025",
    endDate: "09/02/2025",
    description:
      "Participe de uma Quiz sobre perguntas do servidor para ganhar um cosmético de capa de 3 anos de aniversário do servidor. Serão perguntas sobre diversidades do servidor e aquele que mais conhecer, mais acertará! As perguntas serão multiplas escolhas e cada acerto avança de fase. Ao chegar na fase 25, você ganha a capa. Cada fase avançada após isso, vai conceder 50 de cash para você!",
  },
  {
    image: "/assets/images/news/2025-02-06_paredao_aniversario.png",
    title: "Aniversário de 3 anos",
    type: newsTypes[2],
    date: "06/02/2025",
    endDate: "07/02/2025",
    description:
      "Esperamos que todos possam aproveitar esse terceiro aniversário com muito otimismo e entusiasmo! Para comemorar, faremos eventos de aniversários! Participe do ENCONTRE O BOLO da AusTv para ganhar emblema raro de aniversário do servidor.",
  },
  {
    image: "/assets/images/news/2025-01-22_verao.png",
    title: "Verão da AusTv",
    type: newsTypes[2],
    date: "24/01/2025",
    endDate: "20/03/2025",
    description:
      "Uma enorme onda de calor está por vir, trazendo diversas novidades e mecânicas para a comunidade. Vista seu chapéu e agarre uma água de coco pois vai ferver!",
  },
  {
    image: "/assets/images/news/2025-01-22_pet_rodolfo.png",
    title: "Novo pet natalino Rodolfo",
    type: newsTypes[0],
    date: "18/01/2025",
    endDate: "31/01/2025",
    description:
      "Adicione a sua coleção o novo pet, o Rodolfo. Um pet colecionável que só pode ser obtido durante o Natal de 2024.",
  },
  {
    image: "/assets/images/news/2025-01-22_cosmetico_natal.png",
    title: "Novos cosméticos de Natal",
    type: newsTypes[0],
    date: "20/12/2024",
    endDate: "31/01/2025",
    description:
      "Compre com /guardaroupa loja, aproveite esses cosméticos baratos e colecionáveis!",
  },
  {
    image: "/assets/images/news/2025-01-22_presentes_natal.png",
    title: "Entrega de presentes",
    type: newsTypes[2],
    date: "16/12/2024",
    endDate: "31/01/2025",
    description:
      "Nesse Natal abençoado, você tem a chance de entregar um presente para uma pessoa especial! O presente simboliza muito e vai ficar marcado o seu nome e o do destinatário!",
  }
];

export { news };
