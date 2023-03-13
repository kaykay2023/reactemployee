import React from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import EmployeeList from './EmployeeList'



function Homepage(props) {
  return (
    <div className='hpage'>
      
      
       <Header passedprop={props.yourTitle}/>
       <Searchbar/>
       <EmployeeList workers={props.staff}/>
    </div>
  )
}

export default Homepage