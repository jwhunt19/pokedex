import { useState } from "react";
import * as pokeAPI from "../../services/pokeApi";

const Search = ({ setPokemon }) => {
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState("name/id");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleError = (err) => {
    setError(err.message);
    setTimeout(() => setError(""), 3000);
  };

  const search = (e) => {
    e.preventDefault();
    pokeAPI
      .getPokemon(input)
      .then((data) => setPokemon(data))
      .catch((err) => handleError(err));
  };

  return (
    <>
      <form id="search">
        <input
          type="text"
          placeholder={`search by ${
            searchOption === "name/id" ? "name or id" : searchOption
          }...`}
          value={input}
          onChange={handleInput}
        ></input>
        <button onClick={search}>search</button>
      </form>
      {error ? <p>{error}</p> : ""}
    </>
  );
};

export default Search;
