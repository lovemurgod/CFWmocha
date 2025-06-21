import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full z-50 bg-[#1A2A40]/95 backdrop-blur-md py-2 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="https://mocha-cdn.com/01979190-d9d5-7d2a-917f-a99754ba4a00/CFWlogo.png" 
              alt="Corporate Fashion Week Logo" 
              className="h-12 md:h-16"
            />
            <div className="hidden md:block">
              <h1 className="text-[#F5C243] font-serif text-xl font-bold leading-tight">Corporate Fashion Week</h1>
              <p className="text-white text-sm italic">Where Elegance Meets Enterprise</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/events" active={isActive('/events')}>Events</NavLink>
            <NavLink to="/tickets" active={isActive('/tickets')}>Tickets</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A2A40] border-t border-[#F5C243]/20 mt-2">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <div className="mb-2 text-center">
              <h1 className="text-[#F5C243] font-serif text-lg font-bold leading-tight">Corporate Fashion Week</h1>
              <p className="text-white text-xs italic">Where Elegance Meets Enterprise</p>
            </div>
            <MobileNavLink to="/" active={isActive('/')} onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/events" active={isActive('/events')} onClick={() => setMobileMenuOpen(false)}>Events</MobileNavLink>
            <MobileNavLink to="/tickets" active={isActive('/tickets')} onClick={() => setMobileMenuOpen(false)}>Tickets</MobileNavLink>
            <MobileNavLink to="/services" active={isActive('/services')} onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')} onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`text-sm uppercase tracking-wider transition-all duration-300 font-medium ${
        active 
          ? 'text-[#F5C243] border-b-2 border-[#F5C243]' 
          : 'text-white hover:text-[#F5C243]'
      }`}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

function MobileNavLink({ to, active, children, onClick }: MobileNavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`block py-2 text-base uppercase tracking-wider ${
        active ? 'text-[#F5C243]' : 'text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
