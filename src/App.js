import { useState } from 'react';
import * as pokeAPI from './services/pokeAPI';

function App() {
  const [pokemon, setPokemon] = useState({});

  const test = () => {
    console.log('hey')
  }

  return (
    <div className="App">
      <button onClick={test}>test</button>
    </div>
  );
}

export default App;
