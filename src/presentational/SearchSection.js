import SearchBar from "../components/SearchBar";
import SwitchList from "../components/SwitchList";

export default function SearchSection({
  setData,
  setIsLoading,
  setShowFavorites,
  showFavorites,
}) {
  const handleShowFavoritesClick = (e) => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center m-auto md:flex-row">
        <SearchBar
          setShowFavorites={setShowFavorites}
          setIsLoading={setIsLoading}
          setData={setData}
        />
      </div>
      <div className="flex items-center justify-end lg:w-[80vw] w-full border-slate-200 border rounded-t-md m-auto bg-pearl dark:bg-black ">
        <button
          type="button"
          className={`w-24 hover:bg-cadet dark:hover:bg-iron text-white mx-2 rounded-md h-fit bg-zinc-600 ${
            showFavorites ? "top-[2px] shadow-none bg-zinc-800" : ""
          }`}
          onClick={handleShowFavoritesClick}
        >
          ♡
        </button>
        <SwitchList />
      </div>
    </div>
  );
}
