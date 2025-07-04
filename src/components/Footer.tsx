
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16 border-t border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d0631d63-8a2f-4662-a5c3-aa2aafad1562.png" 
                alt="GameBox Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-black text-gradient">GameBox</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-medium">
              🔥 Sua plataforma confiável para caixas misteriosas, rifas e itens exclusivos dos melhores jogos. 
              Conectando gamers desde 2023 com muito hype!
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 p-3 rounded-full transition-all hover-lift glow-blue"
              >
                <img src="/lovable-uploads/956175a2-1f0f-408f-9413-6bf7b5e1e722.png" alt="Telegram" className="h-5 w-5" />
              </button>
              <button className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 p-3 rounded-full transition-all hover-lift glow">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 p-3 rounded-full transition-all hover-lift glow-blue">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 p-3 rounded-full transition-all hover-lift glow-orange">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-4 text-gradient">Serviços 🎯</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-red-400 transition-colors font-medium">🎁 Caixas Misteriosas</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-medium">🎲 Rifas e Sorteios</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors font-medium">🤝 Intermediação</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors font-medium">👑 Contas Premium</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            © 2024 GameBox. Todos os direitos reservados. 🎮 | Não somos afiliados aos jogos mencionados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
