import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className="App">
      
      <Banner/>
      <Gallery/>
      
    </div>
  );
}

export default Home;
