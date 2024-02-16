import * as pokeApiUtils from "../utils/pokeApiUtils.js";
import axios from "axios";

const getPokemon = async (id) => {
  if (localStorage.getItem(id)) {
    return JSON.parse(localStorage.getItem(id));
  } else {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const shapedData = pokeApiUtils.shapeData(data);

    localStorage.setItem(id, JSON.stringify(shapedData));

    return shapedData;
  }
};

export { getPokemon };
