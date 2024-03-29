import React, { useEffect, useState } from "react";
import Hero from "./pages/Hero/index";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Testimonials from "./pages/Testimonials";
import Job from "./pages/Job";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/styles/locomotive-scroll.scss";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div>
      <CustomCursor />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <AboutMe />
            <Job />
            <Testimonials />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
