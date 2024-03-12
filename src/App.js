import { useState } from "react";

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
        <Pokemon
          pokemonList={pokemonList}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
      ) : (
        <PokemonList pokemonList={pokemonList} setPokemon={setPokemon} />
      )}
    </div>
  );
}

export default App;
