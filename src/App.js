import React from "react";
import "./App.css";
import "./index.css"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Header />
        <Route exact path="/" component={Tasks} />
        <Route path="/update-task/:task_id" component={UpdateTask} />
      </div>
    </BrowserRouter>
  );
}

export default App;
