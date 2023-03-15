
import './App.css';
import EmployeePage from './components/EmployeePage';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const listOfEmployees = [
    {
        id:1 ,
        name : "Olu Jay",
        position: "President and CEO",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZxM3Zjh3nq3eWiKKaNbvEgKGwwizQKwlYGEG01CrjiVzOf8SZtlwXfl9mkcF8Yb1EXU&usqp=CAU"
    },
   {
        id:2 ,
        name : "Julie Taylor",
        position: "VP of Marketing",
        image : "https://img.freepik.com/premium-vector/black-woman-portrait-vector-illustration-black-girl-avatar-image-black-history-month-poster_610881-10.jpg?w=2000"
    },
   {
        id:3 ,
        name : "Eugene Lee",
        position: "CFO",
        image : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36578923.jpg"
    },
    {
        id:4 ,
        name : "John Williams",
        position: "VP of Engineering",
        image : "https://thumbs.dreamstime.com/b/brunette-businessman-avatar-man-face-profile-icon-concept-online-support-service-male-cartoon-character-portrait-brunette-126956764.jpg"
    },
   {
        id:5 ,
        name : "Ray Moore",
        position: "VP of Sales",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCixz2zFSodToT_sKINHhfuiFsxbmqLbf3eQ&usqp=CAU"
    }
]





const [selectedEmployee,setSelectedEmployee] = useState(null);

 function returnedEmployeeIndex(index){
    const employeeFromIndex = listOfEmployees.find(emp=>emp.id===index);
    setSelectedEmployee(employeeFromIndex);
    console.log(employeeFromIndex);
 }


  return (
    <div className='main-container'>
      
     <HomePage listOfEmployees = {listOfEmployees} returnedEmployeeIndex={returnedEmployeeIndex}/>
     <EmployeePage selectedEmployee = {selectedEmployee}/>
    </div>
  );
}

export default App;
