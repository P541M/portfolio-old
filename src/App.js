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
import ProjectDetail from "./components/ProjectDetail";
import Timeline from "./components/Timeline";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";

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
    <div className="flex min-h-screen flex-col bg-bg">
      <Navbar className="fade-in-two" />
      <main key={location.pathname} className="fade-in flex-grow pb-0">
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
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
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
