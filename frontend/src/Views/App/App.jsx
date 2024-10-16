import './App.css';
import Card from '../../components/Card.jsx';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';

const getPets = async () => {
  const petsFetch = await fetch("http://localhost:3005/api/pets");
  const pets = await petsFetch.json();
  return pets;
};

const App = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const refreshPets = async () => {
    const updatedPets = await getPets();
    setPets(updatedPets);
  };

  useEffect(() => {
    refreshPets();
  }, []);

  const handleAddPetClick = () => {
    navigate("/addPet");
  };

  return (
    <div>
      <div className="home-title-wrapp">
        <h1>Adopta-Me</h1>
        <button onClick={handleAddPetClick} className="add-game-button">
          Agregar mascota
        </button>
      </div>
      {pets.length ? (
        <div className="home-grid-cards">
          <Card 
          pets={pets}/>
        </div>
      ) : (
        <div className="home-no-games">No hay mascotitas para mostrar</div>
      )}
    </div>
  );
};
export default App;