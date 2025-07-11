
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div 
              className="w-36 h-12 bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('/lovable-uploads/d0631d63-8a2f-4662-a5c3-aa2aafad1562.png')`,
                backgroundSize: '120%'
              }}
              aria-label="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-red-400 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('games')}
              className="text-gray-300 hover:text-gray-400 transition-colors font-medium"
            >
              Jogos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-red-400 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => window.open('https://t.me/+55_U3tUd2T8zZWEx', '_blank')}
              className="bg-gradient-to-r from-gray-600 to-red-600 hover:from-gray-500 hover:to-red-500 text-white px-6 py-2 rounded-full glow hover-lift"
            >
              🚀 Entrar no Grupo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700 animate-fade-in">
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-red-400 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="block text-gray-300 hover:text-gray-400 transition-colors font-medium"
              >
                Jogos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-300 hover:text-red-400 transition-colors font-medium"
              >
                Depoimentos
              </button>
              <Button 
                onClick={() => window.open('https://t.me/+55_U3tUd2T8zZWEx', '_blank')}
                className="w-full bg-gradient-to-r from-gray-600 to-red-600 hover:from-gray-500 hover:to-red-500 text-white rounded-full"
              >
                🚀 Entrar no Grupo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
