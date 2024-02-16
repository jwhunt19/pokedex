import formatString from "../../utils/formatString";

const Stat = ({ stat, value }) => {

  stat = formatString(stat);

  return (
    <div>
      <p>{`${stat}: ${value}`}</p>
    </div>
  );
};

export default Stat;
