import * as pokeApiUtils from "../utils/pokeApiUtils.js";

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const shapedData = pokeApiUtils.shapeData(data);
  return shapedData;
};

export { getPokemon };
