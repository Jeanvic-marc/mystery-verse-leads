
import { ArrowRight, Gift, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Caixas Misteriosas e Itens{' '}
              <span className="text-gradient">Raros de Jogos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra itens exclusivos, participe de rifas emocionantes e encontre as melhores ofertas para seus jogos favoritos. Roblox, Free Fire, Fortnite, Valorant e muito mais!
            </p>
          </div>

          <div className="animate-scale-in">
            <Button 
              size="lg"
              onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full hover-lift mb-12"
            >
              Entrar no Grupo Telegram
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Caixas Entregues</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1.2k+</h3>
              <p className="text-gray-600">Membros Ativos</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
