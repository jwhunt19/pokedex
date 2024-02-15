import { useState } from "react";
import * as pokeAPI from "./services/pokeApi";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const search = () => {
    pokeAPI.getPokemon(input).then((data) => setPokemon(data))
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
      {pokemon.name ? <p>{pokemon.name}</p> : ''}
    </div>
  );
}

export default App;
