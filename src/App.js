/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#040322"
      showAlert("Dark mode has been enabled", "success")
      document.title = "souvikreact - Darkmode"

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "souvikreact - Lightmode"
    }
  }


  return (
    <>
      <Router>
         <Navbar title="TextSouvik" abouttext="About" mode={mode} togglemode={toggleMode} /> 
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/about"
              element={<About />} />
            <Route path="/"
              element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode} /> */}
          {/* <About /> */}
        </div>
      </Router>

    </>
  );
}

export default App;
