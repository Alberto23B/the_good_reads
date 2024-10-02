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
            {/* <p className="p-2">Today I feel like reading...</p> */}
            <form method="get" className="flex justify-center">
                <input className="h-10 rounded-md input" 
                type="text" name="q" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find your next read..." required/>
                {/* <div className="flex flex-row"> */}
                <input className="block px-4 my-2 ml-4 text-white border rounded-md bg-zinc-600 w-fit " 
                type="submit" value="Search" onClick={handleClick}/>
                {/* </div> */}
            </form>
        </div>
    )
}