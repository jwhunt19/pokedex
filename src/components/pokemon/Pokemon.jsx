import Stat from './Stat';

const Pokemon = ({ pokemon }) => {
  return (
    <div id='pokemon'>
      <p>{`id: ${pokemon.id}\n`}</p>
      <p>{`name: ${pokemon.name}`}</p>
      <img src={pokemon.sprite} alt={`sprite for ${pokemon.name}`} />
      <p>{`types: ${pokemon.types.join(", ")}`}</p>
      {
        Object.keys(pokemon.stats).map((stat, i) => {
          return <Stat key={i} stat={stat} value={pokemon.stats[stat]} />;
        })
      }
      <p>{`abilities: ${pokemon.abilities.join(", ")}`}</p>
    </div>
  );
}

export default Pokemon;
