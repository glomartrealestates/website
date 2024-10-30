import Dropdown from "./Dropdown";
import SearchButton from "./SearchButton";
function SearchInput() {
  return (
    <div className="flex flex-wrap justify-between bg-white p-4 gap-4 rounded-lg shadow-lg text-[#222]">
      <Dropdown placeholder="Area, Compound, Real Estate Developer"  style={{ width: "200px" }} className="mb-4"/>
      <Dropdown placeholder="Property Types" className="dropdown-small mb-4" />
      <Dropdown placeholder="Bedrooms" className="dropdown-small mb-4" />
      <Dropdown placeholder="Price" className="dropdown-small mb-4" />
      <SearchButton className="mt-4 w-full sm:w-auto" />
    </div>
  );
}

export default SearchInput;
