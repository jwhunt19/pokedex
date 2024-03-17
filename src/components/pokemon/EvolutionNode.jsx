import * as search from "../../utils/search";
import getEvolutionMethod from "../../utils/evolutionMethod";

const EvolutionNode = ({ stage, setPokemon, depth = 0 }) => {
  const pokedexId = stage.species.url.slice(42, -1);

  const handlePokemonSelection = (id) => {
    search
      .nameId(id)
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`flex flex-col items-center ${
        depth === 0 ? "mt-4" : "mt-2"
      } mb-2`}
    >
      {depth > 0 && getEvolutionMethod(stage)}
      <div className="flex justify-center gap-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexId}.png`}
          alt={stage.species.name}
          className="w-20 h-20 border-2 border-gray-200 rounded-full hover:cursor-pointer"
          onClick={() => handlePokemonSelection(pokedexId)}
        />
      </div>
      <div className={`flex ${depth === 0 ? "gap-8" : "gap-4"} justify-center`}>
        {stage.evolves_to.length > 0 &&
          stage.evolves_to.map((s, i) => (
            <EvolutionNode
              key={i}
              stage={s}
              setPokemon={setPokemon}
              depth={depth + 1}
            />
          ))}
      </div>
    </div>
  );
};

export default EvolutionNode;
