import { useState, useEffect } from "react";
import * as pokeAPI from "./services/pokeApi";

import Pokemon from "./components/pokemon/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!pokemon.id) {
      pokeAPI.getPokemon("pikachu").then((data) => setPokemon(data));
    }
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const search = () => {
    pokeAPI.getPokemon(input).then((data) => setPokemon(data));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter id or name"
        value={input}
        onChange={handleInput}
      ></input>
      <button onClick={search}>search</button>
      {pokemon.id ? <Pokemon pokemon={pokemon} /> : ""}
    </div>
  );
}

export default App;
