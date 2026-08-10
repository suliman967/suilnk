import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import CredibilityStrip from "./sections/CredibilityStrip.jsx";
import ProblemSection from "./sections/ProblemSection.jsx";
import SolutionSection from "./sections/SolutionSection.jsx";
import NmoCaseStudy from "./sections/NmoCaseStudy.jsx";
import LoomWalkthrough from "./sections/LoomWalkthrough.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import About from "./sections/About.jsx";
import Booking from "./sections/Booking.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProblemSection />
        <SolutionSection />
        <NmoCaseStudy />
        <LoomWalkthrough />
        <Testimonials />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
