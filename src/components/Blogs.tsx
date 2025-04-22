import React, { useState } from 'react';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Blogs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [searchTerm, setSearchTerm] = useState('');

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Mapping the Generative AI Adoption Landscape: Industry Trends and Forecasts for 2025',
      excerpt: 'This study analyzes adoption patterns across industries from 2023 to 2024 and predicts 2025 trends based on observed growth rates and clustering patterns.',
      image: 'https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/ai-coverage-2.jpg?rev=56e6f88de6774db290c5069e65788bd1',
      category: 'Datascience',
      date: 'Apr 8, 2025',
      readTime: '3 min read',
      url: 'https://medium.com/@bhavagnabandaru30/predicting-generative-ai-industry-adoption-by-2025-77a02a683627'
    },
    {
      id: 2,
      title: ' Metaverse Analysis: Hype or Reality? (2021–2022)',
      excerpt: 'The Metaverse sparked a global wave of attention — from gaming to virtual real estate. But was it ever truly adopted, or was it just financial hype?',
      image: 'https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2022/04/Blog-Banner-metaverse.jpeg',
      category: 'Machine Learning',
      date: 'Apr 16, 2025',
      readTime: '2 min read',
      url: 'https://medium.com/p/7206b664271d'
    },
    {
      id: 3,
      title: 'Blockchain Beyond Crypto',
      excerpt: 'Blockchain is no longer just the foundation for Bitcoin or Ethereum. Today, it’s quietly transforming industries that rely on trust, transparency, and traceability',
      image: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg',
      category: 'Datscience',
      date: 'Apr 22, 2025',
      readTime: '3 min read',
      url: 'https://medium.com/@bhavagnabandaru30/blockchain-beyond-crypto-how-smart-contracts-are-reshaping-supply-chains-and-real-estate-432ff3448312'
    },
    {
      id: 4,
      title: 'Edge Computing Impact Analysis Across Industries',
      excerpt: 'explores how edge computing enhances real-time performance across three sectors: retail, healthcare, and manufacturing. ',
      image: 'https://ideausher.com/wp-content/uploads/2022/10/Edge-computing-image.webp',
      category: 'Datscience',
      date: 'Apr 22, 2025',
      readTime: '3 min read',
      url: 'https://medium.com/@bhavagnabandaru30/how-edge-computing-is-quietly-powering-the-future-of-retail-healthcare-and-manufacturing-0e4cc43beb75'
    },
  ];

  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="text-purple-400 font-medium uppercase tracking-wider">My Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Latest Articles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Blog posts grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id}
              className={`bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-500 group ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read More 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts found matching "{searchTerm}"</p>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 rounded-full bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}