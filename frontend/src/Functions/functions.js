const getGameByID = async (id) => {
    try {
      const gameFetch = await fetch(`http://localhost:3000/api/games/${id}`);
      if (!gameFetch.ok) {
        throw new Error("Error fetching the game data");
      }
      const game = await gameFetch.json();
      return game;
    } catch (error) {
      console.error("Error fetching game:", error);
      return null; // Devuelve null si hay un error
    }
  };
  
  export default getGameByID;
  