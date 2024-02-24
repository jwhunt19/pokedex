import { useState } from "react";
import * as pokeAPI from "../../services/pokeApi";
import * as search from "../../utils/search";

const Search = ({ setPokemon }) => {
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState("name/id");
  const [error, setError] = useState("");
  const [generation, setGeneration] = useState("1");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleError = (err) => {
    setError(err.message);
    setTimeout(() => setError(""), 3000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    switch (searchOption) {
      case "name/id":
        search.nameId(input)
          .then((data) => setPokemon(data))
          .catch((err) => handleError(err));
        break;
      case "type":
        search.type(input)
          .then((data) => setPokemon(data))
          .catch((err) => handleError(err));
        break;
      default:
        console.log("searchOption not found");
    }
  };

  return (
    <>
      <form id="search">
        {searchOption === "generation" ? (
          <select
            value={generation}
            onChange={(e) => {
              setGeneration(e.target.value);
            }}
          >
            <option value="1">Generation 1</option>
            <option value="2">Generation 2</option>
            <option value="3">Generation 3</option>
            <option value="4">Generation 4</option>
            <option value="5">Generation 5</option>
            <option value="6">Generation 6</option>
            <option value="7">Generation 7</option>
            <option value="8">Generation 8</option>
            <option value="9">Generation 9</option>
          </select>
        ) : (
          <input
            type="text"
            placeholder={`search by ${
              searchOption === "name/id" ? "name or id" : searchOption
            }...`}
            value={input}
            onChange={handleInput}
          ></input>
        )}

        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="name/id">Name / ID</option>
          <option value="type">Type</option>
          <option value="ability">Ability</option>
          <option value="generation">Generation</option>
        </select>
        <button type="submit" onClick={handleSearch}>
          search
        </button>
      </form>
      {error ? <p>{error}</p> : ""}
    </>
  );
};

export default Search;
