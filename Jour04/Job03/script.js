async function getPokemons() {
  const response = await fetch("pokemon.json");
  const pokemons = await response.json();
  return pokemons;
}
const divResult = document.getElementById("resultats");
function afficherResultats(resultats) {
  divResult.innerHTML = "";
  if (resultats.length === 0) {
    divResult.textContent = "Aucun Pokémon ne correspond aux critères.";
  } else {
    resultats.forEach((p) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <h3>${p.name.french} (ID: ${p.id})</h3>
      <p>Type : ${p.type.join(", ")}</p>
      <p>Stats : HP ${p.base.HP}, Attack ${p.base.Attack}, Defense ${
        p.base.Defense
      }, Sp. Attack ${p.base["Sp. Attack"]}, Sp. Defense ${
        p.base["Sp. Defense"]
      }, Speed ${p.base.Speed}</p>
`;

      divResult.appendChild(div);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pokemonId = document.getElementById("id");
  const pokemonName = document.getElementById("name");
  const pokemonType = document.getElementById("type");
  const form = document.getElementById("form-filtre");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pokemons = await getPokemons();

    const resultats = pokemons.filter((pokemon) => {
      const matchId = !pokemonId.value || pokemon.id == pokemonId.value;
      const matchName =
        !pokemonName.value ||
        pokemon.name.french
          .toLowerCase()
          .includes(pokemonName.value.toLowerCase());
      const matchType =
        !pokemonType.value ||
        pokemon.type.some(
          (t) => t.toLowerCase() === pokemonType.value.toLowerCase()
        );
      return matchId && matchName && matchType;
    });
    // Affichage
    afficherResultats(resultats);
  });
});
