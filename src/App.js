import React, { useState } from 'react';
import './App.css';
import  Quote  from './components/Quote';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [data, setData] = useState([])

  return (
    <div className=" h-screen bg-slate-400">
      <header className=" text-center m-8">
        <h1 className=' text-7xl my-10' >The Good Reads</h1>
        <Quote />
      </header>
      <SearchBar data={data} setData={setData} />
      <Results data={data} />
    </div>
  );
}

export default App;
