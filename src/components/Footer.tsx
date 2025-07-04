
import { MessageCircle, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GB</span>
              </div>
              <span className="text-xl font-bold">GameBox</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Sua plataforma confiável para caixas misteriosas, rifas e itens exclusivos dos melhores jogos. 
              Conectando gamers desde 2023.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Caixas Misteriosas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rifas e Sorteios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intermediação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contas Premium</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Como Comprar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GameBox. Todos os direitos reservados. | Não somos afiliados aos jogos mencionados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
