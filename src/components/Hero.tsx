import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Olá, eu sou <span className="text-blue-600">Daniel Vieira</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Desenvolvedor Full Stack apaixonado por criar experiências web bonitas e funcionais
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Meus Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Fale Comigo
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;