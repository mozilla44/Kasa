import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logement from "./pages/Logement";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/logement/:id" element={<Logement/>}/>
          <Route path="/About" element={<About/>}/>
          {<Route path="*" element={<Error/>}/>}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
