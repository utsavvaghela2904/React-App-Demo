import './App.css';
import img1 from './img/ai-art.webp';
let name= "SIT";

function App() {
  return (
   <>
   <header>
    <h1 className='SIT'>{name}</h1>
    <nav>
      <ul>
        <li type="none">Home</li>
        <li type="none">About</li>
        <li type="none">Contact Us</li>
      </ul>
    </nav>
    <hr />
    <p className="lorem1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt laudantium velit placeat labore magnam dolorum debitis similique aliquid atque repellendus vel sapiente totam et impedit ex, eos pariatur deleniti.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam quos magni minima harum animi iure dolorem, et voluptatum nam, a illo nihil pariatur explicabo quia recusandae dolor iusto beatae.</p>

    <img src="https://cdn.clickworker.com/wp-content/uploads/2022/09/BenefitsofAI.webp" alt="" />

    <p className="lorem1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt laudantium velit placeat labore magnam dolorum debitis similique aliquid atque repellendus vel sapiente totam et impedit ex, eos pariatur deleniti.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam quos magni minima harum animi iure dolorem, et voluptatum nam, a illo nihil pariatur explicabo quia recusandae dolor iusto beatae.</p>

    <img src={img1} alt="img"/>

    <p className="lorem1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt laudantium velit placeat labore magnam dolorum debitis similique aliquid atque repellendus vel sapiente totam et impedit ex, eos pariatur deleniti.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam quos magni minima harum animi iure dolorem, et voluptatum nam, a illo nihil pariatur explicabo quia recusandae dolor iusto beatae.</p>
   </header>
   </>
  );
}

export default App;
