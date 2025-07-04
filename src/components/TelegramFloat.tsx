
import { MessageCircle } from 'lucide-react';

const TelegramFloat = () => {
  return (
    <button
      onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 animate-float hover-lift"
      aria-label="Entrar no grupo do Telegram"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default TelegramFloat;
