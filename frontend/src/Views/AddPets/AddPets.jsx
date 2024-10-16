import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPets.css";

const AddPets = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const navigate = useNavigate();
  const buttonIsDisabled = !name || !age || !type || !description || !characteristics;

  const handleAddPet = async () => {
    const response = await fetch("http://localhost:3005/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, type, description, characteristics:[characteristics.split(" ")]}),
    });

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Agregar mascota</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Edad"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tipo"
            value={type}
            onChange={(e) => setType(e.target.value)}
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
            type="text"
            placeholder="Características"
            value={characteristics}
            onChange={(e) => setCharacteristics(e.target.value)}
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
          className="add-button"
          onClick={handleAddPet}
          disabled={buttonIsDisabled}
        >
          Agregar mascota
        </button>
      </div>
    </div>
  );
};

export default AddPets;
