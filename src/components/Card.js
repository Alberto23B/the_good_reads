import React from "react";
import missingImg from "../img/img_missing.jpg"

export default function Card({data, i, favorites, setFavorites}) {

   const isFavorite = favorites.some((fav) => fav.title === data.title);

    const handleClickFavorites = (data) => {
      setFavorites((prev) => {
        return [...prev, data]
      });
    }

    const handleRemoveFavorites = (data) => {
      setFavorites((prev) => [...prev].filter((fav) => fav.title !== data.title))
    }


    return (
              <div key={i} className="flex flex-row mx-1 my-2 bg-white rounded-lg w-80">
                  <a href={data.info}>
                    <img className="h-32 my-auto mr-2 rounded-l-lg max-w-24 aspect-square" src={data.img ? data.img :  missingImg} alt="book cover"></img> 
                  </a>
                <div className="flex flex-col justify-between w-full overflow-hidden">
                  <div>
                    <a href={data.info}>
                      <h3 className="font-bold line-clamp-2 ">{data.title}</h3>
                      {data.author[0] && <p>{data.author[0]}</p>}
                      {data.author[1] && <p>{data.author[1]}</p>}
                      {data.author[2] && <p>{data.author[2]}</p>}
                    </a>
                  </div>  
                  <div className="flex justify-center">
                    <a  href={data.info} rel="noopener noreferrer" target="_blank">
                      <button className="px-2 text-white border rounded-md bg-zinc-600 w-fit card-button">
                        More
                      </button>
                      </a>
                    <button className="px-2 mx-2 text-white border rounded-md bg-zinc-600 w-fit card-button" 
                    type="button" onClick={isFavorite ? () => handleRemoveFavorites(data) : () => handleClickFavorites(data)}>
                      {isFavorite ? "X" : "♡"}
                    </button>
                  </div>  
                </div>  
              </div>
            )
}