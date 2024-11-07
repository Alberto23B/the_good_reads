import React, { useState } from "react";
import { extractVolumeInfo } from "../helpers/extractVolumeInfo";
import { fetchData } from "../helpers/fetchData";

export default function SearchBar({ setData, setIsLoading, setShowFavorites }) {
  const [query, setQuery] = useState("");
  let results = [];

  const handleClick = async (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Please provide a title");
      return;
    }
    setData([]);
    setShowFavorites(false);
    setIsLoading(true);
    const response = await fetchData(query);
    if (!response) {
      alert("No results matching the search");
    } else {
      extractVolumeInfo(results, response);
      setData(() => results);
    }
    setQuery("");
  };

  return (
    <div className="items-center flex-none w-2/4 my-6 md:flex">
      <form method="get" className="flex flex-col items-center md:flex-row">
        <input
          className="h-10 px-3 rounded-md min-w-[40vw]"
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find your next read..."
          required
        />
        <input
          className="block px-4 my-2 text-white rounded-md md:ml-4 bg-zinc-600 w-fit "
          type="submit"
          value="Search"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}
