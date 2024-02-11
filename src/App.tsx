import { useState } from "react";
import "./App.css";
import IssueElem from "./components/IssueElem/IssueElem";
import List from "./components/List/List";
import Search from "./components/Search/Search";

export interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [search, setSearch] = useState("");
  const [someData, setSomeData] = useState<IData[]>([]);

  const searchHandle = (val: string) => {
    setSearch(val);
  };

  const getSomeData = async () => {
    let data = null;

    data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .catch((error) => console.log("Error: ", error));

    setSearch("");

    if (Array.isArray(data)) {
      setSomeData(data);
    }
  };

  if (search === "1") {
    getSomeData();
  }

  let issueData = "";

  if (someData.length) {
    issueData = someData
      .map((el) => el.title)
      .slice(0, 20)
      .join(", ");
  }

  return (
    <div className="issue">
      <Search search={search} onSearch={searchHandle} />
      <IssueElem data={issueData} />
      <List data={someData} />
    </div>
  );
}

export default App;
