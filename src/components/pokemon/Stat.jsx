const Stat = ({ stat, value }) => {
  // Edge case for HP
  function transformString(str) {
    if (str === "hp") {
      return "HP";
    }

    // Replace all dashes with spaces
    let stringWithSpaces = str.replace(/-/g, " ");

    // Capitalize the first letter of each word
    let capitalizedString = stringWithSpaces.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });

    return capitalizedString;
  }

  stat = transformString(stat);

  return (
    <div>
      <p>{`${stat}: ${value}`}</p>
    </div>
  );
};

export default Stat;
