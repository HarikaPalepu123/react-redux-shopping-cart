import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <Navbar />

        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </div>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;