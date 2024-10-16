import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPets.css";
import getPetByID from "../../Functions/functions.js";

const EditPets = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const navigate = useNavigate();
  const buttonIsDisabled = !name || !age || !type || !description || !characteristics;

  useEffect(() => {
    const fetchPets = async () => {
      const petToEdit = await getPetByID(id);
      if (petToEdit) {
        const petToEditValues = petToEdit;
        setName(petToEditValues.name);
        setAge(petToEditValues.age);
        setType(petToEditValues.type);
        setDescription(petToEditValues.description);
        setCharacteristics(petToEditValues.characteristics);
      } else {
        console.log("Game data not found.");
      }
    };
    fetchPets();
  }, [id]);
  

  const handleEditPet = async () => {
    const response = await fetch(`http://localhost:3005/api/pets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, type, description, characteristics:[characteristics] }),
    });

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Editar mascota</h1>
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
                className="edit-button"
                onClick={handleEditPet}
                disabled={buttonIsDisabled}
            >
                Aceptar cambios
            </button>
        </div>
    </div>
  );
};

export default EditPets;
