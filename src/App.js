import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import S24WorkTermReport from "./components/S24WorkTermReport";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Layout() {
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
                <Timeline />
                <Projects />
              </>
            }
          />
          <Route path="/s24-work-term-report" element={<S24WorkTermReport />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
