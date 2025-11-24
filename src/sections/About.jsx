import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg">
              I am a passionate and driven software developer with a knack for creating elegant and efficient solutions. I have experience in a variety of technologies, including React, Node.js, and Python. I am always eager to learn new things and take on new challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default About;
