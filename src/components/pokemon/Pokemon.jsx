import Stat from "./Stat";
import formatString from "../../utils/formatString";
import { useEffect, useState } from "react";
import Evolutions from "./Evolutions";

const Pokemon = ({ pokemonList, pokemon, setPokemon }) => {
  const [abilities, setAbilities] = useState({});

  // TODO: planned feature - link to an abilities page
  const formatAbilities = (abilities) => {
    const abilitySet = new Set(abilities);
    const uniqueAbilities = [...abilitySet];

    const formattedAbilities = uniqueAbilities.map((ab) => {
      return formatString(ab);
    });

    const abilitiesObject = uniqueAbilities.reduce((obj, key, i) => {
      obj[key] = formattedAbilities[i];
      return obj;
    }, {});

    return abilitiesObject;
  };

  useEffect(() => {
    setAbilities(formatAbilities(pokemon.abilities));
  }, [pokemon.abilities]);

  return (
    <div
      id="pokemon"
      className="bg-content-bg mt-10 w-3/4 rounded-xl shadow-md flex flex-col"
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
        <p className="text-font-secondary">{`#${pokemon.id}`}</p>
      </div>
      <img
        src={pokemon.sprite}
        alt={`sprite for ${pokemon.name}`}
        className="w-1/2 self-center"
      />

      {/* Types */}
      <div className="flex self-center gap-3">
        {pokemon.types.map((type) => {
          return (
            <p
              key={type}
              className={`bg-${type} w-24 text-center font-bold uppercase rounded-lg border-2 border-black`}
            >
              {type}
            </p>
          );
        })}
      </div>

      {/* Abilities */}
      <div className="mt-5 self-center text-center w-3/5 text-font-secondary">
        <p>
          <u>Abilities</u>
        </p>
        <div className="flex justify-center gap-4">
          {Object.keys(abilities).map((key) => (
            <p key={key}>{abilities[key]}</p>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 m-5 gap-1">
        {Object.keys(pokemon.stats).map((stat, i) => {
          return <Stat key={i} stat={stat} value={pokemon.stats[stat]} />;
        })}
      </div>
      <Evolutions id={pokemon.id} />
    </div>
  );
};

export default Pokemon;
