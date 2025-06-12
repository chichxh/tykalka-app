import React, { useEffect } from 'react';
import tg from './telegram';
import './App.css';

function App() {
  useEffect(() => {
    tg.ready(); // Telegram ждёт этого сигнала, чтобы показывать интерфейс
  }, []);

  const sendData = () => {
    tg.sendData("Данные из React!"); // Это попадёт в бота
  };

  return (
    <div className="App" style={{ padding: 20, textAlign: "center" }}>
      <h1>Привет из Telegram Mini App</h1>
      <button onClick={sendData}>Отправить данные боту</button>
    </div>
  );
}

export default App;
