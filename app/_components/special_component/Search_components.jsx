import MultipleSelectCheckmarks from './checkbox';

function SearchInput() {
  return (
    <div itemscope="" itemtype="http://schema.org/SearchAction" className="sm:w-full mx-auto sm:mx-0 text-justify bg-[#ebebeb] bg-opacity-80 p-4 rounded-xl">
      <div className="flex flex-col sm:flex-row items-center justify-evenly">
        <div className="relative flex-grow mb-4 sm:mb-0">
          <input
            className="h-[50px] w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-neutral-700 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Area, Compound, Real Estate Developer"
            itemprop="query-input"
          />
          <div className="absolute top-0 left-0 flex items-center pl-2">
            {/* Icon can be added here if needed */}
          </div>
        </div>
        
        <MultipleSelectCheckmarks />
        <MultipleSelectCheckmarks />
        <MultipleSelectCheckmarks />

        <button
          className="h-[50px] rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          itemprop="search"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
