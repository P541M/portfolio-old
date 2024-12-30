// App.js
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import S24BoscoBoysDistributors from "./components/S24BoscoBoysDistributors";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

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
      {location.pathname !== "/boscoboys-distributors-wtr" && (
        <Navbar className="fade-in-two" />
      )}
      <div key={location.pathname} className="fade-in">
        <Routes location={location}>
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
          <Route
            path="/boscoboys-distributors-wtr"
            element={<S24BoscoBoysDistributors />}
          />
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
