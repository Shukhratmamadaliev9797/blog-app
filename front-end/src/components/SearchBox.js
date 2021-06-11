import React from "react";

export default function SearchBox() {
  return (
    <form className="search">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}
