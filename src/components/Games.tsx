
const Games = () => {
  const games = [
    {
      name: 'Roblox',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      description: 'Robux, itens limitados e acessórios exclusivos'
    },
    {
      name: 'Free Fire',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      description: 'Diamantes, skins de armas e personagens'
    },
    {
      name: 'Fortnite',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      description: 'V-Bucks, skins exclusivas and battle passes'
    },
    {
      name: 'Valorant',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      description: 'VP, skins de armas e contas rankeadas'
    },
    {
      name: 'PUBG Mobile',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      description: 'UC, roupas exclusivas e itens raros'
    },
    {
      name: 'Outros Jogos',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      description: 'Steam, Xbox, PlayStation e muito mais'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jogos Suportados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os jogos mais populares do momento. Encontre itens para sua plataforma favorita!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {game.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
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
