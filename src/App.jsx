import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />

        {["home","product","demo","features","about","team","contact"].map((id) => (
          <section key={id} id={id} className="min-h-screen flex items-center justify-center">
            <p className="text-white/20 text-2xl font-bold uppercase tracking-widest">{id}</p>
          </section>
        ))}
      </div>
    </LanguageProvider>
  );
}