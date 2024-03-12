import * as search from "../utils/search";

const PokemonList = ({ pokemonList, setPokemon }) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/missing_img.png";
  };

  const buildImgUrl = (baseURL) => {
    if (baseURL.length > 40) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseURL.slice(
        42,
        -1
      )}.png`;
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseURL.slice(
        34,
        -1
      )}.png`;
    }
  };

  const handlePokemonSelection = (name) => {
    search
      .nameId(name)
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="pokelist-container">
      <ul className="pokelist">
        {pokemonList.map((pokemon, index) => (
          <li
            className="pokelist-mon"
            key={index}
            onClick={() => handlePokemonSelection(pokemon.name)}
          >
            <img
              src={buildImgUrl(pokemon.url)}
              onError={handleImageError}
              alt={`${pokemon.name} sprite`}
            />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
