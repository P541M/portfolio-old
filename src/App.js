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
import NotFound from "./components/NotFound"; // Import the NotFound component

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();
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
                <div className="h-10 w-full bg-bg md:h-12"></div>
                <Timeline />
                <div className="h-10 w-full bg-bg md:h-12"></div>
                <Projects />
                <div className="h-10 w-full bg-bg md:h-12"></div>
                <Volunteer />
              </>
            }
          />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          {/* Add the 404 route - this will catch any unmatched routes */}
          <Route path="*" element={<NotFound />} />
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
