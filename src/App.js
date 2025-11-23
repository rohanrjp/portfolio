import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section section-header">
            <Header />
          </div>
          <div className="section">
            <WorkExperience />
          </div>
          <div className="section">
            <Education />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Projects />
          </div>
          <div className="section section-footer">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
