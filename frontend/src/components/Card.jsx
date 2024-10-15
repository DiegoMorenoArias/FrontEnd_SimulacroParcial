import { useEffect, useState } from 'react';
import getAllGames from "../functions.js";
import "./Card.css";
import { useNavigate } from 'react-router-dom';

function Card() {
    const [sports, setSports] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadGames(){
            let data = await getAllGames();
            setSports(data);
        }
        loadGames();
    }, []);

    const handleGameRedirect = (id) => {
        navigate(`/game/${id}`);
    };
    

    return (
        <div className="Card">
            {sports.length > 0 ? (
                sports.map((sport) => (
                    <div key={sport.id}>
                        <h1>{sport.title}</h1>
                        <button onClick={() => handleGameRedirect(sport.id)}>Detalles</button>
                        <button>Borrar</button>
                    </div>
                ))
            ) : (
                <div>Buscando Deportes...</div>
            )}
        </div>
    );
}

export default Card;
