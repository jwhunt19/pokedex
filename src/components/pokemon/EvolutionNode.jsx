import * as search from "../../utils/search";

const EvolutionNode = ({ stage, setPokemon, depth = 0 }) => {
  const evolutionDetails = ({ evolution_details: details }) => {
    // TODO: finish evolution methods
    if (details.length > 0) {
      const method = Object.keys(details[0]).reduce((obj, key) => {
        if (details[0][key]) {
          obj[key] = details[0][key];
        }
        return obj;
      }, {});

      console.log(method);

      return "↓";
    } else {
      return "↓";
    }
  };

  const handlePokemonSelection = (name) => {
    search
      .nameId(name)
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`flex flex-col items-center ${depth === 0 ? "mt-4" : "mt-8"}`}
    >
      {depth > 0 && evolutionDetails(stage)}
      <div className="flex justify-center gap-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stage.species.url.slice(
            42,
            -1
          )}.png`}
          alt={stage.species.name}
          className="w-20 h-20 border-2 border-gray-200 rounded-full hover:cursor-pointer"
          onClick={() => handlePokemonSelection(stage.species.name)}
        />
      </div>
      <div className={`flex ${depth === 0 ? "gap-8" : "gap-4"} justify-center`}>
        {stage.evolves_to.length > 0 &&
          stage.evolves_to.map((s, i) => (
            <EvolutionNode key={i} stage={s} setPokemon={setPokemon} depth={depth + 1} />
          ))}
      </div>
    </div>
  );
};

export default EvolutionNode;
