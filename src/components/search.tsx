interface MeoreRagaca {
  setSearch: (search: string) => void;
  blacktheme: Boolean;
}

const Search = ({ blacktheme, setSearch }: MeoreRagaca): JSX.Element => {
  return (
    <div>
      <img src={require("../assets/icon-search.svg")} alt="search icon" />
      <input
        type="search"
        id="search"
        placeholder="Search GitHub username..."
        defaultValue="gigakhrz"
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
