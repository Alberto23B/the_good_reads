import React, { useState } from 'react';
import './App.css';
import  Quote  from './components/Quote';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import illustration1 from "./img/illustration1.svg"
import illustration2 from "./img/illustration2.svg"

function App() {
  const [data, setData] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
    <div className="max-h-full">
      <header className="flex w-full my-8 mt-10 text-center ">
        <img className="hidden h-32 ml-20 md:block aspect-square" src={illustration1} alt='illustration-one'></img>
        <div className='w-full'>
          <h1 className='mb-10 text-7xl' >The Good Reads</h1>
          <Quote />
        </div>
        <img className="hidden h-32 mr-20 md:block aspect-square" src={illustration2} alt='illustration-two'></img>
      </header>
      <div className='min-h-fit'>
        <SearchBar data={data} setData={setData} />
        <Results data={data} favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>
      </div>
      <p className='float-right mr-4 font-thin'>Made with ❤️ by Alberto </p>
    </div>
    </>
  );
}

export default App;
