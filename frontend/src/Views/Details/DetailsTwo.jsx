import React, { useEffect, useState } from "react";
import "./Details.css";
import { useNavigate, useParams } from "react-router-dom";
import getPetByID from "../../Functions/functions.js";

const deletePet = async (id) => {
  const petDelete = await fetch("http://localhost:3005/api/pets/" + id, {
    method: "DELETE",
  });

  return petDelete;
};

const Details = () => {
  const [pet, setPet] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPetByID(id).then((pet) => setPet(pet));
  }, [id]);

const handleDeleteClick = async (id) => {
    const response = await deletePet(id);
    if (response.ok) {
      navigate(-1);
    }
  };

  const handleEditPetClick = (id) => {
    navigate(`/editPet/${id}`);
  };

  return (
    <div className="container">
      <h1>Detalles</h1>
      {pet && (
        <div>
          <div className="photo">
            <img src={pet.photo} alt={pet.name} className="photo-content"></img>
          </div>
          <div className="detail">
            <span className="detail-title">Nombre: </span>
            <span className="detail-content">{pet.name}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Edad: </span>
            <span className="detail-content">{pet.age}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Tipo: </span>
            <span className="detail-content">{pet.type}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Descripción: </span>
            <span className="detail-content">{pet.description}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Características: </span>
            <span className="detail-content">{pet.characteristics.join(", ")}</span>
          </div>
          <div className="buttonsDiv">
            <button onClick={() => handleDeleteClick(pet.id)}>Adoptar</button>
            <button onClick={() => handleEditPetClick(pet.id)}>Editar</button>
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
