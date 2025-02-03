/* eslint-disable react/prop-types */

import "./EventComponent.css";

const EventComponent = ({ event, i, hour }) => {
  return (
    <div className="event-div">
      <div className="event-icon">
        <img src="../src/assets/images/events/contaovelha.png" alt="a"></img>
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
