import { useState } from "react";
import React from "react";

export default function SearchBar({data, setData}) {
    const [query, setQuery] = useState("");

    const fetchData = async (query) => {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
          }
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetchData(query);
        setData(() => [response]);
    }

    return ( 
        <div className="flex items-center flex-col">
            <p className="p-4">Today I feel like reading...</p>
            <form method="get">
                <input id="search" type="text" name="q" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <input className="border border-1 border-black" type="submit" value="Search" onClick={handleClick}/>
            </form>
        </div>
    )
}