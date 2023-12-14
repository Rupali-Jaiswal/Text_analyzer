import './App.css';
import Navebar from './components/Navebar';
import TextConverter from './components/TextConvertr';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About'
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom"

function App() {
  const [mode, setmode] = useState('#7c7d7f')
  const [alert, setalert] = useState(null)
  const[btncolor,setbtncolor]=useState('#495057')
  const showAlert = (typ, mssg) => {
    setalert({
      type: typ,
      msg: mssg,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const togglemode = (cls) => {
    setmode(cls)
    document.body.style.backgroundColor =cls
    document.body.style.color = 'white'
  }
  return (
    <>
        <Navebar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <TextConverter alert={alert} showAlert={showAlert} btncolor={btncolor}/>
    </>
  );
}
export default App;


