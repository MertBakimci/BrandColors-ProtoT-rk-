import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import Download from "./Download";
import MainContext from "./MainContext";

function Search(params) {
  const { search, setSearch,selectedBrands } = useContext(MainContext);

  return (
    <div className="search">
      <div className="icon center">
        <GoSearch />
      </div>

      <div className="inputText">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Color Search"
      />
      </div>
       <div className={`download center ${selectedBrands.length > 0 ? "opacity transformBottom" : "reTransformBottom"}`} >
            <Download/>
            </div>
    </div>
  );
}

export default Search;
