import formatString from "./formatString";

const getEvolutionMethod = ({ evolution_details: details }) => {
  let method;

  if (details.length > 0) {
    const methodInfo = Object.keys(details[0]).reduce((obj, key) => {
      if (details[0][key]) {
        obj[key] = details[0][key];
      }
      return obj;
    }, {});

    // TODO: add icon for level up, trade, shed, and other with hover details
    const handleTrigger = (trigger) => {
      switch (trigger) {
        case "level-up":
          return "Lvl";
        case "trade":
          return "Trade";
        case "shed":
          return "Shed";
        case "other":
          return "TBD";
        default:
          return null;
      }
    };

    // TODO: add an item lookup for held_item and item
    const methodsMap = {
      item: methodInfo.item?.name ? formatString(methodInfo.item.name) : null,
      trigger: handleTrigger(methodInfo.trigger.name),
      gender: methodInfo.gender === 1 ? "Female" : "Male",
      held_item: methodInfo.held_item?.name
        ? `Hold ${formatString(methodInfo.held_item.name)}`
        : null,
      known_move: methodInfo.known_move?.name,
      known_move_type: methodInfo.known_move_type?.name
        ? `${formatString(methodInfo.known_move_type.name)} Move`
        : null,
      location: methodInfo.location?.name
        ? formatString(methodInfo.location.name)
        : null,
      min_level: `Lvl ${methodInfo.min_level}`,
      min_happiness: "Happiness",
      min_beauty: "Beauty",
      min_affection: "Affection",
      needs_overworld_rain: "Rain",
      party_species: methodInfo.party_species?.name,
      party_type: methodInfo.party_type?.name,
      relative_physical_stats:
        methodInfo.relative_physical_stats > 0 ? "A>D" : "D>A",
      time_of_day: methodInfo.time_of_day
        ? formatString(methodInfo.time_of_day)
        : null,
      trade_species: methodInfo.trade_species?.name,
      turn_upside_down: "Upside Down",
    };

    let methods = Object.keys(methodInfo);
    methods = methods.map((method) => {
      return methodsMap[method];
    });

    if (methodInfo.trigger.name === "level-up") {
      if (methodInfo.min_level) {
        methods = methods.filter((m) => m !== "Lvl");
      } else {
        const lastItem = methods.pop();
        methods = [lastItem, ...methods];
      }
    } else {
      methods = methods.filter((m) => m !== null);
    }

    method = methods.join(" + ");

    // TODO: after doing the above, could map over the method, each having its own
    // jsx element with a hover tooltip for more details
    return (
      <div className="flex items-center mb-2 text-font-primary">
        <p>-</p>
        <p>{method}</p>
        <p>→</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mb-2 text-font-primary">
        <p>-</p>
        <p>?</p>
        <p>→</p>
      </div>
    );
  }
};

export default getEvolutionMethod;
