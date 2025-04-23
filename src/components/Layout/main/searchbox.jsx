// SearchBox.jsx
import { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    // console.log("Searching for:", searchTerm);
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <section className="space-y-4 md:col-span-1">
      <h2 className="text-xl font-semibold">Search Schools</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <label htmlFor="search" className="block font-semibold">
          Search by School Name or ID
        </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type and press Enter"
          className="w-full rounded-lg border px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </form>
    </section>
  );
}
export default SearchBox;
