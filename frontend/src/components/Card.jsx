import "./Card.css";
import { useNavigate } from 'react-router-dom';

const Card = ({pets}) => {
    const navigate = useNavigate();
    console.log(pets);

    const handlePetRedirect = (id) => {
        navigate(`/pet/${id}`);
    };

    return (
        <div className="Card">
            {pets.length > 0 ? (
                pets.map((pet) => (
                    <div key={pet.id}>
                        <img src={pet.photo} alt={pet.name}></img>
                        <h2>{`${pet.name}`}</h2>
                        <h2>{pet.age}</h2>
                        <div id="buttonsDiv">
                            <button onClick={() => handlePetRedirect(pet.id)}>Ver Detalles</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Buscando mascotas...</div>
            )}
        </div>
    );
}

export default Card;
