import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="flex align-center bg-[#e9e9e9] rounded-sm p-[3px] mb-[1.5em] dark:text-black">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        className="border-none bg-transparent w-[100%] focus:outline-none"
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
