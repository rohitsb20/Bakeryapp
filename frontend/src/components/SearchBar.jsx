import {Search} from "lucide-react"

const SearchBar = () => {
  return (
    <div className="max-w-5xl mx-auto" >
      <form>
        <input
          type="text"
          className="input   focus:border-sky-500"
          aria-label="search" placeholder="Search products..."
        />
        <button className="relative" type="submit">
          <Search className="absolute right-1 -top-4.5" size={24} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar