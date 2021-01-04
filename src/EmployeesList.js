import React, { useState } from "react";
import EmployeeComp from "./EmployeeComp";
import male from "./media/Q9qFt3m.png";
import female from "./media/ebHfuth.png";
import female1 from "./media/TUhCrsY.png";

function EmployeesList() {
  function handleAddEmployee() {
    setEmployees((employees) => {
      return [
        ...employees,
        {
          name: "D",
          email: "dd@dd.dd",
          phone: "0707444444",
          skills: "HTML, PHP",
          avatar: female1,
        },
      ];
    });
  }

  function HandleRemoveEmployee(e) {
    const removedEmployee = e.target.getAttribute("name");
    setEmployees((employees) => {
      return employees.filter((employee) => employee.name !== removedEmployee);
    });
  }

  const [employees, setEmployees] = useState([
    {
      name: "A",
      email: "aa@aa.aa",
      phone: "0707000000",
      skills: "HTML, PHP",
      avatar: female,
    },
    {
      name: "B",
      email: "bb@bb.bb",
      phone: "0707111111",
      skills: "HTML, Javascript",
      avatar: male,
    },
    {
      name: "C",
      email: "cc@cc.cc",
      phone: "0707222222",
      skills: "HTML, CSS",
      avatar: male,
    },
  ]);

  return (
    <>
      <div className="title">
        <h1>Employees List</h1>
      </div>
      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <div id="root"></div>
      <div className="list">
        {employees.map((employee) => {
          return (
            <div key={employee.name}>
              <EmployeeComp
                EmployeesData={employee}
                removeEmployee={HandleRemoveEmployee}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EmployeesList;
