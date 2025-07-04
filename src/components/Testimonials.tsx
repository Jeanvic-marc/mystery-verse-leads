
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva 🎮',
      text: 'Mano, recebi minha caixa do Fortnite em menos de 24h! Itens insanos e atendimento top demais! 🔥',
      rating: 5,
      game: 'Fortnite',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Maria Santos ⚡',
      text: 'Participei de uma rifa e ganhei uma skin lendária do Valorant. Muito hypado, recomendo demais! 💜',
      rating: 5,
      game: 'Valorant',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Pedro Costa 🚀',
      text: 'Comprei Robux com desconto e foi tudo muito rápido. Grupo confiável e os caras são gente boa! 😎',
      rating: 5,
      game: 'Roblox',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Ana Oliveira 🔥',
      text: 'Vendi minha conta pelo grupo e o processo foi super seguro. Muito obrigada, pessoal! 💖',
      rating: 5,
      game: 'Free Fire',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Galera <span className="text-gradient">Satisfeita! 🎉</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            🔥 Mais de 1.200 gamers satisfeitos com nossos serviços! Veja alguns depoimentos da nossa comunidade!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-6 rounded-3xl hover:border-gray-600/50 card-hover animate-scale-in shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-black text-white text-lg">{testimonial.name}</p>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.color} text-white text-sm font-bold mt-2`}>
                  {testimonial.game}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
