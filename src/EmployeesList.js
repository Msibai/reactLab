import React, { useState } from "react";
import EmployeeComp from "./EmployeeComp";
import Form from "./Form";
import male from "./media/Q9qFt3m.png";
import female from "./media/ebHfuth.png";
import female1 from "./media/TUhCrsY.png";

function EmployeesList() {
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
  const [form, setForm] = useState(false);

  function handleForm() {
    setForm((form) => {
      return !form;
    });
  }

  function handleAddEmployee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    // const avatar = document.getElementById("avatar").value;

    setEmployees((employees) => {
      return [
        ...employees,
        {
          name: name,
          email: email,
          phone: phone,
          skills: skills,
          avatar: female1,
        },
      ];
    });
    handleForm();
    document.getElementById("employeeForm").reset();
  }

  function HandleRemoveEmployee(e) {
    const removedEmployee = e.target.getAttribute("name");
    setEmployees((employees) => {
      return employees.filter((employee) => employee.name !== removedEmployee);
    });
  }

  return (
    <>
      <div className="title">
        <h1>Employees List</h1>
      </div>
      <button className="button" onClick={handleForm}>
        Add Employee
      </button>
      {form === true ? (
        <Form handleAddEmployee={handleAddEmployee}></Form>
      ) : (
        <div></div>
      )}
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
