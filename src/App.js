import React from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="main-container container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
