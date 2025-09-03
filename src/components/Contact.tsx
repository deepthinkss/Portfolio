import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Terminal } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="border border-white/30 p-1">
              <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white p-4">
                [CONTACT]
              </h2>
            </div>
            
            <div className="border border-white/30 p-6 bg-black/50">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-5 h-5 text-white" />
                <span className="text-white font-mono font-bold tracking-wider">CONNECTION_STATUS</span>
              </div>
              <p className="text-white/70 font-mono text-sm leading-relaxed">
                SYSTEM READY TO RECEIVE NEW PROJECT REQUESTS AND COLLABORATION OPPORTUNITIES. 
                INITIALIZE CONTACT PROTOCOL BELOW.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-white/20 p-4 bg-black/30">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-white font-mono tracking-wider">deepthakur2718@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-white font-mono font-bold tracking-wider mb-4">[SOCIAL_LINKS]</div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/deepthinkss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/50 p-3 text-white hover:bg-white hover:text-black transition-all duration-300 robotic-border"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deep-thakur45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/50 p-3 text-white hover:bg-white hover:text-black transition-all duration-300 robotic-border"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/50 p-3 text-white hover:bg-white hover:text-black transition-all duration-300 robotic-border"
                  aria-label="X"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border border-white/30 bg-black/50 p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="border border-green-400 p-4 mb-6 bg-green-400/10">
                  <h3 className="text-2xl font-black text-green-400 font-mono tracking-wider mb-4">
                    [MESSAGE_SENT]
                  </h3>
                  <p className="text-white/70 font-mono text-sm">
                    TRANSMISSION SUCCESSFUL. RESPONSE WILL BE INITIATED SHORTLY.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono font-bold text-white tracking-wider mb-3">
                      [NAME]
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 bg-black text-white font-mono placeholder-white/50 focus:border-white focus:outline-none transition-colors duration-200"
                      placeholder="YOUR_NAME"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono font-bold text-white tracking-wider mb-3">
                      [EMAIL]
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 bg-black text-white font-mono placeholder-white/50 focus:border-white focus:outline-none transition-colors duration-200"
                      placeholder="YOUR@EMAIL.COM"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-bold text-white tracking-wider mb-3">
                    [MESSAGE]
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white/30 bg-black text-white font-mono placeholder-white/50 focus:border-white focus:outline-none resize-none transition-colors duration-200"
                    placeholder="DESCRIBE_YOUR_PROJECT..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-white text-black px-8 py-4 font-mono font-bold tracking-widest hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 robotic-border border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>[TRANSMITTING...]</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>[SEND_MESSAGE]</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;