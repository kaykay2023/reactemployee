import React from "react";
import EmployeeListItem from "./EmployeeListItem";
function EmployeeList({ listOfEmployees, returnedEmployeeIndex }) {
  return (
    <div className="employee-list">
      {listOfEmployees.map((emp, index) => (
        <EmployeeListItem
          returnedEmployeeIndex={returnedEmployeeIndex}
          index={emp.id}
          key={index}
          image={emp.image}
          empName={emp.name}
          position={emp.position}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
