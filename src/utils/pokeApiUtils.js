const shapeData = (data) => {
  const shapedData = {
    id: data.id,
    name: data.name,
    sprite: data.sprites.front_default,
    types: data.types.map((type) => type.type.name),
    stats: {},
    abilities: data.abilities.map((ability) => ability.ability.name),
  };

  data.stats.forEach((stat) => {
    shapedData.stats[stat.stat.name] = stat.base_stat;
  });

  return shapedData;
};

export { shapeData };
