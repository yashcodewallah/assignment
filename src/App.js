import './App.css';
import Forms from './components/form/forms';
import Finalpage from './components/finalpage/finalpage';
import {useState} from "react"
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {
  
  const [details,setDetails]=useState({
    firstname:"",
    lastname:"",
    gender:"",
    email:"",
    schoolname: "",
    above18:"no",
    above75Tenth:false,
    above75Twelveth:false,
    username:"",
    password:"",
    confirmPassword:"",
    profilePicture:[]
})

  return (
    <BrowserRouter>
    <div className="App">
  <Routes>
  <Route path="/" element={<Forms details={details} setDetails={setDetails}/>} />
   <Route path='/finalpage' element={<Finalpage details={details} setDetails={setDetails}/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
  }

export default App;
