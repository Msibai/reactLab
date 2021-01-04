function EmployeeComp(props) {
  return (
    <div className="EmployeeDiv">
      <div className="avatar">
        <img
          className="avatar"
          src={props.EmployeesData.avatar}
          alt="avatar"
        ></img>
      </div>
      <div className="employeeInfo">
        <h1>{props.EmployeesData.name}</h1>
        <p>Email: {props.EmployeesData.email}</p>
        <p>Phone: {props.EmployeesData.phone}</p>
        <p>Skills: {props.EmployeesData.skills}</p>
        <button
          name={props.EmployeesData.name}
          className="button"
          onClick={props.removeEmployee}
        >
          Remove Employee
        </button>
      </div>
    </div>
  );
}

export default EmployeeComp;
