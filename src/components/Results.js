import React from "react";
import missingImg from "../img/img_missing.jpg"
import search from "../img/search.svg";

export default function Results({data}) {
    console.log(data)
    return (
        <>
        <div className="flex flex-row flex-wrap justify-center min-h-56">
            {data.length !== 0 ? data.map((el, i) => {
                return (
                  <div key={i} className="flex flex-row mx-1 my-2 bg-white rounded-lg w-80">
                      <a href={el.info}>
                        <img className="h-32 my-auto mr-2 rounded-l-lg max-w-24 aspect-square" src={el.img ? el.img :  missingImg} alt="book cover"></img> 
                      </a>
                    <div className="flex flex-col justify-between w-full overflow-hidden">
                      <div>
                        <a href={el.info}>
                          <h3 className="font-bold line-clamp-2 ">{el.title}</h3>
                          {el.author[0] && <p>{el.author[0]}</p>}
                          {el.author[1] && <p>{el.author[1]}</p>}
                          {el.author[2] && <p>{el.author[2]}</p>}
                        </a>
                      </div>  
                      <div className="flex justify-center">
                        <a className="px-2 text-white border rounded-md bg-zinc-600 w-fit" href={el.info} rel="noopener noreferrer" target="_blank">More</a>
                      </div>  
                    </div>  
                  </div>
                )
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