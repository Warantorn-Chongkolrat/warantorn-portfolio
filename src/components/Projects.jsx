import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ImageCarousel from './ImageCarousel.jsx';

import moby1 from '../assets/projects/1moby/1moby-1.png';
import moby2 from '../assets/projects/1moby/1moby-2.png';
import moby3 from '../assets/projects/1moby/1moby-3.png';
import moby4 from '../assets/projects/1moby/1moby-4.png';

import pos1 from '../assets/projects/pos/pos-1.jpg';
import pos2 from '../assets/projects/pos/pos-2.png';
import pos3 from '../assets/projects/pos/pos-3.png';
import pos4 from '../assets/projects/pos/pos-4.png';

import medilens1 from '../assets/projects/medilens/medilens-1.png';
import medilens2 from '../assets/projects/medilens/medilens-2.png';
import medilens3 from '../assets/projects/medilens/medilens-3.png';

import catFeeder1 from '../assets/projects/cat-feeder/cat-feeder-1.png';
import catFeeder2 from '../assets/projects/cat-feeder/cat-feeder-2.jpg';
import catFeeder3 from '../assets/projects/cat-feeder/cat-feeder-3.jpg';
import catFeeder4 from '../assets/projects/cat-feeder/cat-feeder-4.jpg';

import plantWatering1 from '../assets/projects/plant-watering/plant-watering-1.png';
import plantWatering2 from '../assets/projects/plant-watering/plant-watering-2.png';
import plantWatering3 from '../assets/projects/plant-watering/plant-watering-3.jpg';
import plantWatering4 from '../assets/projects/plant-watering/plant-watering-4.jpg';
import plantWatering5 from '../assets/projects/plant-watering/plant-watering-5.jpg';

// ProjectCard component remains unchanged
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    delay: index * 200,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered ? 'scale(1.02) translateY(-10px)' : 'scale(1) translateY(0)',
    boxShadow: isHovered
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      : '0 0 0 0 rgba(0, 0, 0, 0)',
    config: { tension: 300, friction: 20 },
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 0.3 : 0.6,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="group relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageCarousel
          images={project.images}
          alt={project.title}
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
        <animated.div
          style={overlayProps}
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
        />
        {project.status && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-500/90 text-white shadow-lg backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          {project.role && (
            <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
              {project.role}
            </p>
          )}
        </div>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-black/5 dark:bg-white/5 text-blue-500 dark:text-blue-400 rounded-full hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-400 transition-all duration-300 group/link"
              >
                {link.label === 'GitHub' ? (
                  <svg className="w-5 h-5 transform group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 transform group-hover/link:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
  });

  const projects = [
    {
      title: '1Moby HR Competency Assessment & LMS Platform',
      status: 'Current',
      role: 'System Architect/Analyst · Frontend Developer · Project Manager',
      description: 'An end-to-end enterprise HR web platform combining 180° employee competency evaluations, dynamic skill-gap analysis, personalized learning paths (IDP), and an AI-driven LMS with gamification.',
      images: [moby1, moby2, moby3, moby4],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'shadcn/ui', 'Google Gemini API', 'Figma'],
      links: [
        { label: 'Figma', url: 'https://www.figma.com/proto/mJ6bHhqIxC41ATs6PltuTo/1Moby---Demo?node-id=341-6800&starting-point-node-id=341%3A6800&t=OHQnWYkyS4wnXbz0-1' },
        { label: 'Canva', url: 'https://canva.link/1mobyhrbbq' },
      ],
    },
    {
      title: 'POS for SME',
      role: 'UI Designer · Full-Stack Developer · Project Manager',
      description: 'An offline-first Android Point-of-Sale mobile application for Small Businesses built with .NET MAUI featuring FIFO inventory tracking, multi-state checkout workflows, and hybrid AI product scanning.',
      images: [pos1, pos2, pos3, pos4],
      technologies: ['.NET MAUI 10', 'C#', 'XAML', 'SQLite', 'MVVM', 'ML Kit OCR', 'Typhoon AI / Vision', 'ClosedXML'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Pakaoww/POS_moblie_project' },
      ],
    },
    {
      title: 'Medi Lens: AI Health Screener & Lab Report Explainer',
      role: 'System Architect/Analyst · Project Manager',
      description: 'An AI-powered web platform designed to simplify complex medical lab results into clear, understandable insights while providing 24/7 personalized health guidance.',
      images: [medilens1, medilens2, medilens3],
      technologies: ['FastAPI', 'Typhoon OCR 1.5', 'Typhoon LLM 2.5', 'HTML/CSS', 'Railway'],
      links: [
        { label: 'GitHub', url: 'https://github.com/Pakaoww/AI-Medilens' },
      ],
    },
    {
      title: 'I HAVE Feeder: Smart Cat Feeder',
      role: 'System Architect & Full-Stack Cloud Developer',
      description: 'An automated IoT ecosystem combining embedded microcontrollers, two-way cloud REST communication, interactive web dashboards, and Generative AI for pet portion recommendation.',
      images: [catFeeder1, catFeeder2, catFeeder3, catFeeder4],
      technologies: ['HTML/CSS/JS', 'Google Apps Script', 'Google Sheets', 'Gemini API', 'ESP32', 'Embedded C++', 'Load Cell (HX711)', 'Ultrasonic Sensors', 'Arduino IDE'],
      links: [
        { label: 'More Info', url: 'https://drive.google.com/drive/folders/1a43cRkYmUOwfWe6T-gFzwizUzEY-vq_4?usp=sharing' },
      ],
    },
    {
      title: 'Automatic Plant Watering & Soil Monitoring System',
      role: 'System Analyst · IoT Developer',
      description: 'An automated microcontroller system using ESP32 to monitor soil moisture and water tank levels with automated pump controls and physical maintenance safety modes.',
      images: [plantWatering1, plantWatering2, plantWatering3, plantWatering4, plantWatering5],
      technologies: ['ESP32', 'Embedded C++', 'Soil Moisture Sensor', 'Water Level Sensor', 'Relay Module', 'Arduino IDE'],
      links: [
        { label: 'More Info', url: 'https://drive.google.com/drive/folders/1YWY3kvx33-sClZQIYVXZGK0h4mS2XUQy?usp=sharing' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div ref={ref} style={titleSpring} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
