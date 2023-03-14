
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
   setAlert({
    msg : message, 
    type : type
  })

   setTimeout(() => {
   setAlert(null)
  }, 1000);
 } 

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2c2e33";
      showAlert("Dark mode has been enabled", 'success');
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", 'success');

    }
  }
  return (
    <>
    <Navbar title = "Text-Utils" aboutText ="About Us" theMode = {mode} toggleMode={toggleMode}/>
     <Alert alert = {alert} />
    <div className="container my-3" >
      <TextForm showAlert = {showAlert} heading = "Enter Your Text here" theMode = {mode} />
    </div>
    <About />
    </>
  );
}

export default App;
