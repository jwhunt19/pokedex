import { useState } from "react";
import * as search from "../../utils/search";

const Search = ({ setPokemon, setPokemonList }) => {
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

  // TODO: move this to a utils file
  const handleSearch = (e) => {
    e.preventDefault();
    switch (searchOption) {
      case "name/id":
        search
          .nameId(input)
          .then((data) => setPokemon(data))
          .then(() => setPokemonList([]))
          .catch((err) => handleError(err));
        break;
      case "type":
        search
          .type(input)
          .then((data) => setPokemonList(data))
          .then(() => setPokemon({}))
          .catch((err) => handleError(err));
        break;
      case "ability":
        search
          .ability(input)
          .then((data) => setPokemonList(data))
          .then(() => setPokemon({}))
          .catch((err) => handleError(err));
        break;
      case "generation":
        search
          .generation(generation)
          .then((data) => setPokemonList(data))
          .then(() => setPokemon({}))
          .catch((err) => handleError(err));
        break;
      default:
        console.log("searchOption not found");
    }
  };

  return (
    <>
      <form id="search" className="mt-10 flex">
        {searchOption === "generation" ? (
          <select
            className="text-font-primary bg-content-bg w-40 h-8 text-l pl-2 pb-1 rounded-s-md focus:outline-none"
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
            placeholder={`search by ${searchOption}...`}
            value={input}
            onChange={handleInput}
            className="text-font-primary bg-content-bg w-40 h-8 text-l pl-2 pb-1 rounded-s-md focus:outline-none"
          ></input>
        )}

        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          className="text-font-secondary bg-content-bg text-center w-28 h-8 text-l rounded-e-md focus:outline-none border-l border-gray-700"
        >
          <option value="name/id">Name / ID</option>
          <option value="type">Type</option>
          <option value="ability">Ability</option>
          <option value="generation">Generation</option>
        </select>
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-primary text-font-primary rounded-xl w-20 ml-5 border border-secondary-1 hover:bg-secondary-1 active:bg-primary-active font-bold"
        >
          search
        </button>
      </form>
      {error ? <p>{error}</p> : ""}
    </>
  );
};

export default Search;
