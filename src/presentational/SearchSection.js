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
      <div className="flex items-center justify-between lg:w-[80vw] w-full rounded-t-md m-auto bg-yellow-100">
        <button
          type="button"
          className="w-24 text-white rounded-md h-fit bg-zinc-600"
          onClick={handleShowFavoritesClick}
        >
          ♡
        </button>
        <SwitchList />
      </div>
    </div>
  );
}
