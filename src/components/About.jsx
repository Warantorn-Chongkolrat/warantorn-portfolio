import { motion } from "motion/react";
import { useRef } from "react";
import AnimatedLines from "./AnimatedLines.jsx";

const About = () => {
  const languages = [
    { code: "th", name: "Thai", desc: "Native Speaker" },
    { code: "gb", name: "English", desc: "Fluent Speaker (TOEIC 990/990)" },
    { code: "cn", name: "Mandarin", desc: "Beginner / Conversational" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-black/10 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a fourth year CS Major at Bangkok University who thrives
                  at the intersection of system design, technical leadership,
                  and software engineering. My core strength lies in taking
                  user requirements and translating them into clear system
                  designs in order to facilitate a shared vision between team
                  members and clients.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  In my university projects, I regularly step up as the
                  System Architect and Project Manager, keeping teams aligned
                  and on schedule while actively contributing to front-end
                  and back-end code. I&apos;m looking for Internships and
                  Cooperative Education opportunities to apply my skillset to
                  real-world use and learn from industry professionals.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Education, Location & Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-black/10 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Education
                  </h4>
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="text-lg leading-none shrink-0">🎓</span>
                    <span>
                      Bachelor of Computer Science, Bangkok University (Class
                      of 2027) · 2023 - present
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Location
                  </h4>
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="text-lg leading-none shrink-0">📍</span>
                    <span>Bangkok, Thailand</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {languages.map((language) => (
                      <div
                        key={language.name}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <img
                          src={`https://flagcdn.com/${language.code}.svg`}
                          alt={`${language.name} flag`}
                          className="w-6 h-4 mt-0.5 object-cover rounded-sm shrink-0 shadow-sm"
                        />
                        <span>
                          <span className="text-gray-900 dark:text-white font-medium">
                            {language.name}
                          </span>{" "}
                          — {language.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
