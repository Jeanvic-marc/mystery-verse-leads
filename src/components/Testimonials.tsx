
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      text: 'Recebi minha caixa do Fortnite em menos de 24h! Itens incríveis e atendimento top!',
      rating: 5,
      game: 'Fortnite'
    },
    {
      name: 'Maria Santos',
      text: 'Participei de uma rifa e ganhei uma skin lendária do Valorant. Recomendo demais!',
      rating: 5,
      game: 'Valorant'
    },
    {
      name: 'Pedro Costa',
      text: 'Comprei Robux com desconto e foi tudo muito rápido. Grupo confiável!',
      rating: 5,
      game: 'Roblox'
    },
    {
      name: 'Ana Oliveira',
      text: 'Vendi minha conta pelo grupo e o processo foi super seguro. Obrigada!',
      rating: 5,
      game: 'Free Fire'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 1.200 gamers satisfeitos com nossos serviços. Veja alguns depoimentos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.game}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
