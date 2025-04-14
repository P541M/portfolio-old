import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Volunteer from "./components/Volunteer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar className="fade-in-two" />
      <main key={location.pathname} className="fade-in pb-24">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Timeline />
                <Projects />
                <Volunteer />
              </>
            }
          />
        </Routes>
      </main>
      {isHomePage && (
        <footer className="py-8 text-center text-text/60">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Psalm Eleazar. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
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
