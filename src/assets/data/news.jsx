

const newsTypes = [
  { id: 1, text: "Novidade", color: "#42baff" },
  { id: 2, text: "Aviso", color: "#ff6e42" },
  { id: 3, text: "Evento", color: "#e94ff7" },
];

const news = [
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
