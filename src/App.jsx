import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Demo from "./components/Demo";
import Features from "./components/Features";
import About from "./components/About";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <Hero />
        <Product />
        <Demo />
        <Features />
        <About />
        <Vision />     {/* ← NEW */}
        <Team />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}