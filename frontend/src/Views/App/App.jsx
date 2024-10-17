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
  const [filteredPets, setFilteredPets] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const refreshPets = async () => {
    const updatedPets = await getPets();
    setPets(updatedPets);
    setFilteredPets(updatedPets);
  };

  useEffect(() => {
    refreshPets();
  }, []);

  const handleAddPetClick = () => { 
    navigate("/addPet");
  };

  const handleFilter = (e) => { // hace que el filter esté atento al cambio
    setFilter(e.target.value);
  };

  const superFilter = () => { // filter era una palabra bloqueada xd
    const filtered = pets.filter((pet) => 
    pet.name.toLowerCase().includes(filter.toLowerCase())
    || pet.type.toLowerCase().includes(filter.toLowerCase())
    || pet.age.toLowerCase().includes(filter.toLowerCase())
    || pet.description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPets(filtered);
  };

  return (
    <div>
      <div className="home-title-wrapp">
        <h1>Adopta-Me</h1>
        <button onClick={handleAddPetClick} className="add-game-button">
          Agregar mascota
        </button>
      </div>
      <div className="filterDiv">
        <input
          type="text"
          placeholder="Filtrar"
          value={filter}
          onChange={handleFilter} // cada vez que cambiás encara el useState de vuelta
        />
        <button onClick={superFilter}>Filtrar</button> {/*cuando apretás el botón de Filtrar te filtra (más o menos)*/}
      </div>
      
      {filteredPets.length ? (
        <div className="home-grid-cards">
          <Card pets={filteredPets} />
        </div>
      ) : (
        <div className="home-no-games">No hay mascotitas para mostrar</div>
      )}
    </div>
  );
};
export default App;
