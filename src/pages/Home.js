import { useContext } from 'react';
import Form from '../components/Form';
import ListingProd from '../components/ListingProd';
import { ProductsContext } from '../contexts/ProductsContext';
import '../styles/home.css';

function Home() {
  const { isShowForm } = useContext(ProductsContext);
  return (
    <div className="homeWrapper">
      <header>
        <h3>My Minions</h3>
      </header>
      <main>
        <ListingProd />
        {isShowForm ? 
          <Form /> : <></>        
        }
      </main>
    </div>
  );
}

export default Home;
