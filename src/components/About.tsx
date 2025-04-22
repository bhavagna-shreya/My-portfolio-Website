import { Code, PenTool, Lightbulb, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

export default function About() {
  const { ref: aboutRef, inView: aboutVisible } = useInView({ threshold: 0.1 });
  const { ref: skillsRef, inView: skillsVisible } = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      items: ['JavaScript', 'Python', 'TypeScript', 'React.js', 'Node.js', 'Express.js'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
    },
    {
      category: 'Data & Visualization',
      items: ['SQL', 'Tableau', 'Power BI', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Tools & Concepts',
      items: ['Firebase', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Figma', 'Agile'],
    },
  ];

  const services = [
    {
      icon: <Code size={28} />,
      title: 'Full Stack Development',
      description: 'Building responsive, scalable applications with modern frameworks and APIs.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Machine Learning & Data Science',
      description: 'Creating ML models for churn prediction, NLP-based fake news detection, and building insightful dashboards using real-world datasets.',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Cloud Solutions',
      description: 'Deploying applications using AWS, Terraform, and Docker with a focus on scalability and automation.',
    },
    {
      icon: <PenTool size={28} />,
      title: 'Data & Dashboarding',
      description: 'Turning data into interactive dashboards with Tableau, Power BI, and Bokeh for actionable business insights.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="text-purple-400 font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div
            ref={aboutRef}
            className={`transition-opacity duration-700 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Get to know me!</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm <span className="text-purple-400">Bhavagna Shreya Bandaru</span>, a graduate student at <strong>Arizona State University</strong> pursuing a Master’s in Information Technology. I'm driven by a passion for building scalable web apps, solving real-world problems with data, and deploying cloud-native solutions.
              </p>
              <p>
                I enjoy blending full-stack development with machine learning to create tools that are both functional and intelligent. Whether it's designing clean frontends or developing models that detect fake news or predict customer churn — I love building things that make a difference.
              </p>
              <p>
                I believe in continuous learning, clean code, and building for impact. When I’m not working on a project, you’ll find me strumming my ukulele or enjoying long, peaceful walks.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>

          <div
            ref={skillsRef}
            className={`transition-all duration-1000 delay-300 ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">My Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((group, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">{group.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-purple-500 hover:bg-purple-500 hover:text-white transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-12 text-center text-white">Services I Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10 group"
              >
                <div className="p-4 mb-4 inline-block bg-gray-700 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
