import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
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
  return (
    <div className="flex min-h-screen flex-col bg-bg dark:bg-bg-dark">
      <Navbar className="fade-in-two" />
      <main key={location.pathname} className="fade-in flex-grow pb-0">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="h-10 w-full bg-bg dark:bg-bg-dark md:h-12"></div>
                <Timeline />
                <div className="h-10 w-full bg-bg dark:bg-bg-dark md:h-12"></div>
                <Projects />
                <div className="h-10 w-full bg-bg dark:bg-bg-dark md:h-12"></div>
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
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
