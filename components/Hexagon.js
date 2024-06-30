import React from 'react';
import './Hexagon.css';
import HexagonDetails from './HexagonDetails';

function Hexagon({ event, index, currentIndex, onClick, events }) {
  const isActive = index === currentIndex;
  const isEdge = Math.abs(index - currentIndex) > 1;

  const handleClick = () => {
    onClick(index);
  };

  const getPositionClass = () => {
    const position = index - currentIndex;
    if (position === -2) return 'left-two';
    if (position === -1) return 'left-one';
    if (position === 0) return 'center';
    if (position === 1) return 'right-one';
    if (position === 2) return 'right-two';
    return 'hidden';
  };

  return (
    <div>
        <div
        className={`hexagon ${isActive ? 'active' : ''} ${getPositionClass()} ${isEdge ? 'edge' : ''}`}
        onClick={handleClick}
        >
        {isActive ? <HexagonDetails event={event} /> : event.date}       
        </div>
    </div>
  );
}

export default Hexagon;
