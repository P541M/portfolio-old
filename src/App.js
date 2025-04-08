import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import S24BoscoBoysDistributors from "./components/reports/S24BoscoBoysDistributors";
import F24UniversityGuelphCOA from "./components/reports/F24UniversityGuelphCOA";
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
    <div className="bg-bg min-h-screen">
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
          <Route
            path="/boscoboys-distributors-wtr"
            element={<S24BoscoBoysDistributors />}
          />
          <Route
            path="/university-guelph-college-of-arts-wtr"
            element={<F24UniversityGuelphCOA />}
          />
        </Routes>
      </main>

      {isHomePage && (
        <footer className="text-text/60 py-8 text-center">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Psalm Eleazar. All rights reserved.
            </p>
            <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
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
