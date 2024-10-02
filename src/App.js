import React, { useState } from 'react';
import './App.css';
import  Quote  from './components/Quote';
import SearchBar from './components/SearchBar';
import Results from './presentational/Results';
import Favorites from './presentational/Favorites';
import illustration1 from "./img/illustration1.svg"
import illustration2 from "./img/illustration2.svg"

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false);
  
  const handleShowFavoritesClick = (e) => {
    setShowFavorites(!showFavorites);
    if (!showFavorites) {
      e.target.innerHTML = "Hide ♡"
    } else {
      e.target.innerHTML = "Show ♡"
    }
  }

  return (
    <>
    <div className="max-h-full">
      <header className="flex w-2/3 mx-auto my-8 mt-10 text-center ">
        <img className="hidden h-32 ml-20 md:block aspect-square" src={illustration1} alt='illustration-one'></img>
        <div className='w-full'>
          <h1 className='mb-10 text-7xl' >The Good Reads</h1>
          <Quote />
        </div>
        <img className="hidden h-32 mr-20 md:block aspect-square" src={illustration2} alt='illustration-two'></img>
      </header>
      <div className='flex flex-col items-center justify-center md:justify-around md:flex-row'>
        <SearchBar data={data} setIsLoading={setIsLoading} setData={setData} />
        <button type='button' className='px-4 m-2 text-white border rounded-md w-36 h-fit bg-zinc-600' onClick={handleShowFavoritesClick}>Show ♡</button>
      </div>
      {showFavorites ? 
      <div className='min-h-fit'>
        <Favorites 
        data={data} 
        favorites={favorites} setFavorites={setFavorites} 
        isLoading={isLoading} setIsLoading={setIsLoading}
        />
      </div> 
      :
      <div className='min-h-fit'>
        <Results 
        data={data} 
        favorites={favorites} setFavorites={setFavorites} 
        isLoading={isLoading} setIsLoading={setIsLoading} 
        />
      </div> 
    }
    </div>
    </>
  );
}

export default App;
