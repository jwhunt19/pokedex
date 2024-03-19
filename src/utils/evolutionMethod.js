import React from "react";
import formatString from "./formatString";

const getEvolutionMethod = ({ evolution_details: details }) => {
  if (details.length > 0) {
    const methodInfo = Object.keys(details[0]).reduce((obj, key) => {
      if (details[0][key]) {
        obj[key] = details[0][key];
      }
      return obj;
    }, {});

    const handleTrigger = (trigger) => {
      switch (trigger) {
        case "level-up":
          return (
            <img
              src="/images/lvl.png"
              alt="Level up"
              className="w-6 h-6"
              title="Level up"
            />
          );
        case "trade":
          return (
            <img
              src="/images/trade.png"
              alt="Trade"
              className="w-6 h-6"
              title="Trade"
            />
          );
        case "shed":
          return (
            <img
              src="/images/shed.png"
              alt="Shed"
              className="w-6 h-6"
              title="Empty slot in party and evolve"
            />
          );
        case "spin":
          return (
            <img
              src="/images/spin.png"
              alt="Spin"
              className="w-6 h-6"
              title="Spin player while in party"
            />
          );
        case "recoil-damage":
          return "Recoil Damage";
        case "take-damage":
          return "Take Damage";
        case "three-critical-hits":
          return <p title="3 critical hits in a single battle">3 Crit</p>;
        case "tower-of-darkness":
          return "Train @ Tower of Darkness/Water";
        case "agile-style-move":
          return "+ Agile Style";
        case "strong-style-move":
          return "+ Strong Style";
        case "other":
          return (
            <img
              src="/images/missing_img.png"
              alt="Other"
              className="w-6 h-6"
              title="Missing info"
            />
          );
        default:
          return null;
      }
    };

    const methodsMap = {
      item: methodInfo.item?.name ? (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${methodInfo.item.name}.png`}
          alt="Item"
          className="w-6 h-6"
          title={formatString(methodInfo.item.name)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/missing_img.png";
          }}
        />
      ) : null,
      trigger: handleTrigger(methodInfo.trigger.name),
      gender:
        methodInfo.gender === 1 ? (
          <img
            src="/images/female.png"
            alt="Female"
            className="w-4 h-4"
            title="Female"
          />
        ) : (
          <img
            src="/images/male.png"
            alt="Male"
            className="w-4 h-4"
            title="Male"
          />
        ),
      held_item: methodInfo.held_item?.name ? (
        <>
          <span>Hold </span>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${methodInfo.held_item.name}.png`}
            alt="Item"
            className="w-6 h-6"
            title={formatString(methodInfo.held_item.name)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/missing_img.png";
            }}
          />
        </>
      ) : null,
      known_move: methodInfo.known_move?.name
        ? formatString(methodInfo.known_move.name)
        : null,
      known_move_type: methodInfo.known_move_type?.name
        ? `${formatString(methodInfo.known_move_type.name)} Move`
        : null,
      location: methodInfo.location?.name
        ? formatString(methodInfo.location.name)
        : null,
      min_level: `Lvl ${methodInfo.min_level}`,
      min_happiness: (
        <img
          src="/images/heart.png"
          alt="Happiness"
          className="w-4 h-4"
          title="Happiness"
        />
      ),
      min_beauty: "Beauty",
      min_affection: (
        <img
          src="/images/heart.png"
          alt="Affection"
          className="w-4 h-4"
          title="Affection"
        />
      ),
      needs_overworld_rain: "Rain",
      party_species: methodInfo.party_species?.name
        ? `${formatString(methodInfo.party_species.name)} in party`
        : null,
      party_type: methodInfo.party_type?.name
        ? `${formatString(methodInfo.party_type.name)} type in party`
        : null,
      relative_physical_stats:
        methodInfo.relative_physical_stats > 0 ? "A>D" : "D>A",
      time_of_day:
        methodInfo.time_of_day && methodInfo.time_of_day !== "night" ? (
          <img
            src="/images/sun.png"
            alt="Day"
            className="w-6 h-6"
            title="Day"
          />
        ) : (
          <img
            src="/images/moon.png"
            alt="Night"
            className="w-7 h-7"
            title="Night"
          />
        ),
      trade_species: methodInfo.trade_species?.name
        ? `${formatString(methodInfo.trade_species.name)} +`
        : null,
      turn_upside_down: "Upside Down",
    };

    let methods = Object.keys(methodInfo);
    methods = methods.map((method) => {
      return methodsMap[method];
    });

    if (methodInfo.trigger.name === "level-up") {
      if (methodInfo.min_level) {
        methods = methods.filter((item) => {
          if (React.isValidElement(item)) {
            return !(item.props.alt === "Level up");
          }
          return true;
        });
      } else {
        const lastItem = methods.pop();
        methods = [lastItem, ...methods];
      }
    } else {
      methods = methods.filter((m) => m !== null);
    }

    return (
      <div className="flex items-center mb-2 text-font-primary">
        <p>-</p>
        {methods.map((m, index) => (
          <div key={index} className="mx-1">
            {" "}
            {/* Use mx-1 for horizontal margin, adjust as needed */}
            {m}
          </div>
        ))}
        <p>→</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mb-2 text-font-primary">
        <p>-</p>
        <img
          src="/images/missing_img.png"
          alt="missing"
          title="missing info"
          className="w-6 h-6"
        />
        <p>→</p>
      </div>
    );
  }
};

export default getEvolutionMethod;
