import * as pokeApiUtils from "../utils/pokeApiUtils.js";
import axios from "axios";

const getPokemonByNameId = async (id) => {
  if (localStorage.getItem(id)) {
    return JSON.parse(localStorage.getItem(id));
  } else {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const shapedData = pokeApiUtils.shapeData(data);

      localStorage.setItem(id, JSON.stringify(shapedData));

      return shapedData;
    } catch (err) {
      if (err.response.status === 404) {
        throw new Error("Pokemon not found");
      } else {
        console.error(err);
        return {};
      }
    }
  }
};

const getPokemonByType = async (type) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    return data.pokemon.map((poke) => {
      return poke.pokemon.name;
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};

export { getPokemonByNameId, getPokemonByType };
