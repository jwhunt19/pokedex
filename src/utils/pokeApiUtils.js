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
  mrmime: "mr-mime",
  mimejr: "mime-jr",
  mrrime: "mr-rime",
  typenull: "type-null",
  tapukoko: "tapu-koko",
  tapulele: "tapu-lele",
  tapubulu: "tapu-bulu",
  tapufini: "tapu-fini",
  hooh: "ho-oh",
  "farfetch'd": "farfetchd",
  "sirfetch'd": "sirfetchd",
  deoxys: "deoxys-normal",
  darmanitan: "darmanitan-standard",
  basculin: "basculin-red-striped",
  tornadus: "tornadus-incarnate",
  thundurus: "thundurus-incarnate",
  landorus: "landorus-incarnate",
  keldeo: "keldeo-ordinary",
  meloetta: "meloetta-aria",
  meowstic: "meowstic-male",
  aegislash: "aegislash-shield",
  pumpkaboo: "pumpkaboo-average",
  gourgeist: "gourgeist-average",
  oricorio: "oricorio-baile",
  wishiwashi: "wishiwashi-solo",
  minior: "minior-red-meteor",
  mimikyu: "mimikyu-disguised",
  giratina: "giratina-altered",
  shaymin: "shaymin-land",
  wormadam: "wormadam-plant",
};

const nameCorrection = (name) => {
  if (names[name]) {
    return names[name];
  } else {
    return name;
  }
};

export { shapeData, nameCorrection };
