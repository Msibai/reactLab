function EmployeeComp(props) {
  return (
    <div className="EmployeeDiv">
      <div className="avatar">
          <img src={props.EmployeesData.avatar} alt="avatar"></img>
      </div>
      <div className="employeeInfo">
        <h1>{props.EmployeesData.name}</h1>
        <p>Email: {props.EmployeesData.email}</p>
        <p>Phone: {props.EmployeesData.phone}</p>
        <p>Skills: {props.EmployeesData.skills}</p>
      </div>
    </div>
  );
}

export default EmployeeComp;
