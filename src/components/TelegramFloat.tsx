
const TelegramFloat = () => {
  return (
    <a
      href="https://t.me/your_telegram_group"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl transition-all duration-500 z-50 animate-bounce hover:scale-110 group"
      aria-label="Entrar no grupo do Telegram"
    >
      <img 
        src="/lovable-uploads/956175a2-1f0f-408f-9413-6bf7b5e1e722.png" 
        alt="Telegram" 
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
      />
    </a>
  );
};

export default TelegramFloat;
