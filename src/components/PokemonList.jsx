import * as search from "../utils/search";
import formatString from "../utils/formatString";

const PokemonList = ({ pokemonList, setPokemon }) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/missing_img.png";
  };

  const buildImgUrl = (baseURL) => {
    if (baseURL.length > 40) {
      // for pokemon-species url
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseURL.slice(
        42,
        -1
      )}.png`;
    } else {
      // for pokemon url
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
    <div className="w-full">
      <ul className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {pokemonList
          .filter((pokemon) =>
            pokemon.url.length > 40
              ? pokemon.url.slice(42, -1) < 1026
              : pokemon.url.slice(34, -1) < 1026
          )
          .map((pokemon, index) => (
            <li
              className="active:bg-button-hover hover:cursor-pointer hover:bg-content-bg-secondary hover:border-content-bg shadow-md text-center flex flex-col items-center bg-content-bg border border-content-bg-secondary rounded-2xl m-2 lg:w-32 lg:h-32"
              key={index}
              onClick={() => handlePokemonSelection(pokemon.name)}
            >
              <img
                src={buildImgUrl(pokemon.url)}
                onError={handleImageError}
                alt={`${pokemon.name} sprite`}
                className="w-3/4"
              />
              <p>{formatString(pokemon.name)}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokemonList;
