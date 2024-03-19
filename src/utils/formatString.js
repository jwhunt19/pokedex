const formatString = (str) => {
  // Edge case for HP
  if (str === "hp") {
    return "HP";
  }

  // Edge cases for pokemon names
  const correctedNames = {
    "mr-mime": "Mr. Mime",
    "mime-jr": "Mime Jr.",
    "mr-rime": "Mr. Rime",
    "type-null": "Type: Null",
    "ho-oh": "Ho-Oh",
    farfetchd: "Farfetch'd",
    sirfetchd: "Sirfetch'd",
  };

  // Check if the name is an exception
  const isFormatException = (name) => {
    return correctedNames[name];
  };

  // If the name is an exception, return the corrected name
  if (isFormatException(str)) {
    return correctedNames[str];
  }

  // Replace all dashes with spaces
  let stringWithSpaces = str.replace(/-/g, " "); // TODO: add edge case check eg. "ho-oh" -> "Ho-oh"

  // Capitalize the first letter of each word
  let capitalizedString = stringWithSpaces.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });

  return capitalizedString;
};

export default formatString;
