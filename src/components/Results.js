import React from "react";
import Card from "./Card";
import search from "../img/search.svg";

export default function Results({data}) {
    return (
        <>
          <div className="flex flex-row flex-wrap justify-center min-h-56">
          {data.length !== 0 ? data.map((data, i) => {
             return <Card data={data} i={i}/>
            }) 
            : 
            <div> 
              <img className="h-20 mt-2" src={search} alt="no content to display"></img>
              <p className="italic font-thin">Waiting to dive in</p>
            </div>
          }
          </div>
        </>
    )
}