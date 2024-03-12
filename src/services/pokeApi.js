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
    return data.pokemon.map((poke) => poke.pokemon);
  } catch (err) {
    if (err.response.status === 404) {
      throw new Error("Type not found");
    } else {
      console.error(err);
      return {};
    }
  }
};

const getPokemonByAbility = async (ability) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/ability/${ability}`
    );
    console.log(data);
    return data.pokemon.map((poke) => poke.pokemon);
  } catch (err) {
    if (err.response.status === 404) {
      throw new Error("Ability not found");
    } else {
      console.error(err);
      return {};
    }
  }
};

const getPokemonByGeneration = async (generation) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/generation/${generation}`
    );
    data.pokemon_species.sort(
      (a, b) => a.url.slice(42, -1) - b.url.slice(42, -1)
    );
    return data.pokemon_species.map((pokemon) => pokemon);
  } catch (err) {
    if (err.response.status === 404) {
      throw new Error("Generation not found");
    } else {
      console.error(err);
      return {};
    }
  }
};

export {
  getPokemonByNameId,
  getPokemonByType,
  getPokemonByAbility,
  getPokemonByGeneration,
};
