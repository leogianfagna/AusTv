/* eslint-disable react/prop-types */

import "./EventComponent.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const EventComponent = ({ event, i, hour }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eventos = [
    {
      name: "corrida",
      desc: "Entre em uma corrida com vida limitada. Seja o primeiro a finalizar para vencer o evento.\n\nMelhor estratégia: decidir ir pelos caminhos mais fáceis ao invés dos mais rápidos.",
    },
    {
      name: "bestatreta",
      desc: "Elimine todos os adversários usando sua besta e um bocado de flechas.\n\nMelhor estratégia: faça vítimas sozinhas usando a flecha de força e atirando na cabeça.",
    },
    {
      name: "duelodepoções",
      desc: "Elimine seu adversário no duelo e avance de fase até chegar na final.\n\nMelhor estratégia: jogue as poções para trás para não curar o oponente. Faça refil enquanto o adversário estiver longe.",
    },
    {
      name: "foia",
      desc: "Seja o último sobrevivente na plataforma.\n\nMelhor estratégia: tente ficar o maior tempo possível entre 4 blocos. Faça um pulo seguro para a plataforma de baixo.",
    },
    {
      name: "matapombo",
      desc: "Elimine todos os adversários com a sua flecha hit kill.\n\nMelhor estratégia: fazer vítimas fáceis e tentar pegar flechas do chão que estão perdidas.",
    },
    {
      name: "atlântida",
      desc: "Elimine todos os adversários com o seu tridente.\n\nMelhor estratégia: tente fazer vítimas a longa distância em segurança. Use o mapa.",
    },
    {
      name: "sinuca",
      desc: "Encaçape seus adversários para eliminá-los.\n\nMelhor estratégia: evite andar pulando para não sofrer tanta repulsão.",
    },
    {
      name: "batalhaemmarte",
      desc: "Elimine todos os adversários para vencer.\n\nMelhor estratégia: faça uma parceria e elimine alvos difíceis e pegue os itens.",
    },
    {
      name: "chuvadebigorna",
      desc: "Seja o último sobrevivente à chuva.\n\nMelhor estratégia: olhe somente para cima e fique embaixo do maior conjunto de folhas.",
    },
    {
      name: "spleef",
      desc: "Cave buracos para derrubar adversários da plataforma.\n\nMelhor estratégia: seja cuidadoso e ataque adversários pelas costas.",
    },
    {
      name: "bananal",
      desc: "Derrube os adversários da plataforma.\n\nMelhor estratégia: use as árvores para proteger suas costas da repulsão.",
    },
    {
      name: "duelodeboxe",
      desc: "Elimine seu adversário no duelo e avance de fase até chegar na final.\n\nMelhor estratégia: pule para acertar críticos e evite ser combado.",
    },
    {
      name: "gravidadeinvertida",
      desc: "Arremesse adversários no teto para eliminá-los.\n\nMelhor estratégia: ataque embaixo das pontes é melhor do que se defender.",
    },
    {
      name: "restaum",
      desc: "Seja o último sobrevivente na plataforma.\n\nMelhor estratégia: esteja com sorte! Você pode arriscar e ir nas plataformas com menos jogadores.",
    },
    {
      name: "gladiadoranônimo",
      desc: "Elimine todos os adversários para vencer e para conseguir mais recursos.\n\nMelhor estratégia: controle sua regeneração de vida e faça vítimas para conseguir novas maçãs.",
    },
    {
      name: "guerreirinhos",
      desc: "Elimine todos os adversários para vencer.\n\nMelhor estratégia: use todos os recursos e faça uma parceria para dividir tarefas.",
    },
    {
      name: "duelos",
      desc: "Elimine seu adversário no duelo e avance de fase até chegar na final.\n\nMelhor estratégia: quem melhor usar a maçã dourada, normalmente vence.",
    },
    {
      name: "parkour",
      desc: "Seja o primeiro a finalizar os pulos para vencer.\n\nMelhor estratégia: decidir ir com mais calma para não ser eliminado em uma queda fatal.",
    },
    {
      name: "sumôdecarnaval",
      desc: "Derrube os adversários da plataforma.\n\nMelhor estratégia: não pular para sofrer grandes repulsões.",
    },
    {
      name: "bloquinhos",
      desc: "Seja o primeiro a descer todos os obstáculos.\n\nMelhor estratégia: ir com calma ao invés de ir em velocidade.",
    },
    {
      name: "bombardeiros",
      desc: "Exploda ou derrube todos os adversários.\n\nMelhor estratégia: sempre atingir os maiores topos e não tomar poções desnecessárias.",
    },
    {
      name: "plataforma",
      desc: "Derrube os outros trios da plataforma.\n\nMelhor estratégia: use a pérola para cima ao atacar para caso cair, volte à plataforma. Evite fazer isso muitas vezes.",
    },
    {
      name: "guerradeclãs(vanillew)",
      desc: "Elimine todos os clãs.\n\nMelhor estratégia: tente reproduzir a melhor estratégia encontrada com seu clã durante as prés guerras da semana.",
    },
    {
      name: "guerracivil(henesys)",
      desc: "Elimine todos os clãs.\n\nMelhor estratégia: tente reproduzir a melhor estratégia encontrada com seu clã durante o evento Xerifes.",
    },
    {
      name: "guerranarocinha(henesys)",
      desc: "Elimine todos os clãs.\n\nMelhor estratégia: acumule recursos e faça alianças contra os grandes clãs.",
    },
    {
      name: "xerifes",
      desc: "Elimine todos os clãs.\n\nMelhor estratégia: esse evento não tem importância em vencer. Use-o com sabedoria para testar seus equipamentos e saber o que melhorar para a verdadeira guerra.",
    },
    {
      name: "gregos",
      desc: "Elimine todos os clãs.\n\nMelhor estratégia: derrote jogadores com níveis de habilidade menor que o seu. Alie-se para derrubar os mais fortes.",
    },
    {
      name: "gladiador",
      desc: "Elimine todos os adversários.\n\nMelhor estratégia: participe mesmo sem bons itens para conhecer as estratégias.",
    },
    {
      name: "flechada",
      desc: "Elimine todos os adversários com arcos e flechas.\n\nMelhor estratégia: faça eliminações para conseguir carne.",
    },
    {
      name: "contaovelhas",
      desc: "Mate ovelhas para conseguir vida extra.\n\nMelhor estratégia: já deixe seu arco puxado e não seja afobado.",
    },
    {
      name: "guerra",
      desc: "A guerra de clãs acontece tanto no Vanillew e Henesys ao mesmo tempo. Você entra em uma épica batalha com o seu clã para ser o sobrevivente. Cada servidor tem estilos de guerras diferentes.",
    },
    {
      name: "avalanche",
      desc: "Sobreviva a uma chuva de explosões. Sua vida não é regenerada.",
    },
    {
      name: "duplinhas",
      desc: "Forme uma dupla e enfrente outras duplas em um formato de duelos, até que sobre apenas a dupla vencedora.",
    },
    {
      name: "triozinhos",
      desc: "Forme um trio e enfrente outros trios em um formato de duelos, até que sobre apenas o trio vencedor.",
    },
    {
      name: "tiroteio",
      desc: "Troque tiros, granadas e bala perdida entre soldados. Sobreviva ao tiroteio e elimine seus adversários.",
    },
    {
      name: "clãxclã",
      desc: "Dispute contra outros clãs, mas dessa vez, em um formato de duelos e necessitando manter itens para não perdê-los ao longo da batalha.",
    },
  ];

  function getEventoDescription(eventName) {
    const formatedName = eventName.replace(/\s+/g, "").toLowerCase();
    const eventObject = eventos.find((evento) => evento.name === formatedName);

    return (eventObject) ? eventObject.desc : "Não encontrado";
  }

  function getEventIcon(eventName) {
    const iconName = eventName.replace(/\s+/g, "").toLowerCase();
    return iconName + ".png";
  }

  return (
    <div className="event-div">
      <div className="event-icon">
        <img
          src={
            "../src/assets/images/events/icons/" + getEventIcon(event.lista[i])
          }
          alt="Imagem de evento"
        ></img>
      </div>
      <div className="event-name">
        <p>{event.lista[i]}</p>
        <span>{hour + ":00"}</span>
      </div>
      <div className="event-button">
        <button onClick={handleShow}>Ver</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal"
        centered
      >
        <Modal.Body>
          <img
            src={
              "../src/assets/images/events/background/" +
              getEventIcon(event.lista[i])
            } className="event-image"></img>
          <h1>{event.lista[i]}</h1>
          <p>{getEventoDescription(event.lista[i])}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventComponent;
