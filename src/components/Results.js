import React from "react";
import missingImg from "../img/img_missing.jpg"

export default function Results({data}) {
    return (
        <>
        <div className=" flex flex-row flex-wrap justify-center">
            {data.map((el, i) => {
                return (
                  <div key={i} className=" flex flex-row bg-white w-80 mx-1 my-2 rounded-lg">
                      <img className="mr-2 max-w-24 h-32 rounded-l-lg" src={el.img ? el.img :  missingImg} alt="book cover"></img> 
                    <div className="flex flex-col">
                      <h3 className="font-bold">{el.title}</h3>
                      {el.author[0] && <p>{el.author[0]}</p>}
                      {el.author[1] && <p>{el.author[1]}</p>}
                      {el.author[2] && <p>{el.author[2]}</p>}
                    </div>  
                  </div>
                )
            })}
        </div>
        </>
    )
}