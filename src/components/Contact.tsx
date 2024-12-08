import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_id', // You'll need to replace this with your EmailJS service ID
        'template_id', // You'll need to replace this with your EmailJS template ID
        {
          to_email: 'danielvieiraxbh30@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'public_key' // You'll need to replace this with your EmailJS public key
      );

      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Vamos Conversar
            </h3>
            <p className="text-gray-600 mb-8">
              Estou sempre interessado em ouvir sobre novos projetos e oportunidades.
              Não hesite em entrar em contato!
            </p>
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                detail="danielvieiraxbh30@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                title="Telefone"
                detail="+55 (31) 98372-4785"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Localização"
                detail="Belo Horizonte, MG"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) => (
  <div className="flex items-center space-x-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{detail}</p>
    </div>
  </div>
);

export default Contact;