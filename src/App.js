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
import { AgriculturalInputsContent } from './pages/AgriculturalInputs';
import { PetroleumTransitContent } from './pages/PetroleumTransit';
import { ClearanceForwardingContent } from './pages/ClearanceForwarding';
import { AuditingServicesContent } from './pages/AuditingServices';
import './styles/AgriculturalInputs.css';
import './styles/ServicePage.css';
import './styles/App.css';

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
        <section id="agricultural-inputs" aria-label="Agricultural Inputs">
          <AgriculturalInputsContent />
        </section>
        <section id="petroleum-transit" aria-label="Petroleum Transit">
          <PetroleumTransitContent />
        </section>
        <section id="clearance-forwarding" aria-label="Clearance & Forwarding">
          <ClearanceForwardingContent />
        </section>
        <section id="auditing-services" aria-label="Auditing Services">
          <AuditingServicesContent />
        </section>
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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
