import React, {useEffect} from "react";
import Card from "../components/Card";
import search from "../img/search.png";
import Loading from "./Loading";

export default function Results({data, isLoading, favorites, setIsLoading, setFavorites}) {

  useEffect(() => {
    setIsLoading(false)
  }, [data, setIsLoading])

  if (isLoading) {
    return <Loading />
  }

    return (
        <>
          <div className="flex flex-row flex-wrap items-center justify-center min-h-56 display-results">
            {data.length !== 0 && <h3 className="w-full my-2 text-2xl font-bold text-center">Search results</h3>}
          {data.length !== 0 ? data.map((data, i) => {
             return <Card data={data} i={i} favorites={favorites} setFavorites={setFavorites} />
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