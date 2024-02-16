import { useState, useEffect } from "react";
import * as pokeAPI from "./services/pokeApi";

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
      {pokemon.name ? (
        <>
          <p>{`id: ${pokemon.id}\n`}</p>
          <p>{`name: ${pokemon.name}`}</p>
          <img src={pokemon.sprite} alt={`sprite for ${pokemon.name}`} />
          <p>{`types: ${pokemon.types.join(", ")}`}</p>
          <p>{`stats: ${JSON.stringify(pokemon.stats)}`}</p>
          <p>{`abilities: ${pokemon.abilities.join(", ")}`}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
