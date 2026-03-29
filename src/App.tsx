import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import SplashCursor from './components/SplashCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Tech from './sections/Tech';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { portfolioData } from './data/portfolio';

function App() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: portfolioData.profile.fullName,
      jobTitle: portfolioData.profile.role,
      email: portfolioData.profile.email,
      telephone: portfolioData.profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      url: portfolioData.socials[0]?.url,
      sameAs: portfolioData.socials.map((social) => social.url),
      alumniOf: "Lagos State University",
      knowsAbout: portfolioData.tech.map((tech) => tech.name),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <SplashCursor />
        <Header />
        <main>
          <Hero />
          <Tech />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;
