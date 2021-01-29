import React, { useState, useEffect } from "react";
import "../Search/Search.css";

const Search = (props) => {
  const { employees } = props;
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    let firstNameEmployee =
      employee.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      let lastNameEmployee =
      employee.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      return firstNameEmployee || lastNameEmployee;
  });

  console.log(search);

  useEffect(() => {
    setArray(filteredEmployees);
    console.log(employees);
  }, [employees, search]);

  return (
    <div className="container mt-3">
      <div className="row">
        <h1>Search Employee Directory</h1>
        <input
          onChange={changeHandler}
          id="search"
          className="form-control"
          name="search"
          type="search"
        />
        <button className="btn btn-primary">Search</button>
        <table className="table">
          <thead>
            <tr>
              {/* option, shift, down-arrow to duplicate line*/}
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Cell</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {array.map((employee, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>
                  <img src={employee.picture.thumbnail} alt="employee" />
                </td>
                <td>{employee.name.title}</td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
