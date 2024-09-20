import React, { useState } from 'react';
import './App.css';
import  Quote  from './components/Quote';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [data, setData] = useState([])

  return (
    <>
    <div className=" max-h-screen mt-10">
      <header className=" text-center m-8 mt-0">
        <h1 className=' text-7xl mb-10' >The Good Reads</h1>
        <Quote />
      </header>
      <div className=' min-h-fit'>
        <SearchBar data={data} setData={setData} />
        <Results data={data} />
      </div>
      <p className='font-thin mr-4 float-right'>Made with ❤️ by Alberto </p>
    </div>
    </>
  );
}

export default App;
