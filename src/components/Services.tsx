
import { Gift, Dice3, HandHeart, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: 'Caixas Misteriosas 🎁',
      description: 'Abra caixas épicas com itens raros e exclusivos! Surpresas garantidas que vão te deixar no hype!',
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      icon: Dice3,
      title: 'Rifas Insanas 🎲',
      description: 'Participe de rifas emocionantes com chances reais de ganhar itens valiosos. É só sorte e diversão!',
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      icon: HandHeart,
      title: 'Intermediação Segura 🤝',
      description: 'Facilitamos compra e venda entre usuários com total segurança. Zero dor de cabeça!',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25'
    },
    {
      icon: Shield,
      title: 'Garantia Total 🛡️',
      description: 'Todos os itens verificados e garantia de entrega ou seu dinheiro de volta. Confiança 100%!',
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Nossos Serviços <span className="text-gradient">Épicos! ⚡</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            🔥 Experiência completa para gamers que buscam itens exclusivos e oportunidades únicas de verdade!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 card-hover animate-scale-in ${service.glow} shadow-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 shadow-lg ${service.glow}`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
