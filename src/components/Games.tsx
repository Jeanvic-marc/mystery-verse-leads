
const Games = () => {
  const games = [
    {
      name: 'Roblox 🎮',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      description: 'Robux, itens limitados e acessórios exclusivos que todo mundo quer!',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Free Fire 🔥',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      description: 'Diamantes, skins de armas e personagens que vão te deixar OP!',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Fortnite ⚡',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      description: 'V-Bucks, skins exclusivas e battle passes pra você dominar!',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Valorant 💀',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      description: 'VP, skins de armas e contas rankeadas pra você ser o MVP!',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'PUBG Mobile 📱',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      description: 'UC, roupas exclusivas e itens raros pra você ser o last one!',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Outros Jogos 🎯',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      description: 'Steam, Xbox, PlayStation e muito mais esperando por você!',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Jogos <span className="text-gradient">Suportados! 🎮</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            🔥 Trabalhamos com os jogos mais hypados do momento! Encontre itens pra sua plataforma favorita e manda ver!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 card-hover animate-scale-in shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${game.color} text-white text-sm font-bold shadow-lg`}>
                  HOT 🔥
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-black text-white">
                  {game.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed font-medium">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
