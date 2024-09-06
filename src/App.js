import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import S24WorkTermReport from "./components/S24WorkTermReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route
            path="/portfolio"
            element={
              <>
                <Hero />
                <Content />
              </>
            }
          />
          <Route path="/s24-work-term-report" element={<S24WorkTermReport />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
