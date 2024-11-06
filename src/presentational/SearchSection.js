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
    <div className="flex flex-col items-center justify-center md:justify-around md:flex-row">
      <SearchBar
        setShowFavorites={setShowFavorites}
        setIsLoading={setIsLoading}
        setData={setData}
      />
      <button
        type="button"
        className="w-24 m-2 text-white rounded-md h-fit bg-zinc-600"
        onClick={handleShowFavoritesClick}
      >
        ♡
      </button>
      <SwitchList />
    </div>
  );
}
