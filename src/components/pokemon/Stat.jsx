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
      <p className="odd:font-bold">{formatStat(stat)}</p>
      <p>{value}</p>
    </>
  );
};

export default Stat;
