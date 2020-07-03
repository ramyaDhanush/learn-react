import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="App"></div>
      <Greet name="Ramya"></Greet>
      <Greet name="Person 2"></Greet>

      <Welcome />
    </>
  );
}

export default App;
