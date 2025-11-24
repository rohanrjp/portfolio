import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'QGen:Question Paper Generator',
    description: 'An intelligent question paper generator powered by Python, Flask, and PyTorch, designed to streamline the creation of question papers from template PDFs.',
    tags: ['Python', 'Flask', 'Bootstrap', 'PyTorch'],
    link: 'https://github.com/rohanrjp/QGen-Question_Paper_Generator',
  },
  {
    title: 'News and Weather Summarizer',
    description: 'A Python-based automation tool that sends live, summarized weather and news updates directly to your email.',
    tags: ['Python', 'Github Actions'],
    link: 'https://github.com/rohanrjp/News_Summarizer',
  },
  {
    title: 'John Snow’s Ghost Map Analysis: Cholera Outbreak Data Exploration',
    description: 'This data science project revisits Dr. John Snow’s groundbreaking 19th-century analysis of the cholera outbreak in London.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Folium'],
    link: 'https://github.com/rohanrjp/JohnSnow_GhoseMap_DA',
  },
  {
    title: 'Rental DVD Duration Prediction: Regression Analysis for Inventory Optimization',
    description: 'This project builds a predictive model to estimate the number of days a customer will rent a DVD, helping the company improve inventory planning and meet customer demand efficiently.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    link: 'https://github.com/rohanrjp/rental_DVD_regression',
  },
  {
    title: 'Netflix Movie Duration Trends: An EDA Scatter Plot',
    description: 'This project explores trends in Netflix movie durations over time, focusing on how movie lengths have evolved in recent years.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/rohanrjp/Netflix_EDA',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
