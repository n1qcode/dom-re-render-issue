import { useState } from "react";

interface IUseSearchImitation {
  search: string;
  searchHandle: (val: string) => void;
}

export interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useSearchImitation = (props: IUseSearchImitation): [string, IData[]] => {
  const { search, searchHandle } = props;

  const [someData, setSomeData] = useState<IData[]>([]);

  const getSomeData = async () => {
    let data = null;

    data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .catch((error) => console.log("Error: ", error));

    searchHandle("");

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

  return [issueData, someData];
};

export default useSearchImitation;
