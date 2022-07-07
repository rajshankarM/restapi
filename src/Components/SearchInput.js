import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [id, setId] = useState();
  const Navigate = useNavigate();
  console.log(id);

  return (
    <div>
      <input
        type="text"
        name="userid"
        className="search"
        placeholder="Enter UserId"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => Navigate(`/users/${id}`)} className="btn">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
