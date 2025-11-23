import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>QGen:Question Paper Generator</h3>
        <p>An intelligent question paper generator powered by Python, Flask, and PyTorch, designed to streamline the creation of question papers from template PDFs.</p>
        <p><strong>Technologies:</strong> Python, Flask, Bootstrap, PyTorch</p>
        <a href="https://github.com/rohanrjp/QGen-Question_Paper_Generator">View Project</a>
      </div>
      <div className="project">
        <h3>News and Weather Summarizer</h3>
        <p>A Python-based automation tool that sends live, summarized weather and news updates directly to your email.</p>
        <p><strong>Technologies:</strong> Python, Github Actions</p>
        <a href="https://github.com/rohanrjp/News_Summarizer">View Project</a>
      </div>
      <div className="project">
        <h3>John Snow’s Ghost Map Analysis: Cholera Outbreak Data Exploration</h3>
        <p>This data science project revisits Dr. John Snow’s groundbreaking 19th-century analysis of the cholera outbreak in London.</p>
        <p><strong>Technologies:</strong> Python, Pandas, Matplotlib, Folium</p>
        <a href="https://github.com/rohanrjp/JohnSnow_GhoseMap_DA">View Project</a>
      </div>
      <div className="project">
        <h3>Rental DVD Duration Prediction: Regression Analysis for Inventory Optimization</h3>
        <p>This project builds a predictive model to estimate the number of days a customer will rent a DVD, helping the company improve inventory planning and meet customer demand efficiently.</p>
        <p><strong>Technologies:</strong> Python, Pandas, Matplotlib, Scikit-learn</p>
        <a href="https://github.com/rohanrjp/rental_DVD_regression">View Project</a>
      </div>
      <div className="project">
        <h3>Netflix Movie Duration Trends: An EDA Scatter Plot</h3>
        <p>This project explores trends in Netflix movie durations over time, focusing on how movie lengths have evolved in recent years.</p>
        <p><strong>Technologies:</strong> Python, Pandas, Matplotlib</p>
        <a href="https://github.com/rohanrjp/Netflix_EDA">View Project</a>
      </div>
    </section>
  );
};

export default Projects;
