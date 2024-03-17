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

  // TODO: add exception for eevee on styling. should have eevee above and evos below
  return (
    <div
      className={`flex items-center justify-around mt-2 ${
        depth === 0 ? "mb-4" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        {depth > 0 && getEvolutionMethod(stage)}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexId}.png`}
          alt={stage.species.name}
          className="w-20 h-20 border-2 border-border rounded-2xl bg-content-bg-secondary hover:cursor-pointer"
          onClick={() => handlePokemonSelection(pokedexId)}
        />
        <div className="flex flex-col items-end">
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
    </div>
  );
};

export default EvolutionNode;
