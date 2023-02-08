import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
