import { useState } from 'react';
import './App.css';
import  Alert from  './App.js'
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light');

  const [btnText, newbtnText] = useState('Enble Dark Mode');

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
      setMode('dark')
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      newbtnText("Enble Light Mode");
      newbtnText("Dark Mode Has Ben Enble", "succes");
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Enble Dark Mode")
      newbtnText("Light Mode Has Ben Enble", "succes");
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