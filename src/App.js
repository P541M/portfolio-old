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
  const isWorkTermReport =
    location.pathname.includes("-wtr") ||
    location.pathname.includes("boscoboys-distributors") ||
    location.pathname.includes("university-guelph");

  return (
    <div className="min-h-screen bg-bg">
      <Navbar className="fade-in-two" />

      {/* Add space for the navbar on work term report pages */}
      <main
        key={location.pathname}
        className={`fade-in pb-24 ${isWorkTermReport ? "pt-20" : ""}`}
      >
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
        <footer className="py-8 text-center text-text/60">
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
