import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import search from "../img/search.png";
import Loading from "./Loading";
import { PageContext, PageDispatchContext } from "../context/PagesContext";
import { SelectInputContext } from "../context/SelectInputContext";

export default function Results({
  data,
  isLoading,
  favorites,
  setIsLoading,
  setFavorites,
}) {
  const { page } = useContext(PageContext);
  const { elementsInPage } = useContext(PageContext);
  const isInputSelected = useContext(SelectInputContext);
  const [hasAnimationRun, setHasAnimationRun] = useState(false);
  const dispatch = useContext(PageDispatchContext);

  useEffect(() => {
    if (data.length) {
      dispatch({ type: "set", elements: data.slice(0, 20) });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isInputSelected === true) {
      setHasAnimationRun(true);
    }
  }, [hasAnimationRun]);

  if (isLoading) {
    return <Loading />;
  }

  const handleIncrementPage = () => {
    dispatch({
      type: "increment",
      elements: data.slice((page + 1) * 10, (page + 1) * 20),
    });
  };

  const handleDecrementPage = () => {
    if (page === 2) {
      dispatch({
        type: "decrement",
        elements: data.slice(0, 20),
      });
    } else {
      dispatch({
        type: "decrement",
        elements: data.slice((page - 1) * 10, (page - 1) * 20),
      });
    }
  };

  return (
    <>
      <div
        className={`${
          isInputSelected ? "min-h-72" : "min-h-56"
        } flex border border-slate-200 flex-row py-4 flex-wrap items-center justify-center lg:w-[80vw] rounded-b-md overflow-auto min-h-56 max-h-96 md:max-h-full display-results bg-teak dark:bg-cadet`}
      >
        {data.length !== 0 && (
          <div className="flex justify-around w-full">
            <button
              onClick={handleDecrementPage}
              disabled={page === 1}
            >{`<`}</button>
            <p>{page}</p>
            <button
              onClick={handleIncrementPage}
              disabled={page === data.length / 20}
            >{`>`}</button>
          </div>
        )}
        {data.length !== 0 ? (
          elementsInPage.map((element, i) => {
            return (
              <Card
                data={element}
                i={i}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            );
          })
        ) : (
          <div>
            <img
              className="h-20 mt-2"
              src={search}
              alt="no content to display"
            ></img>
            <p className="italic font-thin">Waiting to dive in</p>
          </div>
        )}
      </div>
    </>
  );
}
