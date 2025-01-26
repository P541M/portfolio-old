import React from "react";
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar className="fade-in-two" />
      <div key={location.pathname} className="fade-in">
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
          {/* Add more routes here as needed */}
        </Routes>
      </div>
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
