const getPetByID = async (id) => {
    try {
      const petFetch = await fetch(`http://localhost:3005/api/pets/${id}`);
      if (!petFetch.ok) {
        throw new Error("Error fetching the pet data");
      }
      const pet = await petFetch.json();
      return pet;
    } catch (error) {
      console.error("Error fetching game:", error);
      return null; // Devuelve null si hay un error
    }
  };
  
export default getPetByID;
  