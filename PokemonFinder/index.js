

async function findPokemon(){
    try {
        const pokemonName =document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Could not find pokemon data");
        }
        const data = await response.json();
        const pokemonImageData = data.sprites.front_default;
        const pokemonImage = document.getElementById("Pokemon image");
        pokemonImage.src = pokemonImageData;
        pokemonImage.style.display = "block";

    }
    catch (error){
        console.error(error);
    }
}