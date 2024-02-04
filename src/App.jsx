import { useState } from "react";
import "./App.css";
import { Background } from "./components/Background2";
import { Home } from "./components/Home2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Tours } from "./components/Tours";
import { Contact } from "./components/Contact";
import { Tour } from "./components/Tour";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
      <div className="content">
        <div>
          <Background />
          <Menu />
        </div>

        <Routes>
          <Route path="/toursapp" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tour/:id" element={<Tour />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
