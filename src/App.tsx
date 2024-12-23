import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./shard/Navbar";
import Product from "./pages/Product";
import Footer from "./shard/Footer";


const App: React.FC = () => {
  return <>
<Navbar/>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  </HashRouter>
<Footer/>
  </>;
};

export default App;
