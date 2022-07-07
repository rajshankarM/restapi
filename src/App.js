import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import SearchInput from "./Components/SearchInput";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SearchInput />}></Route>
        <Route path="/users/:id" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

function UserDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState({});

  const user = async () => {
    try {
      const data = await axios.get(`http://localhost:8800/users/${id}`);
      console.log(data.data.id);
      setPerson(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <div className="input">
      <h1 style={{ display: "inline" }}>Emp Id:{person.id}</h1>
      <br></br>
      <h1 style={{ display: "inline" }}>Name :{person.name}</h1>
      <br></br>
      <h1 style={{ display: "inline" }}>Age :{person.age}</h1>
    </div>
  );
}

export default App;
