import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image, tech, github, demo }: Project) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <Github size={20} className="mr-2" />
          Código
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ExternalLink size={20} className="mr-2" />
          Demo
        </a>
      </div>
    </div>
  </div>
);

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Farmácia Online",
    description: "Uma plataforma completa de e-commerce para produtos farmacêuticos com sistema de carrinho e pagamento",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://farmaciaserver.vercel.app"
  },
  {
    title: "Cardápio Digital",
    description: "Sistema de cardápio digital interativo com gerenciamento de pedidos em tempo real",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
    tech: ["TypeScript", "React", "Tailwind"],
    github: "https://github.com",
    demo: "https://cardapio-ts-seven.vercel.app"
  },
  {
    title: "Plataforma de Cursos",
    description: "Plataforma educacional com cursos online e sistema de aprendizado interativo",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://amazingcursos.netlify.app"
  }
];

export default Projects;