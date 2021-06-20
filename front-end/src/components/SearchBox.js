import React, { useState } from "react";

export default function SearchBox(props) {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/title/${title}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search..."
        name="q"
        id="q"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
