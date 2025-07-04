
import { Gift, Dice3, HandHeart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: 'Caixas Misteriosas',
      description: 'Caixas com itens raros e exclusivos dos seus jogos favoritos. Surpresas garantidas!',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Dice3,
      title: 'Rifas e Sorteios',
      description: 'Participe de rifas emocionantes com chances reais de ganhar itens valiosos.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: HandHeart,
      title: 'Intermediação Segura',
      description: 'Facilitamos a compra e venda entre usuários com total segurança e confiança.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Todos os itens são verificados e garantimos a entrega ou seu dinheiro de volta.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma experiência completa para gamers que buscam itens exclusivos e oportunidades únicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
