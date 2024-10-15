import './App.css';
import Card from './components/Card.jsx';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';

const getGames = async () => {
  const gamesFetch = await fetch("http://localhost:3000/api/games");
  const games = await gamesFetch.json();
  return games;
};

const App = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const refreshGames = async () => {
    const updatedGames = await getGames();
    setGames(updatedGames);
  };

  useEffect(() => {
    refreshGames();
  }, []);

  const handleAddGameClick = () => {
    navigate("/addGame");
  };

  return (
    <div>
      <div className="home-title-wrapp">
        <h1>Juegos COI</h1>
        <button onClick={handleAddGameClick} className="add-game-button">
          Agregar Juego
        </button>
      </div>
      {games.length ? (
        <div className="home-grid-cards">
          <Card />
        </div>
      ) : (
        <div className="home-no-games">No hay juegos para mostrar</div>
      )}
    </div>
  );
};
export default App;
