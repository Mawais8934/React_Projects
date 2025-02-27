import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import { BrowserRouter } from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const handelToggle = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // setModeText('Enable Light Mode');
      document.body.style.backgroundColor = 'Gray';
      showAlert("Dark mode has been activated", "success")
    }else{
      setMode('light');
      // setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'White';
      showAlert("Light mode has been activated", "success")
    }
  }
  
  return (
   
    //  start of the React fragment
    <>
    
    {/* <BrowserRouter> */}
    {/* JSX elements */}
    
    <Navbar title = "React" about = "About Us" mode = {mode} handelToggle={handelToggle} modeText= {modeText}/>

    <div className="container mt-2">
      <Alert alert={alert}/>
    </div>
    {/* <Routes> */}
      {/* <Route path='/About' element={<About/>}></Route> */}
      {/* <Route path='/TextForm' element={<TextForm heading = "Enter the text to anlyze" mode = {mode} showAlert= {showAlert}/>}></Route> */}
    {/* </Routes> */}
    {/* </BrowserRouter> */}
   
    
    <div className="container">
      <TextForm heading = "Enter the text to anlyze" mode = {mode} showAlert= {showAlert}/>
    </div>
    
    </> // end of the JSX fragment end
  );
 
}

export default App;
