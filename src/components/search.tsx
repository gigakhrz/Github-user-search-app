import SearchIcon from "../assets/icon-search.svg";
import "../style.css";

interface SearchProps {
  setSearch: (search: string) => void;
  blacktheme: Boolean;
  result: boolean;
}

const Search = ({
  blacktheme,
  setSearch,
  result,
}: SearchProps): JSX.Element => {
  const inputValue = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <form
      onSubmit={inputValue}
      className={`relative box w-full flex items-center justify-center gap-2 py-[7px] pr-[7px] pl-[16px] rounded-[15px]  md:max-w-[573px] md:gap-[27px] md:pl-[36px] md:py-[9.5px] md:mr-[10px]  lg:max-w-[730px]  ${
        blacktheme ? "bg-[#1E2A47]" : "bg-[white]"
      }`}
    >
      <img src={SearchIcon} />
      <input
        className={`w-full border-none outline-none font-mono font-normal text-[11px] leading-[25px] cursor-pointer bg-transparent md:text-[18px]
        placeholder: ${
          blacktheme
            ? "text-white placeholder-white"
            : "text-[#4B6A9B] placeholder-[#4B6A9B]"
        } `}
        type="search"
        id="search"
        placeholder="Search GitHub username..."
        defaultValue="gigakhrz"
      />

      <p
        className={`absolute right-24 translate-y-1/5 text-[#F74646] font-bold text-[15px] ${
          result ? "hidden" : "block"
        }`}
      >
        No results
      </p>
      <button
        type="submit"
        className={`min-w-[84px] h-[46px] bg-[#0079ff] rounded-[15px] border-none font-bold text-[14px] 
        leading-[21px] text-center text-[#fff] hover:bg-[#60abff] hover:cursor-pointer`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
