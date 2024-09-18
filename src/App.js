import React, { useState } from 'react';
import './App.css';
import  Quote  from './components/Quote';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [data, setData] = useState([])

  return (
    <div className=" h-screen bg-slate-400">
      <header className=" h-60 text-center m-8">
        <h1 className=' text-3xl my-10' >The Good Reads</h1>
        <Quote />
      </header>
      <Results data={data} />
      <SearchBar data={data} setData={setData} />
    </div>
  );
}

export default App;
