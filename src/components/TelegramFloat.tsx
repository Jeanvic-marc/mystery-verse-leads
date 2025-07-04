
const TelegramFloat = () => {
  return (
    <button
      onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 z-50 animate-float hover-lift glow-blue group"
      aria-label="Entrar no grupo do Telegram"
    >
      <img 
        src="/lovable-uploads/956175a2-1f0f-408f-9413-6bf7b5e1e722.png" 
        alt="Telegram" 
        className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" 
      />
    </button>
  );
};

export default TelegramFloat;
