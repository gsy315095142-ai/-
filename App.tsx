import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import AboutSection from './components/AboutSection';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-red-100 selection:text-red-900">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <CourseGrid />
          <AIAdvisor />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;