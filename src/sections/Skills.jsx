import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'Flask',
  'Bootstrap',
  'PyTorch',
  'Github Actions',
  'Pandas',
  'Matplotlib',
  'Folium',
  'Scikit-learn',
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-muted"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
