import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfólio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    {[
      { en: 'Home', pt: 'Início' },
      { en: 'About', pt: 'Sobre' },
      { en: 'Projects', pt: 'Projetos' },
      { en: 'Contact', pt: 'Contato' },
    ].map((item) => (
      <a
        key={item.en}
        href={`#${item.en.toLowerCase()}`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {item.pt}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a
      href="https://github.com/Danzinxit"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/daniel-vieirabh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="mailto:danielvieiraxbh30@gmail.com"
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Mail size={20} />
    </a>
    {/* Ícone de Baixar Currículo com texto explicativo */}
    <a
      href="/src/public/CurriculoDanielVieiradaSilva.pdf"
      download="CurriculoDanielVieiradaSilva.pdf"
      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2"
    >
      <Download size={20} />
      <span>Baixar Currículo</span>
    </a>
  </div>
);

export default Header;
