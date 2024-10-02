import React, {useEffect} from "react";
import Card from "../components/Card";
import Loading from "./Loading";

export default function Favorites({data, favorites, isLoading, setIsLoading}) {

  useEffect(() => {
    setIsLoading(false)
  }, [data, setIsLoading])

  if (isLoading) {
    return <Loading />
  }

    return (
        <>
          <div className="flex flex-row flex-wrap items-center justify-center min-h-56 display-results">
          {favorites.length !== 0 ? favorites.map((data, i) => {
             return <Card data={data} i={i}/>
            }) 
            : 
            <div> 
              <p className="italic font-thin">You don't have favorites yet!</p>
            </div>
          }
          </div>
        </>
    )
}