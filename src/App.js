import React, { useState } from "react";
import "./App.css";
import Quote from "./components/Quote";
import Results from "./presentational/Results";
import Favorites from "./presentational/Favorites";
import Nav from "./presentational/Nav";
import ToggleTheme from "./components/ToggleTheme";
import SearchSection from "./presentational/SearchSection";
import { SelectInputContextProvider } from "./context/SelectInputContext";
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
    <SelectInputContextProvider>
      <ThemeContextProvider>
        <DisplayContextProvider>
          <PageContextProvider>
            <div
              className={`bg-[#E2EEF0] dark:bg-cool dark:text-stone-300
            ${data.length && !showFavorites ? "h-full" : "h-[100vh]"}`}
            >
              <Nav>
                <ToggleTheme />
              </Nav>
              <header className="flex w-5/6 mx-auto mt-4 text-center">
                <div className="w-full">
                  <h1 className="mb-8 font-semibold text-8xl font-lcd">
                    The Good Reads
                  </h1>
                </div>
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
    </SelectInputContextProvider>
  );
}

export default App;
