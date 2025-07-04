
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GB</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GameBox</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('games')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Jogos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              Entrar no Grupo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Jogos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Depoimentos
              </button>
              <Button 
                onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Entrar no Grupo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
