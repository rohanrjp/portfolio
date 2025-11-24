import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useTheme from '@/hooks/useTheme';

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-bold">
              My Portfolio
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground">
                Experience
              </button>
              <button onClick={() => scrollToSection('education')} className="text-muted-foreground hover:text-foreground">
                Education
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground">
                Projects
              </button>
            </div>
          </div>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
