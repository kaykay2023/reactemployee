
import React from 'react'
import '../styles.css'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'
function HomePage({listOfEmployees,returnedEmployeeIndex}) {
  return (
    <div className='home-page'>
        <Header value="Employee Directory"/>
        <SearchBar/>
        <EmployeeList listOfEmployees = {listOfEmployees} returnedEmployeeIndex={returnedEmployeeIndex}/>
    
    </div>
  )
}

export default HomePage