import * as pokeAPI from "../services/pokeApi";
import * as pokeApiUtils from "../utils/pokeApiUtils";

const nameId = async (nameId) => {
  if (nameId.replace(/\s/g, "") === "") throw new Error("No input provided");
  nameId = nameId.replace(/ /g, "-");
  nameId = nameId.toLowerCase();
  nameId = pokeApiUtils.nameCorrection(nameId);

  const data = await pokeAPI.getPokemonByNameId(nameId);
  return data;
};

const type = async (type) => {
  type = type.toLowerCase();
  const types = {
    normal: 1,
    fighting: 2,
    flying: 3,
    poison: 4,
    ground: 5,
    rock: 6,
    bug: 7,
    ghost: 8,
    steel: 9,
    fire: 10,
    water: 11,
    grass: 12,
    electric: 13,
    psychic: 14,
    ice: 15,
    dragon: 16,
    dark: 17,
    fairy: 18,
  };

  if (types[type]) {
    const data = await pokeAPI.getPokemonByType(types[type]);
    return data;
  } else {
    throw new Error("Type not found");
  }
};

const ability = (ability) => {};

const generation = (generation) => {};

export { nameId, type, ability, generation };
