import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Demo from "./components/Demo";
import Features from "./components/Features";
import About from "./components/About";
import Team from "./components/Team";

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
        <Team />

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-white/20 text-2xl font-bold uppercase tracking-widest">contact</p>
        </section>
      </div>
    </LanguageProvider>
  );
}