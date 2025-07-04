
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Games from '@/components/Games';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import TelegramFloat from '@/components/TelegramFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Games />
        <Testimonials />
      </main>
      <Footer />
      <TelegramFloat />
    </div>
  );
};

export default Index;
