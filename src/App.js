import { useState } from "react";
import * as pokeAPI from "./services/pokeApi";

import Pokemon from "./components/pokemon/Pokemon";
import Search from "./components/search/Search";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="App">
      <Search setPokemon={setPokemon} setPokemonList={setPokemonList} />
      {pokemon.id ? (
        <Pokemon pokemon={pokemon} />
      ) : (
        <PokemonList pokemonList={pokemonList} />
      )}
    </div>
  );
}

export default App;
