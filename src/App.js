import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Directory from "./components/Directory/Directory";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        setEmployees(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router className="App">
      <Switch>
        <Route exact path="/HW-14-Axios-Employee">
          <Directory employees={employees} setEmployees={setEmployees} />
        </Route>
        <Route exact path="/">
          <Directory employees={employees} setEmployees={setEmployees} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
