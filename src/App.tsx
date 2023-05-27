
import './App.css';
import { sampleProducts } from './data';



function App() {
  
  return (
    <>
     <header>Parapharma</header> 
     <main>
      <ul>
        {sampleProducts.map((Product) => (

          <li key={Product.slug}>
            <img
              src={Product.image} 
              alt={Product.name}
              className="Product-image"
           />
            <h2>{Product.name}</h2>
            <p>${Product.price}</p>
          </li>
        )
        )

        }
      </ul>
     </main>
      <footer>en bas</footer>
    </>
  );
}

export default App;
