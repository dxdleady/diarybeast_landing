import { Hero } from './components/Hero';
import { ConnectionSection } from './components/ConnectionSection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ConnectionSection />
      <Footer />
    </div>
  );
}

export default App;
