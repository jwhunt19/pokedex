const formatString = (str) => {
  // Edge case for HP
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
};

export default formatString;