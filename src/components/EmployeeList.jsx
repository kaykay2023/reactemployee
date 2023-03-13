import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {
  return (

    <div>

<EmployeeListItem individualWorker={props.workers.james}/>
      <EmployeeListItem individualWorker={props.workers.julie}/>
      <EmployeeListItem individualWorker={props.workers.eugene}/>
      <EmployeeListItem individualWorker={props.workers.john}/>
      <EmployeeListItem individualWorker={props.workers.ray}/>
      <EmployeeListItem individualWorker={props.workers.paul}/>
    </div>

  )
}

export default EmployeeList