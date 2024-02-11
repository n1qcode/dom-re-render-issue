import { FC } from "react";

interface ISearch {
  search: string;
  onSearch: (arg: string) => void;
}

const Search: FC<ISearch> = ({ search, onSearch }) => {
  return (
    <div>
      <input value={search} onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};

export default Search;
