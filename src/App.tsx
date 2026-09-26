import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import StackSection from "./components/StackSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <a href="#travail" className="skip">
        Aller au travail
      </a>
      <AnimatePresence>
        {loading && !reduce && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <StackSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
