import { useState } from "react";

import Header from "./components/Header";
import Search from "./components/search";

function App(): JSX.Element {
  const [blacktheme, setblackTheme] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("gigakhrz");
  return (
    <div>
      <div>
        <Header setblackTheme={setblackTheme} blacktheme={blacktheme} />
        <div>
          <Search blacktheme={blacktheme} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;
