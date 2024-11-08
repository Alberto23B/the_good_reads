import React, { useState } from "react";
import "./App.css";
import Quote from "./components/Quote";
import Results from "./presentational/Results";
import Favorites from "./presentational/Favorites";
import SearchSection from "./presentational/SearchSection";
import illustration1 from "./img/illustration1.svg";
import illustration2 from "./img/illustration2.svg";
import { DisplayContextProvider } from "./context/DisplayContext";
import { PageContextProvider } from "./context/PagesContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const favoritesStorage = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const [favorites, setFavorites] = useState(favoritesStorage);
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <ThemeContextProvider>
      <DisplayContextProvider>
        <PageContextProvider>
          <div className="max-h-full">
            <header className="flex w-5/6 mx-auto my-2 mt-10 text-center">
              <img
                className="hidden h-32 ml-20 md:block aspect-square"
                src={illustration1}
                alt="illustration-one"
              ></img>
              <div className="w-full">
                <h1 className="mb-10 text-7xl font-lcd">The Good Reads</h1>
              </div>
              <img
                className="hidden h-32 mr-20 md:block aspect-square"
                src={illustration2}
                alt="illustration-two"
              ></img>
            </header>
            <Quote />
            <SearchSection
              setData={setData}
              setIsLoading={setIsLoading}
              setShowFavorites={setShowFavorites}
              showFavorites={showFavorites}
            />
            {showFavorites ? (
              <div className="min-h-fit">
                <Favorites
                  data={data}
                  setShowFavorites={setShowFavorites}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            ) : (
              <div className="min-h-fit">
                <Results
                  data={data}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            )}
          </div>
        </PageContextProvider>
      </DisplayContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
