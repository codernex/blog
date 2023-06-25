import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi";
interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const topic = [
    {
      name: "design",
    },
    {
      name: "development",
    },
    {
      name: "database",
    },
  ];
  return (
    <div className="border-b py-8">
      <div className="flex gap-x-8">
        <label
          className="flex h-10 flex-1 items-center gap-x-3 rounded-2xl border border-slate-700 px-3"
          htmlFor="search"
        >
          <IoSearchSharp />
          <input
            autoComplete="off"
            className="w-full focus:outline-none "
            id="search"
            placeholder="Search..."
          />
        </label>
        <div className="flex items-center">
          <h2>My Topics :</h2>
          <div className="flex gap-x-2">
            {topic.map((item, index) => {
              return (
                <button
                  className="h-10 rounded-2xl bg-slate-300 px-3 capitalize"
                  key={index}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2>Articles</h2>
        <button className="flex items-center gap-x-2 rounded-md border border-slate-700 px-3 py-2">
          Following
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
