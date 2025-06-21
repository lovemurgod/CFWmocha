import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        backgroundImage: `url('https://mocha-cdn.com/01979190-d9d5-7d2a-917f-a99754ba4a00/background1.jpg')`,
        backgroundSize: 'cover',
        position: 'relative'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#1A2A40]/60 z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
