import React, { useEffect, useState } from "react";
import "./Details.css";
import { useNavigate, useParams } from "react-router-dom";
import getGameByID from "../../Functions/functions.js";

const Details = () => {
  const [game, setGame] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGameByID(id).then((game) => setGame(game[0]));
  }, [id]);

  return (
    <div className="container">
      <h1>Detalles</h1>
      {game && (
        <div>
          <div className="detail">
            <span className="detail-title">Nombre: </span>
            <span className="detail-content">{game.title}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Descripción: </span>
            <span className="detail-content">{game.description}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Cantidad jugadores: </span>
            <span className="detail-content">{game.players}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Categoría: </span>
            <span className="detail-content">{game.categories}</span>
          </div>
        </div>
      )}
      <button onClick={() => navigate(-1)} className="back-button">
        Volver
      </button>
    </div>
  );
};

export default Details;
