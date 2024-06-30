import React from 'react';

function HexagonDetails({ event }) {
  return (
    <div className="hexagon-content">
      <div>
        <p>{event.place}</p>
        <h3>{event.date}</h3>
        <p>{event.content}</p>
        <p>
          <button>Купить билет</button>
        </p>
      </div>
    </div>
  );
}

export default HexagonDetails;