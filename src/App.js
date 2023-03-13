// import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';
import titles from './models/titles';
import workers from './models/workers';
// import EmployeeList from './components/EmployeeList';
// import EmployeeListItem from './components/EmployeeListItem';
// import Header from './components/Header';
// import Searchbar from './components/Searchbar';


function App() {
  return (

    <div className="App">

      <div className='mainContainer'> 
      
      <Homepage staff={workers} yourTitle={titles.homepage}/>
      <EmployeePage staff={workers}  yourTitle={titles.epage}/>

      </div>
      


      {/* <EmployeeList/>
      <EmployeeListItem/>
      <Header/>
      <Searchbar/> */}
      
     

    </div>
  );
}


export default App;
