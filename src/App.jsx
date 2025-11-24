import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import WorkExperience from '@/sections/WorkExperience';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Footer from '@/sections/Footer';

const App = () => (
  <Layout>
    <Hero />
    <About />
    <WorkExperience />
    <Education />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
);

export default App;
