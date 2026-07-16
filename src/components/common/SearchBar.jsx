import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
  return (
    <div className="mt-8">
      <div className="relative">
        <MagnifyingGlass
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          type="text"
          placeholder="Search Workouts..."
          className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-text-primary placeholder:text-text-secondary outline-none focus:border-primary transition-colors"
        />
      </div>
    </div>
  );
};

export default SearchBar;