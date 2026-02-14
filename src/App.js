import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services.js';
import WhyChoose from './components/WhyChoose';
import VisionMission from './components/VisionMission';
import Impact from './components/Impact';
import Footer from './components/Footer';
import AgriculturalInputs from './pages/AgriculturalInputs';
import IndustrialChemical from './pages/IndustrialChemical';
import PetroleumTransit from './pages/PetroleumTransit';
import ClearanceForwarding from './pages/ClearanceForwarding';
import AuditingServices from './pages/AuditingServices';
import './css/App.css';

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    const scrollMargin = 80;
    const id = hash.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - scrollMargin;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <VisionMission />
        <Impact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agricultural-inputs" element={<AgriculturalInputs />} />
          <Route path="/industrial-chemical" element={<IndustrialChemical />} />
          <Route path="/petroleum-transit" element={<PetroleumTransit />} />
          <Route path="/clearance-forwarding" element={<ClearanceForwarding />} />
          <Route path="/auditing-services" element={<AuditingServices />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
