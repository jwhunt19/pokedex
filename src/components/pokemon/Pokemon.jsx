import Stat from "./Stat";
import formatString from "../../utils/formatString";

const Pokemon = ({ pokemonList, pokemon, setPokemon }) => {
  return (
    <div id="pokemon" className="bg-[--content-background-color] mt-10 w-3/4 rounded-xl shadow-md">
      {pokemonList.length > 0 && (
        <button onClick={() => setPokemon({})}>{`<--`}</button>
      )}
      <p>{`id: ${pokemon.id}\n`}</p>
      <p>{`name: ${formatString(pokemon.name)}`}</p>
      <img src={pokemon.sprite} alt={`sprite for ${pokemon.name}`} />
      <p>{`types: ${pokemon.types.join(", ")}`}</p>
      {Object.keys(pokemon.stats).map((stat, i) => {
        return <Stat key={i} stat={stat} value={pokemon.stats[stat]} />;
      })}
      <p>{`abilities: ${pokemon.abilities.join(", ")}`}</p>
    </div>
  );
};

export default Pokemon;
