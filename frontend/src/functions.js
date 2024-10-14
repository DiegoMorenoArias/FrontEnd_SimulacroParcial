
async function getAllGames(){
    const getGamesCall = await fetch("http://localhost:3000/api/games");
    const getGames = await getGamesCall.json();
    return getGames;
    }

export default getAllGames;