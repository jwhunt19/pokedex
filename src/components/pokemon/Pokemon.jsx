import Stat from "./Stat";
import formatString from "../../utils/formatString";

const Pokemon = ({ pokemonList, pokemon, setPokemon }) => {
  return (
    <div
      id="pokemon"
      className="bg-[--content-background-color] mt-10 w-3/4 rounded-xl shadow-md flex flex-col"
    >
      {pokemonList.length > 0 && (
        <button
          onClick={() => setPokemon({})}
          className="bg-secondary-2 hover:bg-blue-500 active:bg-blue-700 mt-4 ml-4 w-10 rounded-md black"
        >
          &#x2190;
        </button>
      )}
      <div className="flex justify-center mt-5 gap-2 items-center">
        <p className="text-2xl">{formatString(pokemon.name)}</p>
        <p className="text-[--secondary-font-color]">{`#${pokemon.id}`}</p>
      </div>
      <img
        src={pokemon.sprite}
        alt={`sprite for ${pokemon.name}`}
        className="w-1/2 self-center"
      />
      <div className="flex self-center gap-3">
        {pokemon.types.map((type) => {
          return (
            <p
              className={`bg-${type} w-24 text-center font-bold uppercase rounded-lg border-2 border-black`}
            >
              {type}
            </p>
          );
        })}
      </div>
      <p>{`abilities: ${pokemon.abilities.join(", ")}`}</p>
      {Object.keys(pokemon.stats).map((stat, i) => {
        return <Stat key={i} stat={stat} value={pokemon.stats[stat]} />;
      })}
    </div>
  );
};

export default Pokemon;
