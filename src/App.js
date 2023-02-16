import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logement from "./pages/Logement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/logement/:id" element={<Logement/>}/>
          {<Route path="*" element={<Error/>}/>}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
