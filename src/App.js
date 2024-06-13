import { useState } from 'react';
import './App.css';
import  Alert from  './App.js'
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, mybtn] = useState ("Enable Dark Mode");
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      mybtn("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable" , "success")
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      mybtn("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable" , "success")

    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact  Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert}/>
    </>
  );
}

export default App; 