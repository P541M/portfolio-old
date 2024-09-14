import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import S24WorkTermReport from "./components/S24WorkTermReport";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/s24-work-term-report" && <Navbar />}
      <main id="main-content">
        <Routes>
          <Route
            path="/"
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
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
