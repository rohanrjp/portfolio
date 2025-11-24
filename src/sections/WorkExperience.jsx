import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-muted"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>InfoView Technologies Pvt. Ltd. (IVTL)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Software Developer</strong>
              </p>
              <p className="text-sm text-muted-foreground">2024-Present</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>GIEOM Business Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Intern (Software Development)</strong>
              </p>
              <p className="text-sm text-muted-foreground">2022</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
