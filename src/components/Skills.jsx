import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const SkillCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.03) translateY(-5px)"
      : "scale(1) translateY(0px)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-black/10 dark:border-white/10 hover:border-blue-500/50 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
          {category.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full hover:bg-black/10 dark:hover:bg-white/10 hover:text-blue-400 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

const SoftSkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.03) translateY(-5px)"
      : "scale(1) translateY(0px)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-black/10 dark:border-white/10 hover:border-purple-500/50 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {skill.description}
        </p>
      </div>
    </animated.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  });

  const technicalSkills = [
    {
      name: "System and Product Design",
      tags: [
        "System Architecture",
        "ERD Design",
        "Data Modeling",
        "Use Case Diagrams",
        "User Flow Design",
        "UI/UX Wireframing",
      ],
    },
    {
      name: "Project Management",
      tags: [
        "SDLC",
        "Agile / Scrum",
        "Kanban",
        "Jira",
        "Gantt Charts",
        "Sprint Planning & Tracking",
        "Project Charters",
        "Requirements Scoping",
      ],
    },
    {
      name: "Programming Languages",
      tags: ["Python", "Java", "C#", "C++", "SQL", "HTML/CSS", "TypeScript"],
    },
    {
      name: "Frameworks and Libraries",
      tags: ["Next.js", "React", ".NET MAUI (XAML)", "Node.js", "Tailwind CSS"],
    },
    {
      name: "Tools & Technologies",
      tags: ["Git", "GitHub", "Figma", "VS Code", "Visual Studio", "Vercel"],
    },
  ];

  const softSkills = [
    {
      name: "Creativity & Innovation",
      description:
        "Coming up with ideas that are innovative, practical and fulfill the requirements needed.",
    },
    {
      name: "Communication",
      description:
        "Bridging communication between technical team members and non-technical stakeholders.",
    },
    {
      name: "Stakeholder Engagement",
      description:
        "Keep clients in the loop about the project progression with consistent communication.",
    },
    {
      name: "Leadership & Ownership",
      description:
        "Natural leader, helps the team keep track of project delivery schedules, due dates, and goal alignment within a project.",
    },
    {
      name: "Team Work",
      description:
        "Thrives within a team environment with differing personality and culture.",
    },
    {
      name: "Problem Solving",
      description:
        "Breaking complex requirements into structured, actionable tasks using computational thinking.",
    },
    {
      name: "Public Speaking",
      description:
        "Able to work in client facing roles and perform tasks like pitching or presentations in front of an audience.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div
            ref={ref}
            style={titleSpring}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </animated.div>

          {/* Technical Skills */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Technical Skills
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((category, index) => (
                <SkillCard key={category.name} category={category} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Soft Skills
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
