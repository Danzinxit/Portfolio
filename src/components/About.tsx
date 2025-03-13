import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Espaço de trabalho do desenvolvedor"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Sou um desenvolvedor full-stack com paixão por criar soluções elegantes
              para problemas complexos. Com experiência em tecnologias web modernas,
              construo aplicações que são tanto bonitas quanto funcionais.
            </p>
            <div className="space-y-6">
              <Skill
                icon={<Code className="text-blue-600" />}
                title="Desenvolvimento"
                description="JavaScript, TypeScript, React, Node.js"
              />
              <Skill
                icon={<Palette className="text-blue-600" />}
                title="FrontEnd"
                description="HTML5, Tailwind CSS, Material UI"
              />
              <Skill
                icon={<Globe className="text-blue-600" />}
                title="Backend"
                description="Express.js, MongoDB, PostgreSQL"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;