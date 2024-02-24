const shapeData = (data) => {
  const shapedData = {
    id: data.id,
    name: data.species.name,
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

const names = {
  "mrmime": "mr-mime",
  "mimejr": "mime-jr",
  "mrrime": "mr-rime",
  "typenull": "type-null",
  "tapukoko": "tapu-koko",
  "tapulele": "tapu-lele",
  "tapubulu": "tapu-bulu",
  "tapufini": "tapu-fini",
  "hooh": "ho-oh",
  "farfetch'd": "farfetchd",
  "sirfetch'd": "sirfetchd",
  "deoxys": "deoxys-normal",
  "darmanitan": "darmanitan-standard",
}

const nameCorrection = (name) => {
  if (names[name]) {
    return names[name];
  } else {
    return name;
  }
};

export { shapeData, nameCorrection };
