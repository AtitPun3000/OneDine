import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Submenu from "./pages/Submenu";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/submenu" element={<Submenu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}
