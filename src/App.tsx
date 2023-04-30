import { useState } from "react";

import Header from "./components/Header";
import Search from "./components/search";
import Result from "./components/Result";

function App(): JSX.Element {
  const [blacktheme, setblackTheme] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("gigakhrz");
  console.log(search);
  return (
    <div>
      <div
        className={` flex items-center flex-col gap-[35px] min-h-screen transition-all duration-500 px-6 pt-[31px] md:p-0 ${
          blacktheme ? "bg-[#141D2F] " : " bg-[#F6F8FF]"
        }`}
      >
        <Header setblackTheme={setblackTheme} blacktheme={blacktheme} />

        <Search blacktheme={blacktheme} setSearch={setSearch} />

        <Result blacktheme={blacktheme} />
      </div>
    </div>
  );
}

export default App;
