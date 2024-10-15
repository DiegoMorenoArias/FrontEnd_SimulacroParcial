import "./Card.css";
import { useNavigate } from 'react-router-dom';

const deleteGame = async (id) => {
    const gameDelete = await fetch("http://localhost:3000/api/games/" + id, {
      method: "DELETE",
    });
  
    return gameDelete;
  };

/*const editGame = async (id) => {
const gameEdit = await fetch("http://localhost:3000/api/games/" + id, {
    method: "PUT"
});

return gameDelete;
};*/

const Card = ({games, refreshGames}) => {
    const navigate = useNavigate();


    const handleGameRedirect = (id) => {
        navigate(`/game/${id}`);
    };
    
    const handleDeleteClick = async (id) => {
        const response = await deleteGame(id);
        if (response.ok) {
          refreshGames();
        }
      };

      const handleEditGameClick = (id) => {
        navigate(`/editGame/${id}`);
      };

    return (
        <div className="Card">
            {games.length > 0 ? (
                games.map((sport) => (
                    <div key={sport.id}>
                        <h1>{sport.title}</h1>
                        <div id="buttonsDiv">
                            <button onClick={() => handleGameRedirect(sport.id)}>Detalles</button>
                            <button onClick={() => handleDeleteClick(sport.id)}>Borrar</button>
                            <button onClick={() => handleEditGameClick(sport.id)}>Editar</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Buscando Deportes...</div>
            )}
        </div>
    );
}

export default Card;
