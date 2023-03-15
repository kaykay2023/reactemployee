import React from "react";

function EmployeeListItem({
  image,
  empName,
  position,
  index,
  returnedEmployeeIndex,
}) {
  return (
    <div
      className="employe-item"
      onClick={() => {
        returnedEmployeeIndex(index);
      }}
    >
      <div className="leftSide">
        <img src={image} className="image-emp" alt="" />
      </div>

      <div className="rightSide">
        <div className="name-emp">{empName}</div>
        <div className="position-emp">{position}</div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
