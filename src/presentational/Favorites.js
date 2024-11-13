import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import Loading from "../presentational/Loading";
import { SelectInputContext } from "../context/SelectInputContext";
import { PageContext, PageDispatchContext } from "../context/PagesContext";

export default function Favorites({ favorites, setFavorites, isLoading }) {
  const { page } = useContext(PageContext);
  const { elementsInPage } = useContext(PageContext);
  const dispatch = useContext(PageDispatchContext);
  const isInputSelected = useContext(SelectInputContext);

  useEffect(() => {
    if (favorites.length) {
      dispatch({ type: "set", elements: favorites.slice(0, 20) });
    }
  }, [favorites, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const handleIncrementPage = () => {
    dispatch({
      type: "increment",
      elements: favorites.slice((page + 1) * 10, (page + 1) * 20),
    });
  };

  const handleDecrementPage = () => {
    if (page === 2) {
      dispatch({
        type: "decrement",
        elements: favorites.slice(0, 20),
      });
    } else {
      dispatch({
        type: "decrement",
        elements: favorites.slice((page - 1) * 10, (page - 1) * 20),
      });
    }
  };

  const handleClearAll = () => {
    localStorage.setItem("favorites", JSON.stringify([]));
    setFavorites([]);
  };

  return (
    <>
      <div
        className={`${
          isInputSelected ? "min-h-72" : "min-h-56"
        } flex border border-slate-200 flex-row flex-wrap items-center justify-center lg:w-[80vw] min-h-56 display-results dark:bg-cadet`}
      >
        <h3 className="w-full my-2 text-2xl font-light text-center ">
          Favorites
        </h3>
        {favorites.length !== 0 && (
          <div className="flex justify-around w-full">
            <button
              onClick={handleDecrementPage}
              disabled={page === 1}
            >{`<`}</button>
            <p>{page}</p>
            <button
              onClick={handleIncrementPage}
              disabled={page === Math.ceil(favorites.length / 20)}
            >{`>`}</button>
          </div>
        )}
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
