import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light');
  

  const [btnText, newbtnText] = useState(' Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      newbtnText("Light Mode")
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Dark Mode")
    }
  }

  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'red'
      document.body.style.color = 'white'
      newbtnText("Red Mode")
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Dark Mode")
    }
  }

  const toggleMode2 = () => {
    if (mode === 'green') {
      setMode('dark')
      document.body.style.background = 'green'
      document.body.style.color = 'white'
      newbtnText("Green Mode")
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Dark Mode")
    }
  }

  const toggleMode3 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'yellow'
      document.body.style.color = 'white'
      newbtnText("Yellow Mode")
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Dark Mode")
    }
  }

  const toggleMode4 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'purple'
      document.body.style.color = 'white'
      newbtnText("Light Mode")
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Dark Mode")
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact  Us" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} btnText={btnText} />
      <TextForm heading="Enter Text To Analyse Below" mode={mode}  toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} />
    </>
  );
}

export default App; 