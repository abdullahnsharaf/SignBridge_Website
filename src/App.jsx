import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <Hero />

        {/* Placeholder sections */}
        {["product","demo","features","about","team","contact"].map((id) => (
          <section key={id} id={id} className="min-h-screen flex items-center justify-center">
            <p className="text-white/20 text-2xl font-bold uppercase tracking-widest">{id}</p>
          </section>
        ))}
      </div>
    </LanguageProvider>
  );
}