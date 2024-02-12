import { useRef, useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import useSearchImitation from "./hooks/useSearchImitation";
import FlipRafIssue from "./components/Issue/FlipRafIssue/FlipRafIssue";
import useFlipRaf from "./hooks/useFlipRaf";

function App() {
  const [search, setSearch] = useState("");
  const topBlockRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const searchHandle = (val: string) => {
    setSearch(val);
  };

  const [issueData, someData] = useSearchImitation({ search, searchHandle });
  const { isExpanded, toggleExpand } = useFlipRaf({
    topBlockEl: topBlockRef.current,
    listEl: listRef.current,
  });

  return (
    <div className="issue">
      <Search search={search} onSearch={searchHandle} />
      <FlipRafIssue
        data={issueData}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
        ref={topBlockRef}
      />
      <List data={someData} ref={listRef} />
    </div>
  );
}

export default App;
