import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <p className="text-gray-300 max-w-xl mx-auto text-center">
            I am actively seeking internship opportunities and research collaborations. If you believe my skills align with your team or project, feel free to email me or send a message on LinkedIn. I will be happy to share my resume with you.
          </p>
          <a href="https://www.linkedin.com/in/bhavagna-shreya-bandaru-844b72202/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.3 19h-3v-9h3v9zM6.8 8.5c-1 0-1.7-.8-1.7-1.7s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.9 1.7-1.9 1.7zM20 19h-3v-4.9c0-1.2-.4-2-1.3-2-.7 0-1.1.5-1.3 1-.1.2-.1.6-.1.9v5h-3s.1-8 0-9h3v1.3c.4-.7 1.2-1.7 2.8-1.7 2 0 3.5 1.3 3.5 4.1v5.3z"/></svg>
            Connect on LinkedIn
          </a>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Mail className="text-purple-400" size={20} />
              <a href="mailto:bbandar5@asu.edu" className="text-gray-300 hover:text-purple-400 transition-colors">
                bbandar5@asu.edu
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <MapPin className="text-purple-400" size={20} />
              <p className="text-gray-300">Tempe, AZ, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
