import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditGame.css";
import getGameByID from "../../Functions/functions.js";

const EditGame = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [players, setPlayers] = useState("");
  const navigate = useNavigate();
  const buttonIsDisabled = !title || !description || !players || !categories;

  useEffect(() => {
    const fetchGame = async () => {
      const gameToEdit = await getGameByID(id);
      if (gameToEdit && gameToEdit.length > 0) {
        const gameToEditValues = gameToEdit[0];
        setTitle(gameToEditValues.title);
        setDescription(gameToEditValues.description);
        setCategories(gameToEditValues.categories);
        setPlayers(gameToEditValues.players);
      } else {
        console.log("Game data not found.");
      }
    };
    fetchGame();
  }, [id]);
  

  const handleEditGame = async () => {
    const response = await fetch(`http://localhost:3000/api/games/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, players, categories }),
    });

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Editar Juego</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Cantidad de Jugadores"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Categoría"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
      </div>
        <div id="buttonsDiv">
            <button
                className="comeBack-button"
                onClick={() => navigate(-1)}
            >
                Volver
            </button>

            <button
                className="edit-button"
                onClick={handleEditGame}
                disabled={buttonIsDisabled}
            >
                Aceptar cambios
            </button>
        </div>
    </div>
  );
};

export default EditGame;
