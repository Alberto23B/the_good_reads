import React, { useState } from "react";
import { extractVolumeInfo } from "../helpers/extractVolumeInfo";
import { fetchData } from "../helpers/fetchData";

export default function SearchBar({setData, setIsLoading}) {
    const [query, setQuery] = useState("");
    let results = [];

    const handleClick = async (e) => {
        e.preventDefault();
        if (query === "") {
            alert("Please provide a title");
            return
        }
        setIsLoading(true);
        const response = await fetchData(query);
        if (!response) {
            alert("No results matching the search")
            setData([]);     
        } else {
            extractVolumeInfo(results, response);
            setData(() => results);
        }
        setQuery("");
    }

    return ( 
        <div className="flex items-center w-2/4 my-6">
            <form method="get" className="flex justify-center">
                <input className="h-10 px-3 rounded-md input" 
                type="search" name="q" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find your next read..." required/>
                <input className="block px-4 my-2 ml-4 text-white border rounded-md bg-zinc-600 w-fit " 
                type="submit" value="Search" onClick={handleClick}/>
            </form>
        </div>
    )
}