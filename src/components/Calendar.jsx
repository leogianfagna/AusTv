import { useRef, useState } from "react";
import EventComponent from "./EventComponent";
import "./Calendar.css";

const Calendar = () => {
  const eventos = [
    {
      dia: 1,
      lista: [
        "Resta Um",
        "Mata Pombo",
        "Foia",
        "Parkour",
        "Duelo de Poções",
        "Besta Treta",
        "Bloquinhos",
        "Flechada",
      ],
    },
    {
      dia: 2,
      lista: [
        "Spleef",
        "Chuva de Bigorna",
        "Duelos",
        "Bombardeiros",
        "Batalha em Marte",
        "Conta Ovelhas",
        "Atlântida",
        "Bananal",
      ],
    },
    {
      dia: 3,
      lista: [
        "Gravidade Invertida",
        "Duelo de Boxe",
        "Foia",
        "Besta Treta",
        "Sumô de Carnaval",
        "Guerra",
        "Sinuca",
        "Mata Pombo",
      ],
    },
    {
      dia: 4,
      lista: [
        "Bananal",
        "Gladiador Anônimo",
        "Gravidade Invertida",
        "Resta Um",
        "Guerreirinhos",
        "Guerra",
        "Avalanche",
        "Spleef",
      ],
    },
    {
      dia: 5,
      lista: [
        "Resta Um",
        "Chuva de Bigorna",
        "Atlântida",
        "Besta Treta",
        "Plataforma",
        "Bombardeiros",
        "Duplinhas",
        "Sinuca",
      ],
    },
    {
      dia: 6,
      lista: [
        "Duelo de Boxe",
        "Gravidade Invertida",
        "Guerra de clãs (Vanillew)",
        "Guerra na Rocinha (Henesys)",
        "Gladiador",
        "Triozinhos",
        "Tiroteio",
        "Parkour",
      ],
    },
    {
      dia: 7,
      lista: [
        "Chuva de Bigorna",
        "Corrida",
        "Guerra de clãs (Vanillew)",
        "Guerra Civil (Henesys)",
        "Flechada",
        "Sinuca",
        "Clã x Clã",
        "Gladiador Anônimo",
      ],
    },
  ];

  const calendar = [9, 12, 15, 17, 19, 20, 21, 23];
  const daysOfWeek = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  // Referência para a div que terá o scroll
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Função chamada quando o usuário segura o mouse (mousedown)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Função chamada quando o usuário move o mouse enquanto está segurando (mousemove)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Função chamada quando o usuário solta o mouse (mouseup e mouseleave)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="news-title mb-0">Eventos</h2>
        <p className="news-description">
          Fique ligado no calendário de eventos oficial.
        </p>
      </div>

      {/* Container com evento de arraste */}
      <div
        className="calendar-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <table className="calendar-table">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <td key={index} style={{fontWeight: "bold"}}>{day}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((hour, rowIndex) => (
              <tr key={rowIndex}>
                {daysOfWeek.map((_, colIndex) => (
                  <td key={colIndex}>
                    <EventComponent event={eventos[colIndex]} i={rowIndex} hour={hour}/>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
