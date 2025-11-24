import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Rajagiri School of Engineering & Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>B.Tech. (Hons.) in Computer Science and Engineering</strong>
              </p>
              <p className="text-sm text-muted-foreground">2020-2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Saraswati Vidyaniketan Public School</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Higher Secondary Certificate (CBSE)</strong>
              </p>
              <p className="text-sm text-muted-foreground">2018-2020</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Public School</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Secondary School Certificate (CBSE)</strong>
              </p>
              <p className="text-sm text-muted-foreground">2007-2018</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
