import React from "react";
import Header from "./Header";

function EmployeePage({ selectedEmployee }) {
  return (
    <div className="employee-page">
      <Header value="Employee" />
      <div>{selectedEmployee?.name}</div>
    </div>
  );
}

export default EmployeePage;
