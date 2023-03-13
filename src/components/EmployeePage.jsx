import React from 'react'
import Header from './Header'

function EmployeePage(props) {
  return (
    <div className='epage'>
        <Header passedprop={props.yourTitle}/>

    </div>
  )
}

export default EmployeePage