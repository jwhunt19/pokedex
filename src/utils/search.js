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

const type = (type) => {};

const ability = (ability) => {};

const generation = (generation) => {};

export { nameId, type, ability, generation };
