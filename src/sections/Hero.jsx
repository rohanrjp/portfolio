import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Rohan Paul</h1>
        <p className="mt-4 text-2xl">Software Developer</p>
        <p className="mt-2 text-lg text-gray-600">
          I build things for the web.
        </p>
        <Button className="mt-8">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Hero;
