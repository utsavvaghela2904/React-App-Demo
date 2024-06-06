import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="SIT" aboutText="Contact Us"/>
      <TextForm heading="Enter Your Analyse Below"/>
    </>
  );
}

export default App;
