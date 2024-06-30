import React, { useState } from 'react';
import './App.css';
import Hexagon from './components/Hexagon';

const events = [
  { date: '26 ИЮНЯ', place: 'Стадион', content: '19:00', opponent_1: 'Медведи', opponent_2: 'Кабаны'},
  { date: '17 ИЮНЯ', place: 'Стадион', content: '19:00', opponent_1: 'Витязи', opponent_2: 'Варяги' },
  { date: '16 ИЮЛЯ', place: 'Стадион', content: '19:00', opponent_1: 'Барсуки', opponent_2: 'Кобры'},
  { date: '30 СЕНТЯБРЯ', place: 'Стадион', content: '19:00', opponent_1: 'Муравьи', opponent_2: 'Клопы' },
  { date: '15 ОКТЯБРЯ', place: 'Стадион', content: '19:00', opponent_1: 'Скала', opponent_2: 'Кремень' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleWheel = (event) => {
    if (event.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (event.deltaY > 0 && currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="App" onWheel={handleWheel}>
      <header className="App-header">
        <nav>
          <a href="#">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
          <a href="#">Как купить?</a>
          <a href="#">Правила</a>
          <a href="#">Возврат билетов</a>
          <a href="#">Войти</a>
        </nav>
      </header>
      <div className="hexagon-grid">
        {events.map((event, index) => (
          <Hexagon
            key={index}
            event={event}
            index={index}
            currentIndex={currentIndex}
            onClick={handleClick}
            events={events}
          />
        ))}
      </div>
      <div className="right-block">
        {currentIndex !== null && (
          <div className="selected-event">
            <h3>{events[currentIndex].opponent_1}</h3>
          </div>
        )}
      </div>
      <div className="left-block">
        {currentIndex !== null && (
          <div className="selected-event">
            <h3>{events[currentIndex].opponent_2}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
