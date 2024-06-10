import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const[mode,setMode]= useState('light'); 

  const[btnText, newbtnText]= useState('Enble Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background='black'
      document.body.style.color='white'
      newbtnText("Enble Light Mode")
    } else {
      setMode('light')
      document.body.style.color='black'
      document.body.style.background='white'
      newbtnText("Enble Dark Mode")
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact Us" mode ={mode} toggleMode={toggleMode} btnText={btnText} />
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode ={toggleMode}/>
    </>
  );
}

export default App;