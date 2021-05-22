import Form from '../components/Form';
import ListingProd from '../components/ListingProd';
import '../styles/home.css';

function Home() {
  return (
    <div className="homeWrapper">
      <header>
        <h3>My Minions</h3>
      </header>
      <main>
        <ListingProd />
        <Form />
      </main>
    </div>
  );
}

export default Home;
