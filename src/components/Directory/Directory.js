import React, { useState, useEffect } from "react";
import "../Directory/Directory.css";
import { FaSortAlphaDown } from "react-icons/fa";


const Directory = (props) => {
  const { employees } = props;
  const [array, setArray] = useState([]);
  const [sortType, setSortType] = useState("ASC");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setArray(filteredEmployees);
  }, [employees, search]);

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

  const sortLastName = () => {
    switch (sortType) {
      case "ASC":
        setArray(sortDescending());
        setSortType("DESC");
        break;
      case "DESC":
        setArray(sortAscending());
        setSortType("ASC");
        break;
      default:
        setArray(sortAscending());
    }
  };

  const sortAscending = () => {
    return employees
      .slice()
      .sort((a, b) =>
        a.name.last.toUpperCase() < b.name.last.toUpperCase() ? -1 : 1
      );
  };

  const sortDescending = () => {
    return employees
      .slice()
      .sort((a, b) =>
        a.name.last.toUpperCase() > b.name.last.toUpperCase() ? -1 : 1
      );
  };

  return (
    <div>
      <div className="container mt-3">
      <div className="row">
      <h1>Search Employee Directory</h1>
        <input
          onChange={changeHandler}
          id="search"
          className="form-control"
          name="search"
          type="search"
          placeholder='search for name'
        />
        <button className="btn btn-primary">Search</button>
    <div className="container mt-3" id="directory">
      <br></br>
      <br></br>
      <br></br>

      <h1>Employee Directory</h1>
      <table className="table">
      <thead>
        <tr>
          {/* option, shift, down-arrow to duplicate line*/}
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last<FaSortAlphaDown onClick={sortLastName} className='directory__icon' /></th>
          <th scope="col">Cell</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {array.map((employee, index) => (
          <tr key={index}>
            <th scope="row">
              {index}
            </th>
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
    </div>
    </div>
  );
};

export default Directory;
