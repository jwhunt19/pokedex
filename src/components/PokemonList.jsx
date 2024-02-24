const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;

