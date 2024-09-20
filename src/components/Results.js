import React from "react";
import missingImg from "../img/img_missing.jpg"
import search from "../img/search.svg";

export default function Results({data}) {
    console.log(data)
    return (
        <>
        <div className=" flex flex-row flex-wrap justify-center min-h-64">
            {data.length !== 0 ? data.map((el, i) => {
                return (
                  <div key={i} className=" flex flex-row bg-white w-80 mx-1 my-2 rounded-lg">
                      <img className="mr-2 max-w-24 h-32 aspect-square rounded-l-lg my-auto" src={el.img ? el.img :  missingImg} alt="book cover"></img> 
                    <div className="flex flex-col justify-between overflow-hidden w-full">
                      <div>
                        <h3 className="font-bold line-clamp-2 ">{el.title}</h3>
                        {el.author[0] && <p>{el.author[0]}</p>}
                        {el.author[1] && <p>{el.author[1]}</p>}
                        {el.author[2] && <p>{el.author[2]}</p>}
                      </div>  
                      <div className="flex justify-center">
                        <a className=" border bg-zinc-600 w-fit rounded-md text-white px-2" href={el.info} rel="noopener noreferrer" target="_blank">More</a>
                      </div>  
                    </div>  
                  </div>
                )
            }) 
            :
            <div> 
              <img className=" mt-10 h-20" src={search} alt="no content to display"></img>
              <p className=" italic font-thin">Waiting to dive in</p>
            </div>
            }
        </div>
        </>
    )
}