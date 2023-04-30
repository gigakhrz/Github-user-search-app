import { useState } from "react";
import { userInfo } from "./components/types";

import Header from "./components/Header";
import Search from "./components/search";
import Result from "./components/Result";

function App(): JSX.Element {
  const [blacktheme, setblackTheme] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("gigakhrz");
  const [user, setUser] = useState<userInfo | []>([]);
  const [result, setResult] = useState<boolean>(true);
  console.log(user);
  return (
    <div>
      <div
        className={` flex items-center flex-col gap-[35px] min-h-screen transition-all duration-500 px-6 pt-[31px] md:p-0 ${
          blacktheme ? "bg-[#141D2F] " : " bg-[#F6F8FF]"
        }`}
      >
        <Header setblackTheme={setblackTheme} blacktheme={blacktheme} />

        <Search blacktheme={blacktheme} setSearch={setSearch} result={result} />

        <Result
          blacktheme={blacktheme}
          search={search}
          user={user}
          setUser={setUser}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

export default App;
