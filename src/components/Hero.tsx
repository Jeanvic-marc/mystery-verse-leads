
import { ArrowRight, Gift, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">✨ Mais de 1.200 gamers satisfeitos!</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
              Caixas Misteriosas{' '}
              <span className="text-gradient block">Épicas Pra Você! 🎮</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              🔥 Roblox, Free Fire, Fortnite, Valorant e muito mais! Rifas insanas, itens raros e contas top esperando por você!
            </p>
          </div>

          <div className="animate-scale-in">
            <Button 
              size="lg"
              onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-6 text-xl rounded-full glow hover-lift mb-12 font-bold"
            >
              🚀 ENTRAR AGORA NO GRUPO
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in">
            <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 rounded-2xl p-6 hover-lift">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient mb-2">500+</h3>
              <p className="text-gray-400 font-medium">Caixas Entregues 📦</p>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-6 hover-lift">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient mb-2">1.2k+</h3>
              <p className="text-gray-400 font-medium">Membros Ativos 👥</p>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-2xl p-6 hover-lift">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient mb-2">98%</h3>
              <p className="text-gray-400 font-medium">Satisfação 🔥</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
