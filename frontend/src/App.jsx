import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';
import PageLoader from './components/PageLoader';

import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <PageLoader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          
          <div className="fixed inset-0 z-[-1]">
             <ParticlesBackground />
          </div>

          <main className="relative z-10 flex flex-col items-center w-full min-h-screen pt-20">
             <Home />
          </main>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
