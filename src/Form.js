function Form(props) {
  return (
    <form id="employeeForm">
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" required />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" required />
      <br />
      <label htmlFor="phone">Phone:</label>
      <br />
      <input type="tel" id="phone" name="phone" required />
      <br />
      <label htmlFor="skills">Skills:</label>
      <br />
      <input type="text" id="skills" name="skills" required />
      <button
        // type="button"
        onClick={() => {
          props.handleAddEmployee();
        }}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
