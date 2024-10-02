import React, {useEffect} from "react";
import Card from "../components/Card";
import Loading from "../presentational/Loading";

export default function Favorites({data, favorites, setFavorites, isLoading, setIsLoading}) {
  
  useEffect(() => {
    setIsLoading(false)
  }, [data, setIsLoading])

  if (isLoading) {
    return <Loading />
  }

  const handleClearAll = () => {
    setFavorites([])
  }

    return (
        <>
          <div className="flex flex-row flex-wrap items-center justify-center min-h-56 display-results">
          {favorites.length !== 0 ? favorites.map((data, i) => {
             return (
             <Card data={data} i={i} setFavorites={setFavorites} state={true}/>
             )
            })
            : 
            <div> 
              <p className="italic font-thin">You don't have favorites yet!</p>
            </div>
          }
            <div className="w-full text-center">
              {favorites.length !== 0 &&  <button className="px-4 m-2 text-white border rounded-md w-36 h-fit bg-zinc-600"
              onClick={handleClearAll} >Clear All</button> }
            </div>
          </div>
        </>
    )
}