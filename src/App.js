import { useState } from "react";

import Pokemon from "./components/pokemon/Pokemon";
import Search from "./components/search/Search";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="App w-1/2 m-auto flex flex-col items-center font-pokedex">
      <h1 className="text-font-primary text-4xl mt-5">Pokedex Search</h1>
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
