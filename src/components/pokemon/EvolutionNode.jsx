import * as search from "../../utils/search";
import getEvolutionMethod from "../../utils/evolutionMethod";

const EvolutionNode = ({
  stage,
  setPokemon,
  depth = 0,
  multiStage = false,
}) => {
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
      className={`flex items-center justify-around ${
        depth === 0 ? "ml-1 my-2 lg:my-4" : ""
      } ${multiStage ? "mb-1" : ""}`}
    >
      <div className="flex items-center gap-1 lg:gap-4">
        {depth > 0 && getEvolutionMethod(stage)}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexId}.png`}
          alt={stage.species.name}
          className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-border rounded-2xl bg-content-bg-secondary hover:cursor-pointer"
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
                multiStage={stage.evolves_to.length > 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EvolutionNode;
