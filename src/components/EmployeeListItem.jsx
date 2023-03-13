import React from 'react'

function EmployeeListItem(props) {


  return (

    <div className='staffBox'>

     <h3>{props.individualWorker.name} </h3> 
     <h5>{props.individualWorker.position} </h5> 
      
      </div>
  )
}

export default EmployeeListItem