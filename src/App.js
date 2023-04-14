import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "#708090";
      document.body.style.color = "white";
    } else {
      setMode("light");
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor = "skyblue";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="What do you textify?"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
