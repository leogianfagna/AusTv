/* eslint-disable react/prop-types */

import "./EventComponent.css";

const EventComponent = ({ event, i, hour }) => {
  const eventos = [
    { name: "contaovelhas", desc: "Descrição sobre o evento" },
    { name: "matapombo", desc: "Descrição sobre o evento" },
  ];

  function getEventIcon(eventName) {
    const iconName = eventName.replace(/\s+/g, '').toLowerCase();
    return iconName + ".png";
  }

  return (
    <div className="event-div">
      <div className="event-icon">
        <img src={"../src/assets/images/events/" + getEventIcon(event.lista[i])} alt="a"></img>
      </div>
      <div className="event-name">
        <p>{event.lista[i]}</p>
        <span>{hour + ":00"}</span>
      </div>
      <div className="event-button">
        <button>Ver</button>
      </div>
    </div>
  );
};

export default EventComponent;
