import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Work Experience Data
  const workExperience = [
    {
      title: 'Intern',
      company: 'Code Clause',
      period: 'Jan 2023 - Feb 2023',
      description:
        '• Developed and optimized front-end components using HTML, CSS, JavaScript, and React, ensuring responsive and user-friendly designs for client websites.\n• Led the implementation of a code snippet-sharing feature with syntax highlighting, integrating the React-based UI with backend APIs, gaining exposure to full-stack development.\n• Leveraged a top-performing project evaluation to secure a letter of recommendation; findings directly influenced crucial improvements to optimize user interface elements, resolving three critical causes of front-end crashes.'
    },
    {
      title: 'Intern',
      company: 'Microsoft (Future Ready Talent Virtual Internship)',
      period: 'Mar 2022 - Aug 2022',
      description:
        '• Mastered Microsoft Azure Cloud (App Services, Storage, Networking) and developed a website hosted on Azure.\n• Built, deployed, and managed a website using Azure Web Apps, GitHub Actions, and Azure DevOps for hands-on cloud and DevOps experience.\n• Earned Microsoft Certification and GitHub Student Developer Pack, enhancing cloud and full-stack development skills.'
    }
  ];

  // Education Data
  const education = [
    {
      degree: "Master’s in Information Technology",
      institution: 'Arizona State University',
      period: '2024 - 2026 (Expected)',
      description: ''
    },
    {
      degree: "B.Tech Computer Engineering in Data Analytics",
      institution: 'Presidency University',
      period: '2020 - 2024',
      description: ''
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="text-purple-400 font-medium uppercase tracking-wider">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div ref={ref}>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gray-700 rounded-lg text-purple-400 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-gray-700 pl-8 ml-4">
              {workExperience.map((job, index) => (
                <div 
                  key={index}
                  className={`mb-10 relative transition-all duration-700 ease-out ${
                    inView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-2 border-purple-500 bg-gray-800"></div>
                  <span className="text-sm text-purple-400 font-medium">{job.period}</span>
                  <h4 className="text-xl font-semibold mt-1 text-white">{job.title}</h4>
                  <p className="text-gray-400 mb-2">{job.company}</p>
                  <p className="text-gray-300 whitespace-pre-line">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gray-700 rounded-lg text-purple-400 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-gray-700 pl-8 ml-4">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`mb-10 relative transition-all duration-700 ease-out ${
                    inView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(index + workExperience.length) * 200}ms` }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-2 border-purple-500 bg-gray-800"></div>
                  <span className="text-sm text-purple-400 font-medium">{edu.period}</span>
                  <h4 className="text-xl font-semibold mt-1 text-white">{edu.degree}</h4>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
