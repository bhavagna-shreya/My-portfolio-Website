import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('all');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'AI Adoption Analysis',
      description: 'Analyzed industry trends in AI adoption using web scraping, visualization, and clustering to uncover growth patterns.',
      image: 'https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg',
      category: 'All',
      technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      liveUrl: 'https://github.com/bhavagna-shreya/AI-Adoption-Analysis',
      githubUrl: 'https://github.com/bhavagna-shreya/AI-Adoption-Analysis'
    },
    {
      id: 2,
      title: 'Metaverse Analysis: Hype or Reality',
      description: 'Analyzed metaverse market data to assess its adoption trajectory and actual business use cases.',
      image: 'https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej-1280x720.png',
      category: 'All',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
      liveUrl: 'https://github.com/bhavagna-shreya/Metaverse-Analysis-Hype-or-Reality',
      githubUrl: 'https://github.com/bhavagna-shreya/Metaverse-Analysis-Hype-or-Reality'
    },
    {
      id: 3,
      title: 'Enterprise Data Transformation Pipeline',
      description: 'Built an enterprise-grade data ingestion and transformation pipeline using AWS Lambda and Aurora Serverless.',
      image: 'https://www.clicdata.com/wp-content/uploads/2022/04/data-pipeline.png',
      category: 'All',
      technologies: ['JavaScript', 'AWS Lambda', 'Amazon S3', 'RDS Aurora', 'Terraform'],
      liveUrl: 'https://github.com/bhavagna-shreya/Enterprise-Data-Transformation-Pipeline',
      githubUrl: 'https://github.com/bhavagna-shreya/Enterprise-Data-Transformation-Pipeline'
    },
    {
      id: 4,
      title: 'Customer Churn Prediction',
      description: 'Predicted customer churn in the telecom sector using machine learning models and exploratory data analysis.',
      image: 'https://images.mktw.net/im-739712/social',
      category: 'All',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook', 'Matplotlib'],
      liveUrl: 'https://github.com/bhavagna-shreya/Customer_Churn_Prediction',
      githubUrl: 'https://github.com/bhavagna-shreya/Customer_Churn_Prediction'
    },
    {
      id: 5,
      title: 'Stock Prediction with Linear Regression',
      description: 'Applied linear regression techniques to predict stock trends and visualize financial forecasting outcomes.',
      image: 'https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg',
      category: 'All',
      technologies: ['Python', 'Linear Regression', 'Pandas', 'Seaborn', 'Matplotlib', 'Jupyter Notebook'],
      liveUrl: 'https://github.com/bhavagna-shreya/Stock_prediction-using-linear-regression',
      githubUrl: 'https://github.com/bhavagna-shreya/Stock_prediction-using-linear-regression'
    },
    {
      id: 6,
      title: 'Overfitting in Decision Trees',
      description: 'Exploration of decision tree behavior and overfitting scenarios through visualized Jupyter experiments.',
      image: 'https://www.figma.com/community/resource/7d22209e-11b8-42e5-ba92-630492c05ddb/thumbnail',
      category: 'All',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
      liveUrl: 'https://github.com/bhavagna-shreya/-implementation-of-a-decision-tree-algorithm-and-observe-when-overfitting-occurs.',
      githubUrl: 'https://github.com/bhavagna-shreya/-implementation-of-a-decision-tree-algorithm-and-observe-when-overfitting-occurs.'
    },
    {
      id: 7,
      title: 'Yes Ladder',
      description: 'A gamified web platform that boosts user confidence through progressive challenges, social accountability, and community support.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5KHoNEzflTydyRDqoBcIQDb0pw6uKC9SnQ&s',
      category: 'web',
      technologies: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://wics-hackathon.vercel.app/',
      githubUrl: 'https://github.com/bhavagna-shreya/Yes-Ladder-Website'
    },
    {
      id: 8,
      title: 'Sensory Play',
      description: 'An inclusive sensory engagement website designed to assist neurodivergent children in learning through interactive, playful activities.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-mm4jcuY-DAlZQ8HRFjeuYzCXoezP6tWYA&s',
      category: 'web',
      technologies: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://sensory-play-website.vercel.app/',
      githubUrl: 'https://github.com/bhavagna-shreya/Sensory-play-website'
    },
    {
      id: 9,
      title: 'Portfolio Website',
      description: 'My personal developer portfolio showcasing technical skills, academic background, and selected project work using modern frontend tools.',
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2019/04/155530806117.jpg',
      category: 'web',
      technologies: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: '',
      githubUrl: 'https://github.com/bhavagna-shreya/My-portfolio-Website'
    },
    {
      id: 10,
      title: 'Lofi Study Website',
      description: 'A calming productivity platform combining lo-fi music, timers, daily goals, ambient sounds, and study session summaries to help users stay focused.',
      image: 'https://d3q27bh1u24u2o.cloudfront.net/news/lofimain.jpg',
      category: 'web',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'Vercel'],
      liveUrl: 'https://my-repository-21sg.vercel.app/',
      githubUrl: 'https://github.com/bhavagna-shreya/my-repository'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="text-purple-400 font-medium uppercase tracking-wider">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Recent Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'web' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'mobile' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            More
          </button>
        </div>

        {/* Projects grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/10 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-700 text-purple-300 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/bhavagna-shreya?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}