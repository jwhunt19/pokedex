import { useState, useEffect } from "react";
import * as pokeAPI from "./services/pokeApi";

import Pokemon from "./components/pokemon/Pokemon";
import Search from "./components/search/Search";

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (!pokemon.id) {
      pokeAPI.getPokemon("pikachu").then((data) => setPokemon(data));
    }
  });

  return (
    <div className="App">
      <Search setPokemon={setPokemon} />
      {pokemon.id ? <Pokemon pokemon={pokemon} /> : ""}
    </div>
  );
}

export default App;
