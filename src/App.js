import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
  }
  const toggleMode= ()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#708090";
      document.body.style.color = "white";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "skyblue";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="What do you textify?" mode={mode}/>
      </div>
    </>
  );
}

export default App;
