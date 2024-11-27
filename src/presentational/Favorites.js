import React, { useContext } from "react";
import Card from "../components/Card";
import Loading from "../presentational/Loading";
import { SelectInputContext } from "../context/SelectInputContext";
import { PageContext } from "../context/PagesContext";
import ChangePageButton from "../components/ChangePageButton";

export default function Favorites({ favorites, setFavorites, isLoading }) {
  const { elementsInPage } = useContext(PageContext);
  const isInputSelected = useContext(SelectInputContext);

  if (isLoading) {
    return <Loading />;
  }

  const handleClearAll = () => {
    localStorage.setItem("favorites", JSON.stringify([]));
    setFavorites([]);
  };

  return (
    <>
      <div
        className={`${
          isInputSelected ? "md:min-h-72" : "md:min-h-56"
        } flex border border-slate-200 flex-row flex-wrap items-center justify-center lg:w-[80vw] min-h-56 display-results dark:bg-cadet`}
      >
        <h3 className="w-full my-2 text-2xl font-light text-center ">
          Favorites
        </h3>
        <ChangePageButton data={favorites} />
        {favorites.length !== 0 ? (
          elementsInPage.map((data, i) => {
            return (
              <Card
                data={data}
                i={i}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            );
          })
        ) : (
          <div>
            <p className="italic font-thin">You don't have favorites yet!</p>
          </div>
        )}
        <ChangePageButton data={favorites} />
        <div className="w-full text-center">
          {favorites.length !== 0 && (
            <button
              className="px-4 m-2 text-white rounded-md w-36 h-fit bg-zinc-600"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </>
  );
}
