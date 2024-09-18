import { useState } from "react";
import React from "react";

export default function SearchBar({data, setData}) {
    const [query, setQuery] = useState("");
    let results = [];

    const fetchData = async (query) => {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).catch((err) => console.error(err));
          return response.items
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const extractVolumeInfo = (obj) => {
        for (let i in obj) {
            const { title } = obj[i].volumeInfo;
            let { authors } = obj[i].volumeInfo === undefined ? "" : obj[i].volumeInfo ;
            const { smallThumbnail } = obj[i].volumeInfo.imageLinks === undefined ? "" : obj[i].volumeInfo.imageLinks
            console.log(smallThumbnail);
            results.push({
                "title" : title,
                "author" : authors ? authors : "",
                "img" : smallThumbnail 
            });
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (query === "") {
            alert("Please provide a title");
            return
        }
        const response = await fetchData(query);
        if (!response) {
            setData(["Not Found"]);     
        } else {
            extractVolumeInfo(response);
            setData(() => results);
        }
        setQuery("");
    }

    return ( 
        <div className="flex items-center flex-col my-6">
            <p className="p-4">Today I feel like reading...</p>
            <form method="get">
                <input id="search" type="text" name="q" value={query} onChange={(e) => setQuery(e.target.value)} required/>
                <input className="border border-1 border-black" type="submit" value="Search" onClick={handleClick}/>
            </form>
        </div>
    )
}