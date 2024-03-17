import formatString from "../../utils/formatString";

const Stat = ({ stat, value }) => {
  const statCorrections = {
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
  };

  const formatStat = (stat) => {
    if (statCorrections[stat]) {
      return statCorrections[stat];
    } else {
      return formatString(stat);
    }
  };

  return (
    <>
      <p className="odd:font-bold text-font-primary">{formatStat(stat)}</p>
      <p className="text-font-secondary">{value}</p>
    </>
  );
};

export default Stat;
